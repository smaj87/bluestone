import useTranslations from 'commons/hooks/useTranslations';
import { FC, memo } from 'commons/utils/react';

import { ThemeHeaderStyled, ThemeSettingsStyled } from './styles';
import ThemeColor from './ThemeColor';
import ThemeMode from './ThemeMode';

export interface ThemeSettingsProps {
  isIntegration?: boolean;
}

const ThemeSettings: FC<ThemeSettingsProps> = ({ isIntegration }) => {
  const t = useTranslations();

  return (
    <ThemeSettingsStyled>
      <ThemeHeaderStyled>
        <h3>{t('setTheme')}</h3>
      </ThemeHeaderStyled>
      <ThemeMode />
      {!isIntegration ? <ThemeColor /> : null}
    </ThemeSettingsStyled>
  );
};

export default memo(ThemeSettings);
