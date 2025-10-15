import useTranslations from 'commons/hooks/useTranslations';
import { FC, memo } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

import { isShowMobileAds as isShowMobileAdsSelector } from '../selectors';
import { AdPlugMobile, SlotTopMobileStyled } from './styles';

const AdPlugOnly: FC = () => {
  const t = useTranslations();
  const isShowAd = useSelector(isShowMobileAdsSelector);

  return isShowAd ? (
    <SlotTopMobileStyled>
      <AdPlugMobile>{t('ad')}</AdPlugMobile>
    </SlotTopMobileStyled>
  ) : null;
};

export default memo(AdPlugOnly);
