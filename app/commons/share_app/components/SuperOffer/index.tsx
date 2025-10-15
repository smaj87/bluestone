import useTranslations from 'commons/hooks/useTranslations';
import superOfferIcon from 'commons/share_app/components/SuperOffer/image/fire.png';
import { FC, memo } from 'commons/utils/react';

import { CashbackDetail } from '../CashbackCards/types';
import {
  SuperOfferContentStyled,
  SuperOfferLabelStyled,
  SuperOfferStyled,
} from './styles';

interface Props {
  price: CashbackDetail['price'];
}

const SuperOffer: FC<Props> = ({ price }) => {
  const t = useTranslations();

  const textInteger = t('cashbackTextHeadline', { price });
  const textString = t('cashbackTextHeadline2', { price });

  const label = /[^,.\d]/.test(price) ? textString : textInteger;

  return (
    <SuperOfferStyled>
      <SuperOfferContentStyled>
        <img alt="" src={superOfferIcon} />
        <SuperOfferLabelStyled>{label}</SuperOfferLabelStyled>
      </SuperOfferContentStyled>
    </SuperOfferStyled>
  );
};

export default memo(SuperOffer);
