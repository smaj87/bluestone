import useTranslations from 'commons/hooks/useTranslations';
import Modal from 'commons/Modal';
import { close } from 'commons/Modal/actions';
import { getParams, isOpenByModalId } from 'commons/Modal/selectors';
import { ButtonAction, ModalActionsStyled } from 'commons/Modal/styles';
import { deleteMailsFromNewsletter } from 'commons/share_app/containers/Newsletters/actions';
import { DELETE_MAILS_NEWSLETTER_DAYS_COUNT } from 'commons/share_app/containers/Newsletters/constants';
import { FC, useCallback } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';
import { dispatch } from 'commons/utils/store';

import { NEWSLETTER_DELETE_CONFIRMATION_MODAL_ID } from '../constants';

const NewsletterDeleteConfirmationModal: FC = () => {
  const t = useTranslations();

  const isOpen = useSelector(
    isOpenByModalId,
    NEWSLETTER_DELETE_CONFIRMATION_MODAL_ID,
  );
  const params = useSelector(getParams);
  const { count, email, name } = params;

  const onClickDelete = useCallback(() => {
    dispatch(deleteMailsFromNewsletter(email, count));

    dispatch(close());
  }, [email]);

  const onClickCancel = useCallback(() => {
    dispatch(close());
  }, []);

  return isOpen ? (
    <Modal
      hideCloseButton
      size="md"
      title={t('newsletterDeleteOlderThanModalTitle')}
    >
      <p>
        {t('newsletterDeleteOlderThanModalText', {
          daysCount: DELETE_MAILS_NEWSLETTER_DAYS_COUNT,
        })}
        <b>{name || email}</b>?
      </p>

      <ModalActionsStyled>
        <ButtonAction
          color="default"
          label={t('ctaCancel')}
          onClick={onClickCancel}
          size="md"
        />
        <ButtonAction
          color="primary"
          label={t('newsletterRemoveMails')}
          onClick={onClickDelete}
          size="md"
        />
      </ModalActionsStyled>
    </Modal>
  ) : null;
};

export default NewsletterDeleteConfirmationModal;
