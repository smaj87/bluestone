import { SMART_FUNCTIONS_ID } from 'commons/hooks/useAgreements/constants';
import { getAgreements } from 'commons/hooks/useAgreements/selectors';
import useTranslations from 'commons/hooks/useTranslations';
import CashbackItem from 'commons/share_app/components/CashbackCards/CashbackItem';
import { DEFAULT_COUPONS_ID } from 'commons/share_app/components/ShoppingPages/ShoppingBanner/constants';
import {
  dataLayerPush,
  eventsApiSendAction,
  runtimeData,
} from 'commons/utils/ads';
import { FC, memo, useEffect } from 'commons/utils/react';
import { getStateValueBySelector } from 'commons/utils/react-redux';
import { dispatch } from 'commons/utils/store';

import { TitleBarStyled } from '../CashbacksHeader/styles';
import { Cashback } from '../types';
import { CashbackListItemStyled, CashbackListStyled } from './styles';

interface Props {
  cashbacks: Cashback[];
  isDefault?: boolean;
}

const CashbackList: FC<Props> = ({ cashbacks, isDefault }) => {
  const t = useTranslations();
  useEffect(() => {
    const agreements = getStateValueBySelector(getAgreements);

    dispatch(
      eventsApiSendAction({
        event_category: 'cashbacks',
        event_action: 'view_visited',
        event_details: {
          view: 'list',
          from: runtimeData?.cashbacksViewVisitedFrom || 'direct',
          sf_consent: !!agreements?.[SMART_FUNCTIONS_ID],
        },
      }),
    );

    dataLayerPush({
      event: 'ga4_cashbacks_view_visited',
      mp_params: [
        {
          view: 'list',
          from: runtimeData?.cashbacksViewVisitedFrom || 'direct',
          sf_consent: !!agreements?.[SMART_FUNCTIONS_ID],
        },
      ],
    });

    delete runtimeData?.cashbacksViewVisitedFrom;
  }, []);

  return (
    <>
      {cashbacks.length ? (
        <TitleBarStyled id={isDefault ? DEFAULT_COUPONS_ID : ''}>
          <h3>
            {isDefault ? t('cashbackDefaultTitle') : t('cashbackOrganicTitle')}
          </h3>
        </TitleBarStyled>
      ) : (
        ''
      )}
      <CashbackListStyled>
        {cashbacks.map((c) => (
          <CashbackListItemStyled key={c.id}>
            <CashbackItem $isShow cashback={c} sender={c.from} />
          </CashbackListItemStyled>
        ))}
      </CashbackListStyled>
    </>
  );
};

export default memo(CashbackList);
