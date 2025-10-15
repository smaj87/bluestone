import BottomActionButtons from 'commons/BottomActionButtons';
import MobileLoader from 'commons/MobileLoader';
import MailsListNavToolbar from 'commons/share_app/components/MailsListNavToolbar';
import {
  ShoppingPageContentStyled,
  ShoppingPageStyled,
} from 'commons/share_app/components/ShoppingPages/styles';
import CouponHeader from 'commons/share_app/containers/Coupons/CouponHeader';
import { FC, memo } from 'commons/utils/react';

import Banners from 'components/Banners';

import { COUPONS_LIST_CONTAINER_ID } from './constants';
import CouponError from './CouponError';
import CouponsEmptyPage from './CouponsEmptyPage';
import CouponsLoader from './CouponsLoader';
import CouponsNotEnabledPage from './CouponsNotEnabledPage';
import CouponsPage from './CouponsPage';
import Hooks from './Hooks';
import PageTitle from './PageTitle';

const Coupons: FC = () => (
  <ShoppingPageStyled id={COUPONS_LIST_CONTAINER_ID}>
    <ShoppingPageContentStyled>
      <PageTitle />
      <Banners placement="coupons" />
      <Hooks />
      <CouponHeader />
      <CouponsLoader />
      <CouponError />
      <CouponsPage />
      <CouponsNotEnabledPage />
      <CouponsEmptyPage />
      <MobileLoader mobile={<MailsListNavToolbar />} />
      <BottomActionButtons isBottomNav />
    </ShoppingPageContentStyled>
  </ShoppingPageStyled>
);

export default memo(Coupons);
