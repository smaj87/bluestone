import Button from 'commons/Button';
import useTranslations from 'commons/hooks/useTranslations';
import { ORDERS_URL_NAME } from 'commons/share_app/containers/Orders/constants';
import { FC, memo, useCallback } from 'commons/utils/react';
import { historyPush } from 'commons/utils/route';

import { OrderItemActionsStyled } from './styles';

const GoToOrdersButton: FC = () => {
  const t = useTranslations();

  const goToOrders = useCallback(() => {
    historyPush(`/${ORDERS_URL_NAME}`);
  }, []);

  return (
    <OrderItemActionsStyled>
      <Button
        color="primary"
        label={t('orderDetails')}
        onClick={goToOrders}
        size="md"
      />
    </OrderItemActionsStyled>
  );
};

export default memo(GoToOrdersButton);
