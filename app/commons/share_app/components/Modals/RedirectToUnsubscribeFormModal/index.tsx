import useTranslations from 'commons/hooks/useTranslations';
import Modal from 'commons/Modal';
import { close, openModal } from 'commons/Modal/actions';
import { getParams, isOpenByModalId } from 'commons/Modal/selectors';
import { ButtonAction, ModalActionsStyled } from 'commons/Modal/styles';
import { eventsApiSendAction } from 'commons/utils/ads';
import { FC, useCallback, useEffect } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';
import { dispatch } from 'commons/utils/store';

import {
  REDIRECT_TO_UNSUBSCRIBE_FORM_MODAL_ID,
  REMOVE_MAILS_NEWSLETTER_MODAL_ID,
} from '../constants';

const RedirectToUnsubscribeFormModal: FC = () => {
  const t = useTranslations();

  const isOpen = useSelector(
    isOpenByModalId,
    REDIRECT_TO_UNSUBSCRIBE_FORM_MODAL_ID,
  );
  const { emailFrom, mid, url } = useSelector(getParams);

  const handleCancel = useCallback(() => {
    dispatch(close());
  }, []);

  const handleRedirect = useCallback(async () => {
    dispatch(
      eventsApiSendAction({
        event_category: 'newsletters',
        event_action: 'unsubscribe_redirect_went_to_page',
        mid,
      }),
    );

    window.open(url, '_blank');
    dispatch(
      openModal(REMOVE_MAILS_NEWSLETTER_MODAL_ID, {
        emailFrom,
        mid,
      }),
    );
  }, [url]);

  useEffect(() => {
    if (isOpen) {
      dispatch(
        eventsApiSendAction({
          event_category: 'newsletters',
          event_action: 'unsubscribe_redirect_opened',
          mid,
        }),
      );
    }
  }, [isOpen, mid]);

  return isOpen ? (
    <Modal title={t('newslettersUnsubscribeTitle')}>
      <p>{t('newslettersRedirectText')}</p>
      <ModalActionsStyled>
        <ButtonAction
          color="default"
          label={t('ctaCancel')}
          onClick={handleCancel}
          size="lg"
        />
        <ButtonAction
          color="primary"
          label={t('ctaOk')}
          onClick={handleRedirect}
          size="lg"
        />
      </ModalActionsStyled>
    </Modal>
  ) : null;
};

RedirectToUnsubscribeFormModal.displayName = 'RedirectToUnsubscribeFormModal';

export default RedirectToUnsubscribeFormModal;
