import { closeDropdown } from 'commons/Dropdown/actions';
import {
  GroupButton,
  GroupListItemStyled,
  GroupListStyled,
} from 'commons/GroupActions/styles';
import useTranslations from 'commons/hooks/useTranslations';
import { openModal } from 'commons/Modal/actions';
import { close } from 'commons/ToolbarSubmenu/actions';
import { FC, memo, useCallback } from 'commons/utils/react';
import { getStateValueBySelector } from 'commons/utils/react-redux';
import { dispatch } from 'commons/utils/store';

import { MAIL_SEND_CONFIRMATION_MODAL_ID } from 'components/Modals/MailSendConfirmationModal/constants';
import { MAIL_SEND_SCHEDULE_MODAL_ID } from 'components/Modals/MailSendScheduleModal/constants';
import { sendMail } from 'containers/NewMail/actions';
import { shouldShowSendConfirmationModal } from 'containers/NewMail/selectors';

import { DROPDOWN_POPUP_ID } from './constants';

const Content: FC = () => {
  const t = useTranslations();

  const onSend = useCallback(() => {
    const shouldShowModal = getStateValueBySelector(
      shouldShowSendConfirmationModal,
    );

    if (shouldShowModal) {
      dispatch(openModal(MAIL_SEND_CONFIRMATION_MODAL_ID));
    } else {
      dispatch(sendMail());
    }

    dispatch(close());
    dispatch(closeDropdown(DROPDOWN_POPUP_ID));
  }, []);

  const onSendSchedule = useCallback(() => {
    dispatch(openModal(MAIL_SEND_SCHEDULE_MODAL_ID));
    dispatch(close());
    dispatch(closeDropdown(DROPDOWN_POPUP_ID));
  }, []);

  return (
    <GroupListStyled>
      <GroupListItemStyled>
        <GroupButton
          $align="left"
          icon="send"
          label={t('ctaSend')}
          onClick={onSend}
          size="md"
        />
      </GroupListItemStyled>
      <hr />
      <GroupListItemStyled>
        <GroupButton
          $align="left"
          className="stats_send-schedule-button"
          icon="sendSchedule"
          label={t('ctaSendSchedule')}
          onClick={onSendSchedule}
          size="md"
        />
      </GroupListItemStyled>
    </GroupListStyled>
  );
};

export default memo(Content);
