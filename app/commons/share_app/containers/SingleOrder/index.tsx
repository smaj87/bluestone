import {
  ShoppingPageContentStyled,
  ShoppingPageStyled,
} from 'commons/share_app/components/ShoppingPages/styles';
import { FC, memo } from 'commons/utils/react';

import { SINGLE_ORDER_CONTAINER_ID } from './constants';
import Hooks from './Hooks';
import PageTitle from './PageTitle';
import SingleOrderContent from './SingleOrderContent';

const SingleOrder: FC = () => (
  <ShoppingPageStyled id={SINGLE_ORDER_CONTAINER_ID}>
    <ShoppingPageContentStyled>
      <PageTitle />
      <Hooks />
      <SingleOrderContent />
    </ShoppingPageContentStyled>
  </ShoppingPageStyled>
);

export default memo(SingleOrder);
