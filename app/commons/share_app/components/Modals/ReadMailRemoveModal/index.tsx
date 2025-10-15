import useTranslations from 'commons/hooks/useTranslations';
import Modal from 'commons/Modal';
import { close } from 'commons/Modal/actions';
import { isOpenByModalId } from 'commons/Modal/selectors';
import { ButtonAction, ModalActionsStyled } from 'commons/Modal/styles';
import { removeMails } from 'commons/share_app/containers/Mails/actions';
import {
  getMail,
  getMidByType,
} from 'commons/share_app/containers/ReadMail/selectors';
import { FC, memo, useCallback } from 'commons/utils/react';
import {
  getStateValueBySelector,
  useSelector,
} from 'commons/utils/react-redux';
import { historyPush } from 'commons/utils/route';
import { dispatch } from 'commons/utils/store';

import { goBack } from 'containers/App/actions';
import {
  FOLDER_SPAM_KEY,
  FOLDER_TRASH_KEY,
} from 'containers/Folders/constants';
import { getFidByKey } from 'containers/Folders/selectors';
import { READ_MAIL_URL } from 'utils//constants';

import { READ_MAIL_REMOVE_MODAL_ID } from '../constants';

const ReadMailRemoveModal: FC = () => {
  const t = useTranslations();
  const isOpen = useSelector(isOpenByModalId, READ_MAIL_REMOVE_MODAL_ID);

  const onCancel = useCallback(() => {
    dispatch(close());
  }, []);

  const onConfirm = useCallback(() => {
    const mail = getStateValueBySelector(getMail);
    const spamFid = getStateValueBySelector(getFidByKey, FOLDER_SPAM_KEY);
    const trashFid = getStateValueBySelector(getFidByKey, FOLDER_TRASH_KEY);
    const prevMid = getStateValueBySelector(getMidByType, 'prev');

    dispatch(close());

    if (mail.mid > 0 && mail.fid > 0) {
      dispatch(
        removeMails([mail.mid], spamFid === mail.fid ? spamFid : trashFid),
      );

      if (prevMid > 0) {
        historyPush(`/${READ_MAIL_URL}/_mid/${prevMid}`);
      } else {
        dispatch(goBack());
      }
    }
  }, []);

  return isOpen ? (
    <Modal size="md" title={t('modalConfirmationTitle')}>
      <p>
        {t('ReadMail/modalConfirmationText')}{' '}
        <b>{t('modalConfirmationIrreversible')}</b>
      </p>
      <ModalActionsStyled>
        <ButtonAction
          color="default"
          label={t('ctaCancel')}
          onClick={onCancel}
          size="lg"
        />
        <ButtonAction
          color="primary"
          label={t('ctaYes')}
          onClick={onConfirm}
          size="lg"
        />
      </ModalActionsStyled>
    </Modal>
  ) : null;
};

export default memo(ReadMailRemoveModal);
