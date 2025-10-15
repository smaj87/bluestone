import useTranslations from 'commons/hooks/useTranslations';
import { setTheme } from 'commons/hooks/useUserConfig/actions';
import { getThemeColor } from 'commons/hooks/useUserConfig/selectors';
import NavTreeItem from 'commons/NavTree/NavTreeItem';
import { THEME_COLORS } from 'commons/Themes/constants';
import primaryColors from 'commons/Themes/primaryColors';
import { PrimaryColor } from 'commons/Themes/types';
import { memo, useCallback } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';
import { dispatch } from 'commons/utils/store';
import { getThemeColorTranslation } from 'commons/utils/themes';

import { THEME_COLOR_ID } from './constants';
import {
  ThemeItemStyled,
  ThemeListStyled,
  ThemeSectionStyled,
  ThemeSectionTitleStyled,
} from './styles';
import ThemeButton from './ThemeButton';

const ThemeColor = () => {
  const t = useTranslations();
  const currentColor = useSelector(getThemeColor);

  const changeThemeColor = useCallback(
    (color: PrimaryColor) => () => {
      dispatch(setTheme({ color }));
    },
    [],
  );

  return (
    <ThemeSectionStyled>
      <ThemeSectionTitleStyled id={THEME_COLOR_ID}>
        {t('selectThemeColor')}
      </ThemeSectionTitleStyled>
      <ThemeListStyled aria-labelledby={THEME_COLOR_ID}>
        {THEME_COLORS.map(({ label, value }) => (
          <ThemeItemStyled key={value} $size="sm">
            <NavTreeItem
              isDisabled={value === currentColor}
              onEnter={changeThemeColor(value)}
              width="full"
            >
              <ThemeButton
                ariaLabel={getThemeColorTranslation(label)}
                color={primaryColors[value]['--cta-primary-bg']}
                isActive={value === currentColor}
                onClick={changeThemeColor(value)}
              />
            </NavTreeItem>
          </ThemeItemStyled>
        ))}
      </ThemeListStyled>
    </ThemeSectionStyled>
  );
};

export default memo(ThemeColor);
