import {
  GOODIE_1_ID,
  GOODIE_2_ID,
} from 'commons/hooks/useAgreements/constants';
import { isAgreement as isAgreementSelector } from 'commons/hooks/useAgreements/selectors';
import useTranslations from 'commons/hooks/useTranslations';
import { HowItWorksVisibleButtonStyled } from 'commons/share_app/components/ShoppingPages/HowItWorks/styles';
import {
  getCashbacks,
  getDefaultCashbacks,
} from 'commons/share_app/containers/Cashbacks/selectors';
import {
  dataLayerPush,
  eventsApiSendAction,
  runtimeData,
} from 'commons/utils/ads';
import { FC, memo, useCallback, useEffect } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';
import { dispatch } from 'commons/utils/store';

import CashbacksHowItWorks from '../CashbacksHowItWorks';
import { GOODIE_TW_URL } from '../constants';
import GoodieInfo from './GoodieInfo';

const agreementProps1 = { agreementId: GOODIE_1_ID };
const agreementProps2 = { agreementId: GOODIE_2_ID };

const HowWrapper: FC = () => {
  const t = useTranslations();
  const cashbacks = useSelector(getCashbacks);
  const defaultCashbacks = useSelector(getDefaultCashbacks);
  const isGoodieAgreement1 = useSelector(isAgreementSelector, agreementProps1);
  const isGoodieAgreement2 = useSelector(isAgreementSelector, agreementProps2);
  const isGoodieAgreement = isGoodieAgreement1 && isGoodieAgreement2;

  useEffect(() => {
    delete runtimeData?.cashbacksViewVisitedFrom;
  }, []);

  const goToGoodie = useCallback(() => {
    window.open(GOODIE_TW_URL, '_blank');

    dispatch(
      eventsApiSendAction({
        event_category: 'quick_events',
        event_action: 'quick_events',
        event_details: {
          event_name: 'cashbacks_goddie_clicked_open_tandw',
        },
      }),
    );

    dataLayerPush({
      event: 'GA4_cashbacks_goddie_clicked_open_tandw',
    });
  }, [GOODIE_TW_URL]);

  return (
    <>
      <CashbacksHowItWorks
        isCouponsLength={!!cashbacks.length}
        isDefaultCoupons={!!defaultCashbacks.length}
        isGoodieAgreement={isGoodieAgreement}
      />
      {isGoodieAgreement ? (
        <HowItWorksVisibleButtonStyled
          color="primary"
          label={t('cashbackTandW')}
          onClick={goToGoodie}
          size="md"
        />
      ) : (
        <GoodieInfo />
      )}
    </>
  );
};

export default memo(HowWrapper);
