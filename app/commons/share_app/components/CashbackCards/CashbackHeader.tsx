import useTranslations from 'commons/hooks/useTranslations';
import LabelNew from 'commons/LabelNew';
import { isHideIsNew as isHideIsNewSelector } from 'commons/share_app/containers/Cashbacks/selectors';
import { FC, memo } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

import {
  CouponTitleBoxStyled,
  CouponTitleContentStyled,
  CouponTitleSenderNewStyled,
  CouponTitleSenderStyled,
  CouponTitleStyled,
} from '../CouponsInDetail/styles';
import CouponAdLabel from '../PromoCards/CouponAdLabel';
import { HeaderWithLabelNewStyled } from '../ShoppingPages/styles';
import { CashbackDetail } from './types';

interface Props {
  headline: CashbackDetail['headline'];
  isAdServerCoupon: CashbackDetail['isAdServerCoupon'];
  isNew?: boolean;
}

const CashbackHeader: FC<Props> = ({ headline, isAdServerCoupon, isNew }) => {
  const t = useTranslations();

  const isHideIsNew = useSelector(isHideIsNewSelector);

  return (
    <CouponTitleBoxStyled>
      <CouponTitleContentStyled>
        {isNew && !isHideIsNew ? (
          <HeaderWithLabelNewStyled>
            <CouponTitleSenderNewStyled>{headline}</CouponTitleSenderNewStyled>
            <LabelNew />
          </HeaderWithLabelNewStyled>
        ) : (
          <CouponTitleSenderStyled>{headline}</CouponTitleSenderStyled>
        )}

        <CouponTitleStyled>{t('schemaCashbackPlaceholder')}</CouponTitleStyled>
      </CouponTitleContentStyled>

      {isAdServerCoupon && <CouponAdLabel />}
    </CouponTitleBoxStyled>
  );
};

CashbackHeader.displayName = 'CashbackHeader';

export default memo(CashbackHeader);
