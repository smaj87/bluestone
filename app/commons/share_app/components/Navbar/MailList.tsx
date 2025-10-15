import { CHECKED_MODE } from 'commons/ListIntersectionObserver/constants';
import { toggleChecked } from 'commons/share_app/containers/Mails/actions';
import {
  getCheckedCount,
  isAnyUnchecked as isAnyUncheckedSelector,
} from 'commons/share_app/containers/Mails/selectors';
import { FC, memo, useCallback } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';
import { dispatch } from 'commons/utils/store';

import CheckedList from './CheckedList';
import Default from './Default';

const MailList: FC = () => {
  const count = useSelector(getCheckedCount);
  const isAnyUnchecked = useSelector(isAnyUncheckedSelector);

  const onClick = useCallback((isChecked) => {
    dispatch(toggleChecked(0, isChecked, CHECKED_MODE.ALL));
  }, []);

  return count ? (
    <CheckedList
      count={count}
      isAllChecked={!isAnyUnchecked}
      onClick={onClick}
    />
  ) : (
    <Default />
  );
};

MailList.displayName = 'MailList';

export default memo(MailList);
