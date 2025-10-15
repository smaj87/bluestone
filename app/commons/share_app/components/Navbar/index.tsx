import { isMobile as isMobileSelector } from 'commons/hooks/useUserConfig/selectors';
import { NavbarStyled } from 'commons/Navbar/styles';
import { PAGE_NAME as ATTACHMENTS_PAGE_NAME } from 'commons/share_app/containers//Attachments/constants';
import { PAGE_NAME as CASHBACKS_PAGE_NAME } from 'commons/share_app/containers/Cashbacks/constants';
import { PAGE_NAME as COUPONS_PAGE_NAME } from 'commons/share_app/containers/Coupons/constants';
import { PAGE_NAME as GAZETKA_MAIL_PAGE_NAME } from 'commons/share_app/containers/GazetkaMail/constants';
import { PAGE_NAME as INBOX_MAIL_PAGE_NAME } from 'commons/share_app/containers/InboxMail/constants';
import {
  PAGE_NAME as MAILS_PAGE_NAME,
  SUB_PAGE_NAME_HISTORY,
  SUB_PAGE_NAME_SEARCH,
} from 'commons/share_app/containers/Mails/constants';
import { PAGE_NAME as NEWSLETTERS_PAGE_NAME } from 'commons/share_app/containers/Newsletters/constants';
import { PAGE_NAME as ORDERS_PAGE_NAME } from 'commons/share_app/containers/Orders/constants';
import { PAGE_NAME as READ_MAIL_PAGE_NAME } from 'commons/share_app/containers/ReadMail/constants';
import { PAGE_NAME as SINGLE_ORDER_PAGE_NAME } from 'commons/share_app/containers/SingleOrder/constants';
import { FC, memo } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

import {
  getCurrentPage,
  getCurrentSubPage,
  isPrinting as isPrintingSelector,
} from 'containers/App/selectors';
import { PAGE_NAME as NEW_MAIL_PAGE_NAME } from 'containers/NewMail/constants';

import Attachments from './Attachments';
import Back from './Back';
import CouponsAndNewsletters from './CouponsAndNewsletters';
import Default from './Default';
import Empty from './Empty';
import History from './History';
import MailList from './MailList';
import NewMail from './NewMail';
import OrderBack from './OrderBack';
import ReadMail from './ReadMail';
import Search from './Search';

const getComponents = (
  isMobile: boolean,
  currentPage: string,
  currentSubPage: string,
) => {
  let Component = isMobile ? Empty : Default;

  if (isMobile) {
    switch (currentSubPage || currentPage) {
      case INBOX_MAIL_PAGE_NAME:
      case GAZETKA_MAIL_PAGE_NAME:
        Component = Back;
        break;
      case NEW_MAIL_PAGE_NAME:
        Component = NewMail;
        break;
      case SUB_PAGE_NAME_SEARCH:
        Component = Search;
        break;
      case SUB_PAGE_NAME_HISTORY:
        Component = History;
        break;
      case READ_MAIL_PAGE_NAME:
        Component = ReadMail;
        break;
      case MAILS_PAGE_NAME:
        Component = MailList;
        break;
      case ATTACHMENTS_PAGE_NAME:
        Component = Attachments;
        break;
      case NEWSLETTERS_PAGE_NAME:
      case COUPONS_PAGE_NAME:
      case CASHBACKS_PAGE_NAME:
      case ORDERS_PAGE_NAME:
        Component = CouponsAndNewsletters;
        break;
      case SINGLE_ORDER_PAGE_NAME:
        Component = OrderBack;
        break;
      default:
        Component = Default;
    }
  }

  return Component;
};

const Navbar: FC = () => {
  const Component = getComponents(
    useSelector(isMobileSelector),
    useSelector(getCurrentPage),
    useSelector(getCurrentSubPage),
  );
  const isPrinting = useSelector(isPrintingSelector);

  return (
    <NavbarStyled aria-hidden={isPrinting} data-screening-sticky-start>
      <Component />
    </NavbarStyled>
  );
};

export default memo(Navbar);
