import useTranslations from 'commons/hooks/useTranslations';
import { FC, memo } from 'commons/utils/react';

import { CollectInfoStyled } from '../OrderDelivery/styles';
import { OrderLabelStyled } from '../styles';
import TrackingButton from './TrackingButton';

interface Props {
  trackingNumber?: string;
  trackingUrl?: string | null;
}

const CarrierTracking: FC<Props> = ({ trackingNumber, trackingUrl }) => {
  const t = useTranslations();

  return (
    <CollectInfoStyled>
      <div>
        {trackingNumber && (
          <>
            <OrderLabelStyled>{t('orderDeliveryNumber')}</OrderLabelStyled>
            <br />
            {trackingNumber}
            <br />
            <br />
          </>
        )}
        {trackingUrl && <TrackingButton trackingUrl={trackingUrl} />}
      </div>
    </CollectInfoStyled>
  );
};

export default memo(CarrierTracking);
