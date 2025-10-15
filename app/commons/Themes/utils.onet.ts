import { Theme } from './types';

const skinMap = {
  light: 'skin_yellow.css',
  dark: 'skin_dark.css',
};
// eslint-disable-next-line
export const DEPRECATED_getSkinFromTheme = (theme: Theme) =>
  skinMap?.[theme.mode] || skinMap.light;
