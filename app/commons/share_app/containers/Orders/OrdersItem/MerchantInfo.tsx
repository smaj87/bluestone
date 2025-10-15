import useTranslations from 'commons/hooks/useTranslations';
import { FC, memo } from 'commons/utils/react';

import { OrderLabelStyled } from './styles';

interface Props {
  merchant?: string;
}

const MerchantInfo: FC<Props> = ({ merchant }) => {
  const t = useTranslations();

  if (!merchant) {
    return null;
  }

  return (
    <span>
      <OrderLabelStyled>{t('orderThrought')}</OrderLabelStyled>
      <b>{merchant}</b>
    </span>
  );
};

export default memo(MerchantInfo);
