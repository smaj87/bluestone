import useTranslations from 'commons/hooks/useTranslations';
import Modal from 'commons/Modal';
import { close } from 'commons/Modal/actions';
import { getParams, isOpenByModalId } from 'commons/Modal/selectors';
import { ButtonAction, ModalActionsStyled } from 'commons/Modal/styles';
import { showSuccess } from 'commons/Notifications/actions';
import { eventsApiSendAction } from 'commons/utils/ads';
import { FC, useCallback } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';
import { dispatch } from 'commons/utils/store';

import { NEWSLETTER_REPORT_MODAL_ID } from '../constants';

const NewsletterReportModal: FC = () => {
  const t = useTranslations();

  const isOpen = useSelector(isOpenByModalId, NEWSLETTER_REPORT_MODAL_ID);
  const params = useSelector(getParams);
  const { email, name } = params;

  const onClickReport = useCallback(() => {
    dispatch(
      eventsApiSendAction({
        event_category: 'newsletters',
        event_action: 'report_error',
      }),
    );
    dispatch(showSuccess(t('reportProblemSuccess')));
    dispatch(close());
  }, [email]);

  const onClickCancel = useCallback(() => {
    dispatch(close());
  }, []);

  return isOpen ? (
    <Modal
      hideCloseButton
      size="md"
      title={t('newsletterReportProblemModalTitle')}
    >
      <p>
        {t('newsletterReportProblemModalText')}
        <b>{name || email}</b>?
      </p>

      <ModalActionsStyled>
        <ButtonAction
          color="default"
          label={t('ctaCancel')}
          onClick={onClickCancel}
          size="lg"
        />
        <ButtonAction
          color="primary"
          label={t('ctaReportProblem')}
          onClick={onClickReport}
          size="lg"
        />
      </ModalActionsStyled>
    </Modal>
  ) : null;
};

export default NewsletterReportModal;
