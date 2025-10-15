import { TypedDispatch } from 'initRedux';

import useTranslations from 'commons/hooks/useTranslations';
import Modal from 'commons/Modal';
import { close, openModal } from 'commons/Modal/actions';
import { getParams, isOpenByModalId } from 'commons/Modal/selectors';
import { ButtonAction, ModalActionsStyled } from 'commons/Modal/styles';
import { SUB_PAGE_NAME_HISTORY } from 'commons/share_app/containers/Mails/constants';
import { removeNewsletterMails } from 'commons/share_app/containers/Newsletters/actions';
import { NEWSLETTERS_URL } from 'commons/share_app/containers/Newsletters/constants';
import {
  getNewslettersLength,
  isFetched as isFetchedNewslettersSelector,
  isFetching as isFetchingNewslettersSelector,
  isRemovingMails as isRemovingMailsSelector,
} from 'commons/share_app/containers/Newsletters/selectors';
import { eventsApiSendAction } from 'commons/utils/ads';
import { FC, useCallback } from 'commons/utils/react';
import {
  getStateValueBySelector,
  useSelector,
} from 'commons/utils/react-redux';
import { dispatch } from 'commons/utils/store';

import { goBack } from 'containers/App/actions';
import { getCurrentSubPage } from 'containers/App/selectors';

import {
  REDIRECT_TO_NEWSLETTERS_MODAL_ID,
  REMOVE_MAILS_NEWSLETTER_MODAL_ID,
} from '../constants';
import { isRedirectToNewslettersModalHidden as isRedirectToNewslettersModalHiddenSelector } from '../RedirectToNewslettersModal/selectors';

const onBack = (d: TypedDispatch) => {
  if (getStateValueBySelector(getCurrentSubPage) === SUB_PAGE_NAME_HISTORY) {
    d(goBack());
  }
};

const RemoveNewsletterMailsModal: FC = () => {
  const t = useTranslations();

  const isOpen = useSelector(isOpenByModalId, REMOVE_MAILS_NEWSLETTER_MODAL_ID);
  const { emailFrom, mid } = useSelector(getParams);
  const isRemovingMails = useSelector(isRemovingMailsSelector);
  const isFetchedNewsletters = useSelector(isFetchedNewslettersSelector);
  const isFetchigNewsletters = useSelector(isFetchingNewslettersSelector);
  const isLoadingNewsletters = !isFetchedNewsletters && isFetchigNewsletters;
  const newslettersLength = useSelector(getNewslettersLength);
  const isRedirectToNewslettersModalHidden = useSelector(
    isRedirectToNewslettersModalHiddenSelector,
  );
  const isNewslettersPage =
    window.location.pathname.indexOf(NEWSLETTERS_URL) > -1;
  const shouldShowRedirectToAllNewslettersModal =
    newslettersLength > 0 &&
    !isNewslettersPage &&
    !isRedirectToNewslettersModalHidden;

  const handleCancel = useCallback(() => {
    dispatch(
      eventsApiSendAction({
        event_category: 'newsletters',
        event_action: 'unsubscribe_mails_not_removed',
        mid,
      }),
    );

    if (shouldShowRedirectToAllNewslettersModal) {
      dispatch(
        openModal(REDIRECT_TO_NEWSLETTERS_MODAL_ID, {
          emailFrom,
          mid,
        }),
      );
    } else {
      dispatch(close());
      onBack(dispatch);
    }
  }, [emailFrom, shouldShowRedirectToAllNewslettersModal, mid]);

  const handleRemoveMails = useCallback(async () => {
    await dispatch(removeNewsletterMails(emailFrom));

    dispatch(
      eventsApiSendAction({
        event_category: 'newsletters',
        event_action: 'unsubscribe_mails_removed',
        mid,
      }),
    );

    if (shouldShowRedirectToAllNewslettersModal) {
      dispatch(
        openModal(REDIRECT_TO_NEWSLETTERS_MODAL_ID, {
          emailFrom,
          mid,
        }),
      );
    } else {
      dispatch(close());
      onBack(dispatch);
    }
  }, [emailFrom, shouldShowRedirectToAllNewslettersModal, mid]);

  return isOpen ? (
    <Modal onClose={handleCancel} title={t('newsletterRemoveMailsModalTitle')}>
      <p>
        {t('newsletterRemoveMailsModalText')} <b>{emailFrom}</b>?
      </p>
      <ModalActionsStyled>
        <ButtonAction
          color="default"
          isDisabled={isLoadingNewsletters}
          isFetching={isLoadingNewsletters}
          label={t('ctaCancel')}
          onClick={handleCancel}
          size="lg"
        />
        <ButtonAction
          color="primary"
          isDisabled={isRemovingMails || isLoadingNewsletters}
          isFetching={isRemovingMails || isLoadingNewsletters}
          label={t('newsletterRemoveMails')}
          onClick={handleRemoveMails}
          size="lg"
        />
      </ModalActionsStyled>
    </Modal>
  ) : null;
};

RemoveNewsletterMailsModal.displayName = 'RemoveNewsletterMailsModal';

export default RemoveNewsletterMailsModal;
