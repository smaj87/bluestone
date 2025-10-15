import darkMode from './images/dark.webp';
import lightMode from './images/light.webp';
import { ThemeModeOptions } from './types';

export const THEME_MODES: ThemeModeOptions[] = [
  {
    value: 'light',
    label: 'themeLight',
    image: lightMode,
  },
  {
    value: 'dark',
    label: 'themeDark',
    image: darkMode,
  },
];
