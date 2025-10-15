import useTranslations from 'commons/hooks/useTranslations';
import { OrdersRouterIsShowContext } from 'commons/share_app/components/RouterHelpers/constants';
import { ShoppingPageHeaderStyled } from 'commons/share_app/components/ShoppingPages/styles';
import { FC, memo, useContext } from 'commons/utils/react';

import InfoHeader from './InfoHeader';

const OrdersHeader: FC = () => {
  const isShow = useContext(OrdersRouterIsShowContext);
  const t = useTranslations();

  if (!isShow) {
    return null;
  }

  return (
    <ShoppingPageHeaderStyled>
      <h1>{t('ordersHeaderTitle')}</h1>
      <InfoHeader />
    </ShoppingPageHeaderStyled>
  );
};

export default memo(OrdersHeader);
