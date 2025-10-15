import Checkbox from 'commons/Checkbox';
import useTranslations from 'commons/hooks/useTranslations';
import { updateFrontCommons } from 'commons/hooks/useUserConfig/actions';
import { getFrontCommons } from 'commons/hooks/useUserConfig/selectors';
import Modal from 'commons/Modal';
import { close } from 'commons/Modal/actions';
import { getParams, isOpenByModalId } from 'commons/Modal/selectors';
import {
  ButtonAction,
  ModalActionsStyled,
  ModalOptionsStyled,
} from 'commons/Modal/styles';
import { NEWSLETTERS_URL } from 'commons/share_app/containers/Newsletters/constants';
import { eventsApiSendAction } from 'commons/utils/ads';
import { TargetedEvent } from 'commons/utils/preact';
import { FC, useCallback, useEffect, useState } from 'commons/utils/react';
import {
  getStateValueBySelector,
  useSelector,
} from 'commons/utils/react-redux';
import { historyPush } from 'commons/utils/route';
import { dispatch } from 'commons/utils/store';

import { REDIRECT_TO_NEWSLETTERS_MODAL_ID } from '../constants';

const RedirectToNewslettersModal: FC = () => {
  const t = useTranslations();
  const isOpen = useSelector(isOpenByModalId, REDIRECT_TO_NEWSLETTERS_MODAL_ID);
  const { emailFrom, mid } = useSelector(getParams);
  const [shouldHideModal, setShouldHideModal] = useState(false);

  useEffect(() => {
    if (isOpen) {
      dispatch(
        eventsApiSendAction({
          event_category: 'newsletters',
          event_action: 'unsubscribe_view_redirect_opened',
          mid,
        }),
      );
    } else {
      setShouldHideModal(false);
    }
  }, [isOpen]);

  const saveModalVisibilityToFrontCommons = useCallback(() => {
    const frontCommons = getStateValueBySelector(getFrontCommons);

    dispatch(
      updateFrontCommons({
        ...frontCommons,
        interfaceUI: {
          ...(frontCommons.interfaceUI || {}),
          redirectToNewslettersModalHidden: Number(shouldHideModal),
        },
      }),
    );
  }, [shouldHideModal]);

  const handleCancel = useCallback(() => {
    dispatch(
      eventsApiSendAction({
        event_category: 'newsletters',
        event_action: 'unsubscribe_view_redirect_cancel',
        event_details: {
          show_again: !shouldHideModal,
        },
        mid,
      }),
    );

    dispatch(close());
    saveModalVisibilityToFrontCommons();
  }, [emailFrom, shouldHideModal, mid]);

  const handleRedirect = useCallback(async () => {
    dispatch(
      eventsApiSendAction({
        event_category: 'newsletters',
        event_action: 'unsubscribe_view_redirect_clicked',
        event_details: {
          show_again: !shouldHideModal,
        },
        mid,
      }),
    );

    dispatch(close());
    saveModalVisibilityToFrontCommons();
    historyPush(`/${NEWSLETTERS_URL}`);
  }, [emailFrom, shouldHideModal, mid]);

  const handleClickCheckbox = useCallback(
    (e: TargetedEvent<HTMLInputElement>) => {
      setShouldHideModal(e.currentTarget.checked);
    },
    [],
  );

  return isOpen ? (
    <Modal
      onClose={handleCancel}
      size="md"
      title={t('newslettersRedirectToAllTitle')}
    >
      <p>{t('newslettersRedirectToAllText')}</p>
      <ModalOptionsStyled>
        <Checkbox
          id="isAllDay"
          isChecked={shouldHideModal}
          label={t('newslettersRedirectToAllCheckbox')}
          onChange={handleClickCheckbox}
          placement="modal"
        />
      </ModalOptionsStyled>
      <ModalActionsStyled>
        <ButtonAction
          color="default"
          label={t('ctaClose')}
          onClick={handleCancel}
          size="lg"
        />
        <ButtonAction
          color="primary"
          label={t('newslettersRedirectToAllButton')}
          onClick={handleRedirect}
          size="lg"
        />
      </ModalActionsStyled>
    </Modal>
  ) : null;
};

RedirectToNewslettersModal.displayName = 'RedirectToNewslettersModal';

export default RedirectToNewslettersModal;
