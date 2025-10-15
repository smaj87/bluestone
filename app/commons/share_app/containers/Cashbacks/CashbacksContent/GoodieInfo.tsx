import useTranslations from 'commons/hooks/useTranslations';
import {
  GOODIE_OFFER_URL,
  GOODIE_REGULATIONS,
} from 'commons/share_app/containers/Cashbacks/constants';
import { dataLayerPush, eventsApiSendAction } from 'commons/utils/ads';
import { FC, memo, useCallback } from 'commons/utils/react';
import { dispatch } from 'commons/utils/store';

import { GoodieButton, GoodieIconStyled, GoodieInfoStyled } from './styles';

const GoodieInfo: FC = () => {
  const t = useTranslations();

  const goToGoodie = useCallback(() => {
    dispatch(
      eventsApiSendAction({
        event_category: 'cashbacks',
        event_action: 'action',
        event_details: { action: 'clicked', element: 'activate' },
      }),
    );

    dataLayerPush({
      event: 'ga4_cashbacks_action',
      mp_params: [
        {
          action: 'clicked',
          element: 'activate',
        },
      ],
    });

    window.open(GOODIE_OFFER_URL, '_blank');
  }, []);

  return (
    <GoodieInfoStyled>
      <h3>
        <GoodieIconStyled $image="gift" />
        {t('cashbackGoodieInfoTitle')}
      </h3>
      <p>
        {t('cashbackGoodieInfoContent')}
        <a href={GOODIE_REGULATIONS}>{t('cashbackGoodieInfoLink')}</a>
      </p>
      <br />
      <GoodieButton
        color="primary"
        label={t('cashbacksGoTo')}
        onClick={goToGoodie}
      />
    </GoodieInfoStyled>
  );
};

export default memo(GoodieInfo);
