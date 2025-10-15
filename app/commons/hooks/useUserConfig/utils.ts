import { DEFAULT_THEME_MODE } from 'commons/Themes/constants';
import { Theme, ThemePrimaryColors } from 'commons/Themes/types';
import { screenMd } from 'commons/utils/breakpoints';

import { DEFAULT_LIMIT } from './constants';

export const getIsMobile = (): boolean => window.innerWidth <= screenMd; // remMultiplier - usunięty, przy breakpointach przywrócone wartości w px, Safari nie interpretuje poprawnie rem w media query

export const getLimit = (isPremium: boolean, limit = 0) => {
  const l = Math.max(
    0,
    limit > 0 ? limit : window?.userConfig?.shownMailsCount || DEFAULT_LIMIT,
  );

  return isPremium ? l : Math.min(l, 30);
};

export const getDefaultTheme = (): Theme => ({
  mode: DEFAULT_THEME_MODE,
  color: process.env.DEFAULT_THEME_COLOR as keyof ThemePrimaryColors,
  background: '',
});
