import Button from 'commons/Button';
import { CtaIcon } from 'commons/CallToAction/styles';
import useTranslations from 'commons/hooks/useTranslations';
import { SINGLE_ORDER_URL_NAME } from 'commons/share_app/containers/SingleOrder/constants';
import { dataLayerPush, eventsApiSendAction } from 'commons/utils/ads';
import { FC, memo, useCallback } from 'commons/utils/react';
import { historyPush } from 'commons/utils/route';
import { dispatch } from 'commons/utils/store';

import { Order } from '../types';

interface Props {
  id: Order['id'];
  isParcelDelivery: boolean;
}

const GoToDetailButton: FC<Props> = ({ id, isParcelDelivery }) => {
  const t = useTranslations();

  const goToSingleOrder = useCallback(() => {
    dispatch(
      eventsApiSendAction({
        event_category: 'orders',
        event_action: 'go_to_detail',
        event_details: {
          id: `${id}`,
        },
      }),
    );

    dataLayerPush({
      event: 'order_go_to_detail',
    });

    historyPush(`/${SINGLE_ORDER_URL_NAME}/_id/${id}`);
  }, [id]);

  return (
    <Button
      color="default"
      label={isParcelDelivery ? t('parcelDeliveryDetails') : t('orderDetails')}
      onClick={goToSingleOrder}
      size="md"
    >
      <CtaIcon $image="chevronRight" $size="md" />
    </Button>
  );
};

export default memo(GoToDetailButton);
