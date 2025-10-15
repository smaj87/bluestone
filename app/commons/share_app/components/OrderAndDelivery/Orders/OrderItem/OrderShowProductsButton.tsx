import useTranslations from 'commons/hooks/useTranslations';
import { open } from 'commons/Modal/actions';
import { ORDER_MODAL_ID } from 'commons/share_app/components/Modals/constants';
import { ButtonTile } from 'commons/share_app/components/OrderAndDelivery/components/Tile/styles';
import TileAction from 'commons/share_app/components/OrderAndDelivery/components/TileAction';
import { FC, memo, useCallback } from 'commons/utils/react';
import { dispatch } from 'commons/utils/store';

import { Order } from '../../types';

interface Props {
  offers: Order['acceptedOffer'];
}

const OrderShowProductsButton: FC<Props> = ({ offers }) => {
  const t = useTranslations();

  const onClick = useCallback(() => {
    dispatch(open(ORDER_MODAL_ID, { offers }));
  }, [offers]);

  return (
    <TileAction icon="shoppingCart">
      <ButtonTile
        color="default"
        label={t('ctaShowAllProducts', {
          productsAmount: offers?.length,
        })}
        onClick={onClick}
        size="md"
      />
    </TileAction>
  );
};

export default memo(OrderShowProductsButton);
