import { ThemeBackgroundOptions, ThemeColorOptions } from './types';

export const DEFAULT_THEME_MODE = 'light';
export const DEFAULT_THEME_BACKGROUND = '';

export const THEME_COLORS: ThemeColorOptions[] = [
  {
    value: 'yellow',
    label: 'colorYellow',
  },
  {
    value: 'blue',
    label: 'colorBlue',
  },
  {
    value: 'green',
    label: 'colorGreen',
  },
  {
    value: 'red',
    label: 'colorRed',
  },
  {
    value: 'magenta',
    label: 'colorMagenta',
  },
  {
    value: 'azure',
    label: 'colorAzure',
  },
];

export const THEME_BACKGROUNDS: ThemeBackgroundOptions[] = [
  {
    value: '',
    label: 'backgroundEmpty',
  },
  {
    value: 'beach',
    label: 'backgroundBeach',
  },
  {
    value: 'mountain',
    label: 'backgroundMountain',
  },
];
