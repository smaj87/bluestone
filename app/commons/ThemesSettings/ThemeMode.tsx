import useTranslations from 'commons/hooks/useTranslations';
import { setTheme } from 'commons/hooks/useUserConfig/actions';
import { getThemeMode } from 'commons/hooks/useUserConfig/selectors';
import NavTreeItem from 'commons/NavTree/NavTreeItem';
import { THEME_MODES } from 'commons/Themes/ThemeMode';
import { ThemeMode as AppMode } from 'commons/Themes/types';
import { memo, useCallback } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';
import { dispatch } from 'commons/utils/store';
import { getThemeModeTranslation } from 'commons/utils/themes';

import { THEME_MODE_ID } from './constants';
import {
  ThemeItemStyled,
  ThemeListStyled,
  ThemeSectionStyled,
  ThemeSectionTitleStyled,
} from './styles';
import ThemeButton from './ThemeButton';

const ThemeMode = () => {
  const t = useTranslations();
  const appMode = useSelector(getThemeMode);

  const changeThemeMode = useCallback(
    (selectedMode: AppMode) => () => {
      dispatch(setTheme({ mode: selectedMode }));
    },
    [],
  );

  return (
    <ThemeSectionStyled>
      <ThemeSectionTitleStyled id={THEME_MODE_ID}>
        {t('selectThemeMode')}
      </ThemeSectionTitleStyled>
      <ThemeListStyled aria-labelledby={THEME_MODE_ID}>
        {THEME_MODES.map(({ image, label, value }) => (
          <ThemeItemStyled key={value} $size="xl">
            <NavTreeItem
              isDisabled={value === appMode}
              onEnter={changeThemeMode(value)}
              width="full"
            >
              <ThemeButton
                image={value ? image : undefined}
                isActive={value === appMode}
                label={getThemeModeTranslation(label)}
                onClick={changeThemeMode(value)}
              />
            </NavTreeItem>
          </ThemeItemStyled>
        ))}
      </ThemeListStyled>
    </ThemeSectionStyled>
  );
};

export default memo(ThemeMode);
