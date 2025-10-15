import { TranslationKey } from 'commons/translations/types';

export type ThemeMode = 'light' | 'dark';

export interface Theme {
  mode: ThemeMode;
  color: PrimaryColor;
  background?: Background;
}

export interface ThemeModeOptions {
  label: TranslationKey;
  value: ThemeMode;
  image: string;
}

export interface ThemeColorOptions {
  label: TranslationKey;
  value: PrimaryColor;
}

export interface ThemeBackgroundOptions {
  label: TranslationKey;
  value: Background;
}

export interface ThemePrimaryColorValues {
  [key: string]: string;
}

export interface ThemePrimaryColors {
  yellow: ThemePrimaryColorValues;
  blue: ThemePrimaryColorValues;
  green: ThemePrimaryColorValues;
  red: ThemePrimaryColorValues;
  magenta: ThemePrimaryColorValues;
  azure: ThemePrimaryColorValues;
}

export type PrimaryColor = keyof ThemePrimaryColors;

export interface ThemeBackgroundValues {
  light: string;
  dark: string;
}

export interface ThemeBackgrounds {
  beach: ThemeBackgroundValues;
  mountain: ThemeBackgroundValues;
}

export type Background = keyof ThemeBackgrounds | '';
