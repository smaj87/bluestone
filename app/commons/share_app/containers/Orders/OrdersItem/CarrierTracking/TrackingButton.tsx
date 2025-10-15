import Button from 'commons/Button';
import { CtaIcon } from 'commons/CallToAction/styles';
import useTranslations from 'commons/hooks/useTranslations';
import { decodeHtmlEntities } from 'commons/share_app/utils/decodeHtmlEntities';
import { dataLayerPush, eventsApiSendAction } from 'commons/utils/ads';
import { FC, memo, useCallback } from 'commons/utils/react';
import { dispatch } from 'commons/utils/store';

interface Props {
  trackingUrl: string;
}

const TrackingButton: FC<Props> = ({ trackingUrl }) => {
  const t = useTranslations();

  const goToTrackingUrl = useCallback(() => {
    dispatch(
      eventsApiSendAction({
        event_category: 'orders',
        event_action: 'tracking_order',
        event_details: {
          link: trackingUrl,
        },
      }),
    );

    dataLayerPush({
      event: 'order_tracking_order',
    });
    window.open(decodeHtmlEntities(trackingUrl), '_blank');
  }, [trackingUrl]);

  return (
    <Button
      color="default"
      label={t('orderDeliveryTrack')}
      onClick={goToTrackingUrl}
      size="md"
    >
      <CtaIcon $image="chevronRight" $size="sm" />
    </Button>
  );
};

export default memo(TrackingButton);
