import LabelNew from 'commons/LabelNew';
import { NotificationBadgeStyledHideTime } from 'commons/LabelNew/styles';
import { isLabelNewShow } from 'commons/share_app/containers/Mails/selectors';
import { FC, memo, useEffect } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';
import { dispatch } from 'commons/utils/store';

import { setNotificationByMid } from 'containers/Folders/actions';

interface Props {
  id: number;
}

const MailItemLabelNew: FC<Props> = ({ id }) => {
  const isShow = useSelector(isLabelNewShow, id);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    const closeLabel = () => {
      dispatch(setNotificationByMid(id));
    };

    if (isShow) {
      timer = setTimeout(closeLabel, NotificationBadgeStyledHideTime);
    }

    return () => {
      clearTimeout(timer);
      closeLabel();
    };
  }, [id, isShow]);

  return isShow ? <LabelNew /> : null;
};

export default memo(MailItemLabelNew);
