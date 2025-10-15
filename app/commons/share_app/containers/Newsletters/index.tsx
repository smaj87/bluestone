import BottomActionButtons from 'commons/BottomActionButtons';
import MobileLoader from 'commons/MobileLoader';
import MailsListNavToolbar from 'commons/share_app/components/MailsListNavToolbar';
import {
  ShoppingPageContentStyled,
  ShoppingPageStyled,
} from 'commons/share_app/components/ShoppingPages/styles';
import NewslettersHeader from 'commons/share_app/containers/Newsletters/NewslettersHeader';
import { FC, memo } from 'commons/utils/react';

import Banners from 'components/Banners';

import { NEWSLETTERS_LIST_CONTAINER_ID } from './constants';
import Hooks from './Hooks';
import NewslettersContent from './NewslettersContent';
import PageTitle from './PageTitle';

const Newsletters: FC = () => (
  <ShoppingPageStyled id={NEWSLETTERS_LIST_CONTAINER_ID}>
    <ShoppingPageContentStyled>
      <PageTitle />
      <Banners placement="newsletters" />
      <Hooks />
      <NewslettersHeader />
      <NewslettersContent />
      <MobileLoader mobile={<MailsListNavToolbar />} />
      <BottomActionButtons isBottomNav />
    </ShoppingPageContentStyled>
  </ShoppingPageStyled>
);

export default memo(Newsletters);
