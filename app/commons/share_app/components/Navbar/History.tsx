import { CHECKED_MODE } from 'commons/ListIntersectionObserver/constants';
import { toggleChecked } from 'commons/share_app/containers/Mails/actions';
import {
  getCheckedCount,
  getMailsCount,
} from 'commons/share_app/containers/Mails/selectors';
import { FC, memo, useCallback } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';
import { dispatch } from 'commons/utils/store';

import Back from './Back';
import CheckedList from './CheckedList';

const History: FC = () => {
  const count = useSelector(getCheckedCount);
  const allCount = useSelector(getMailsCount);

  const onClick = useCallback((isChecked) => {
    dispatch(toggleChecked(0, isChecked, CHECKED_MODE.ALL));
  }, []);

  return count ? (
    <CheckedList
      count={count}
      isAllChecked={count >= allCount}
      onClick={onClick}
    />
  ) : (
    <Back />
  );
};

History.displayName = 'History';

export default memo(History);
