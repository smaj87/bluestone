import useTranslations from 'commons/hooks/useTranslations';
import { isOnline as isOnlineSelector } from 'commons/hooks/useUserConfig/selectors';
import { FC, memo } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

import { OfflineContentStyled, OfflineIcon, OfflineStyled } from './styles';

const Offline: FC = () => {
  const t = useTranslations();
  const isOnline = useSelector(isOnlineSelector);

  return !isOnline ? (
    <OfflineStyled>
      <OfflineIcon $image="wifiOff" />
      <OfflineContentStyled>{t('offlineMessage')}</OfflineContentStyled>
    </OfflineStyled>
  ) : null;
};

export default memo(Offline);
