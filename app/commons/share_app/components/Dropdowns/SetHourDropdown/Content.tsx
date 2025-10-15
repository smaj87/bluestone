import { closeDropdown } from 'commons/Dropdown/actions';
import {
  GroupButton,
  GroupListItemStyled,
  GroupListStyled,
} from 'commons/GroupActions/styles';
import { close } from 'commons/ToolbarSubmenu/actions';
import { isToday } from 'commons/utils/date';
import formatDate from 'commons/utils/formatDate';
import { FC, memo, useCallback, useMemo } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';
import { dispatch } from 'commons/utils/store';

import { setScheduleSendTime } from 'containers/NewMail/actions';
import { SCHEDULE_SEND_TIMES } from 'containers/NewMail/constants';
import {
  getScheduleSendDateTime,
  getScheduleSendTime,
} from 'containers/NewMail/selectors';

import { DROPDOWN_POPUP_ID } from './constants';

const Content: FC = () => {
  const selectedTime = useSelector(getScheduleSendTime);
  const selectedDate = useSelector(getScheduleSendDateTime);

  const nowTime = useMemo(() => {
    const dateNow = new Date();

    return formatDate(dateNow, 'HH:mm');
  }, []);

  const times = useMemo(() => {
    if (isToday(selectedDate)) {
      return SCHEDULE_SEND_TIMES.filter((time) => time > nowTime);
    }

    return SCHEDULE_SEND_TIMES;
  }, [selectedDate, nowTime]);

  const onSetHour = useCallback((_, time: string) => {
    dispatch(setScheduleSendTime(time));

    dispatch(close());
    dispatch(closeDropdown(DROPDOWN_POPUP_ID));
  }, []);

  return (
    <GroupListStyled>
      {times.map((time) => (
        <GroupListItemStyled key={time}>
          <GroupButton
            $align="center"
            $isActive={time === selectedTime}
            label={time}
            onClick={onSetHour}
            params={time}
            shape="full"
            size="md"
          />
        </GroupListItemStyled>
      ))}
    </GroupListStyled>
  );
};

export default memo(Content);
