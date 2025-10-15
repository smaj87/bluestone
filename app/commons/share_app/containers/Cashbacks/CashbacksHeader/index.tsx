import { ShoppingPageHeaderStyled } from 'commons/share_app/components/ShoppingPages/styles';
import t from 'commons/translations/t';
import { FC, memo } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

import { isCashbacksBannerOpen } from '../selectors';

const CashbacksHeader: FC = () => (
  <ShoppingPageHeaderStyled>
    <h1>{t('cashback')}</h1>
    {!useSelector(isCashbacksBannerOpen) ? (
      <p>{t('cashbackDescription')}</p>
    ) : (
      ''
    )}
  </ShoppingPageHeaderStyled>
);

export default memo(CashbacksHeader);
