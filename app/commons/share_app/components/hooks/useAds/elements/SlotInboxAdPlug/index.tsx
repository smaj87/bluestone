import useTranslations from 'commons/hooks/useTranslations';
import { AdSize } from 'commons/share_app/components/hooks/useAds/types';
import { FC, memo } from 'commons/utils/react';

import { SlotInboxAdPlugStyled } from './styles';

interface Props {
  size?: AdSize;
}

const SlotInboxAdPlug: FC<Props> = ({ size }) => {
  const t = useTranslations();

  return <SlotInboxAdPlugStyled $size={size}>{t('ad')}</SlotInboxAdPlugStyled>;
};

export default memo(SlotInboxAdPlug);
