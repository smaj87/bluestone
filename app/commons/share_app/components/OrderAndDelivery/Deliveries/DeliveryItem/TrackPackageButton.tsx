import Button from 'commons/Button';
import useTranslations from 'commons/hooks/useTranslations';
import { Delivery } from 'commons/share_app/components/OrderAndDelivery/Deliveries/types';
import { FC, memo, useCallback } from 'commons/utils/react';

import { DeliveryItemActionsStyled } from './styles';

interface Props {
  trackingUrl: Delivery['trackingUrl'];
}

const TrackPackageButton: FC<Props> = ({ trackingUrl }) => {
  const t = useTranslations();

  const onClick = useCallback(() => {
    window.open(trackingUrl, '_blank', 'noopener,noreferrer');
  }, [trackingUrl]);

  return (
    <DeliveryItemActionsStyled>
      <Button
        color="primary"
        label={t('ctaTrackPackage')}
        onClick={onClick}
        size="md"
      />
    </DeliveryItemActionsStyled>
  );
};

export default memo(TrackPackageButton);
