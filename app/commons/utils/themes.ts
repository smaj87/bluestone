import { createGlobalStyle } from 'commons/Goober';
import primaryColors from 'commons/Themes/primaryColors';
import darkTheme from 'commons/Themes/skins/dark';
import lightTheme from 'commons/Themes/skins/light';
import {
  PrimaryColor,
  ThemeMode,
  ThemePrimaryColors,
} from 'commons/Themes/types';
import t from 'commons/translations/t';
import { TranslationKey } from 'commons/translations/types';

export const getThemeModeTranslation = (key?: TranslationKey) => {
  switch (key) {
    case 'themeDark':
      return t('themeDark');
    case 'themeLight':
      return t('themeLight');
    default:
      return '';
  }
};

export const getThemeColorTranslation = (key?: TranslationKey) => {
  switch (key) {
    case 'colorYellow':
      return t('colorYellow');
    case 'colorBlue':
      return t('colorBlue');
    case 'colorGreen':
      return t('colorGreen');
    case 'colorRed':
      return t('colorRed');
    case 'colorMagenta':
      return t('colorMagenta');
    case 'colorAzure':
      return t('colorAzure');
    default:
      return '';
  }
};

export const getThemeBackgroundTranslation = (key?: TranslationKey) => {
  switch (key) {
    case 'backgroundEmpty':
      return t('backgroundEmpty');
    case 'backgroundBeach':
      return t('backgroundBeach');
    case 'backgroundMountain':
      return t('backgroundMountain');
    default:
      return '';
  }
};

export const getThemeGlobalStyles = (
  mode: ThemeMode,
  currentPrimaryColor: PrimaryColor,
) => {
  let skin = '';
  const selectedMode = mode === 'dark' ? darkTheme : lightTheme;

  Object.entries(selectedMode).forEach(([key, color]) => {
    skin += `${key}:${color};`;
  });

  Object.entries(
    primaryColors[currentPrimaryColor] ||
      primaryColors[
        process.env.DEFAULT_THEME_COLOR as keyof ThemePrimaryColors
      ],
  ).forEach(([key, color]) => {
    skin += `${key}:${color};`;
  });

  return createGlobalStyle('themes')`:root {${skin}}`;
};
