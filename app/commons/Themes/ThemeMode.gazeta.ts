import darkModeGazeta from './images/dark_agora.webp';
import lightModeGazeta from './images/light_agora.webp';
import { ThemeModeOptions } from './types';

export const THEME_MODES: ThemeModeOptions[] = [
  {
    value: 'light',
    label: 'themeLight',
    image: lightModeGazeta,
  },
  {
    value: 'dark',
    label: 'themeDark',
    image: darkModeGazeta,
  },
];
