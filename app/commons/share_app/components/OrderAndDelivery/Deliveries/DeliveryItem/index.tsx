import { FC, memo } from 'commons/utils/react';

import { Delivery as DeliveryType } from '../types';
import DeliveryAddress from './DeliveryAddress';
import DeliveryCarrier from './DeliveryCarrier';
import DeliveryDate from './DeliveryDate';
import DeliveryFrom from './DeliveryFrom';
import DeliveryStatus from './DeliveryStatus';
import { DeliveryItemDataStyled } from './styles';
import TrackPackageButton from './TrackPackageButton';

interface Props {
  delivery?: DeliveryType;
}

const DeliveryItem: FC<Props> = ({ delivery }) => {
  if (!delivery) {
    return null;
  }

  return (
    <>
      <DeliveryFrom merchantName={delivery.partOfOrder?.merchant?.name} />
      <DeliveryItemDataStyled>
        <DeliveryAddress deliveryAddress={delivery.deliveryAddress} />
      </DeliveryItemDataStyled>
      <div>
        <DeliveryStatus deliveryStatus={delivery.partOfOrder?.orderStatus} />
        <DeliveryCarrier
          carrierName={delivery.carrier?.name}
          deliveryNumber={delivery.trackingNumber}
        />
        <DeliveryDate
          expectedArrivalFrom={delivery.expectedArrivalFrom}
          expectedArrivalUntil={delivery.expectedArrivalUntil}
        />
      </div>
      {!!delivery.trackingUrl && (
        <TrackPackageButton trackingUrl={delivery.trackingUrl} />
      )}
    </>
  );
};

export default memo(DeliveryItem);
