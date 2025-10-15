import BottomActionButtons from 'commons/BottomActionButtons';
import MobileLoader from 'commons/MobileLoader';
import MailsListNavToolbar from 'commons/share_app/components/MailsListNavToolbar';
import {
  ShoppingPageContentStyled,
  ShoppingPageStyled,
} from 'commons/share_app/components/ShoppingPages/styles';
import CashbacksHeader from 'commons/share_app/containers/Cashbacks/CashbacksHeader';
import { FC, memo } from 'commons/utils/react';

import Banners from 'components/Banners';

import CashbacksPage from './CashbacksPage';
import { CASHBACKS_LIST_CONTAINER_ID } from './constants';
import Hooks from './Hooks';
import PageTitle from './PageTitle';

const Cashbacks: FC = () => (
  <ShoppingPageStyled id={CASHBACKS_LIST_CONTAINER_ID}>
    <ShoppingPageContentStyled>
      <PageTitle />
      <Banners placement="cashback" />
      <Hooks />
      <CashbacksHeader />
      <CashbacksPage />
      <MobileLoader mobile={<MailsListNavToolbar />} />
      <BottomActionButtons isBottomNav />
    </ShoppingPageContentStyled>
  </ShoppingPageStyled>
);

export default memo(Cashbacks);
