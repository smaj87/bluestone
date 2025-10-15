import BottomActionButtons from 'commons/BottomActionButtons';
import MobileLoader from 'commons/MobileLoader';
import MailsListNavToolbar from 'commons/share_app/components/MailsListNavToolbar';
import {
  ShoppingPageContentStyled,
  ShoppingPageStyled,
} from 'commons/share_app/components/ShoppingPages/styles';
import { ORDERS_CONTAINER_ID } from 'commons/share_app/containers/Orders/constants';
import { FC, memo } from 'commons/utils/react';

import Banners from 'components/Banners';

import Hooks from './Hooks';
import OrdersHeader from './OrdersHeader';
import OrdersPage from './OrdersPage';
import PageTitle from './PageTitle';

const Orders: FC = () => (
  <ShoppingPageStyled id={ORDERS_CONTAINER_ID}>
    <ShoppingPageContentStyled>
      <PageTitle />
      <Banners placement="orders" />
      <OrdersHeader />
      <OrdersPage />
      <MobileLoader mobile={<MailsListNavToolbar />} />
      <BottomActionButtons isBottomNav />
      <Hooks />
    </ShoppingPageContentStyled>
  </ShoppingPageStyled>
);

export default memo(Orders);
