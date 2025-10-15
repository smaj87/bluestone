import useTranslations from 'commons/hooks/useTranslations';
import { FC, memo } from 'commons/utils/react';

import { CarrierInfoStyled } from '../OrdersListItem/styles';
import { OrderLabelStyled } from './styles';

interface Props {
  carrier?: string;
}

const CarrierInfo: FC<Props> = ({ carrier }) => {
  const t = useTranslations();

  if (!carrier) {
    return null;
  }

  return (
    <CarrierInfoStyled>
      <OrderLabelStyled>{t('orderDeliveryMethod')}</OrderLabelStyled>
      <br />
      {carrier}
    </CarrierInfoStyled>
  );
};

export default memo(CarrierInfo);
