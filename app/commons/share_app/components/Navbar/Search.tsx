import { CHECKED_MODE } from 'commons/ListIntersectionObserver/constants';
import MobileLoader from 'commons/MobileLoader';
import {
  NavbarContentLeftStyled,
  NavbarContentRightStyled,
} from 'commons/Navbar/styles';
import SearchComponent from 'commons/share_app/components/Search';
import { toggleChecked } from 'commons/share_app/containers/Mails/actions';
import {
  getCheckedCount,
  getMailsCount,
} from 'commons/share_app/containers/Mails/selectors';
import SidebarOpen from 'commons/Sidebar/SidebarOpen';
import { FC, memo, useCallback } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';
import { dispatch } from 'commons/utils/store';

import CheckedList from './CheckedList';

const Search: FC = () => {
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
    <>
      <NavbarContentLeftStyled role="group">
        <SidebarOpen />
      </NavbarContentLeftStyled>
      <NavbarContentRightStyled role="group">
        <MobileLoader mobile={<SearchComponent />} />
      </NavbarContentRightStyled>
    </>
  );
};

export default memo(Search);
