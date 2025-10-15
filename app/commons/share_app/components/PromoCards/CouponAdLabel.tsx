import useTranslations from 'commons/hooks/useTranslations';
import { FC, memo } from 'commons/utils/react';

import { CouponAdLabelStyled } from './styles';

const CouponAdLabel: FC = () => {
  const t = useTranslations();

  return <CouponAdLabelStyled>{t('ad')}</CouponAdLabelStyled>;
};

CouponAdLabel.displayName = 'CouponAdLabel';

export default memo(CouponAdLabel);
