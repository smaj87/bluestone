import { CHECKED_MODE } from 'commons/ListIntersectionObserver/constants';
import { toggleChecked } from 'commons/share_app/containers/Attachments/actions';
import {
  getCheckedCount,
  isAllChecked as isAllCheckedSelector,
} from 'commons/share_app/containers/Attachments/selectors';
import { FC, memo, useCallback } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';
import { dispatch } from 'commons/utils/store';

import CheckedList from './CheckedList';
import Default from './Default';

const Attachments: FC = () => {
  const count = useSelector(getCheckedCount);
  const isAllChecked = useSelector(isAllCheckedSelector);

  const onClick = useCallback((isChecked) => {
    dispatch(toggleChecked('', isChecked, CHECKED_MODE.ALL));
  }, []);

  return count ? (
    <CheckedList count={count} isAllChecked={isAllChecked} onClick={onClick} />
  ) : (
    <Default />
  );
};

export default memo(Attachments);
