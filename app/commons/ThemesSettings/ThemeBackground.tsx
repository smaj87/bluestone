import useTranslations from 'commons/hooks/useTranslations';
import { setTheme } from 'commons/hooks/useUserConfig/actions';
import { getTheme } from 'commons/hooks/useUserConfig/selectors';
import backgrounds from 'commons/Themes/backgrounds';
import { THEME_BACKGROUNDS } from 'commons/Themes/constants';
import { Background } from 'commons/Themes/types';
import { memo, useCallback } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';
import { dispatch } from 'commons/utils/store';
import { getThemeBackgroundTranslation } from 'commons/utils/themes';

import { THEME_BG_ID } from './constants';
import {
  ThemeItemStyled,
  ThemeListStyled,
  ThemeSectionStyled,
  ThemeSectionTitleStyled,
} from './styles';
import ThemeButton from './ThemeButton';

const ThemeBackground = () => {
  const t = useTranslations();
  const { background, mode } = useSelector(getTheme);

  const changeThemeBackground = useCallback(
    (selectedBackground: Background) => () => {
      dispatch(setTheme({ background: selectedBackground }));
    },
    [],
  );

  return (
    <ThemeSectionStyled>
      <ThemeSectionTitleStyled id={THEME_BG_ID}>
        {t('selectThemeBackground')}
      </ThemeSectionTitleStyled>
      <ThemeListStyled aria-labelledby={THEME_BG_ID}>
        {THEME_BACKGROUNDS.map(({ label, value }) => (
          <ThemeItemStyled key={value} $size="md">
            <ThemeButton
              image={value ? backgrounds[value][mode] : undefined}
              isActive={value === background}
              label={getThemeBackgroundTranslation(label)}
              onClick={changeThemeBackground(value)}
            />
          </ThemeItemStyled>
        ))}
      </ThemeListStyled>
    </ThemeSectionStyled>
  );
};

export default memo(ThemeBackground);
