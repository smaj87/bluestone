export const KEY = 'editors';

export const ADD_EDITOR = `${KEY}/ADD_EDITOR` as const;
export const REMOVE_EDITOR = `${KEY}/REMOVE_EDITOR` as const;
export const SET_FONT_INFO = `${KEY}/SET_FONT_INFO` as const;
export const SET_IS_DIRTY_EDITOR = `${KEY}/SET_IS_DIRTY_EDITOR` as const;

export const REGEX_FONT_FAMILY = /(?:^|,\s*)("[^"]*"|[^",]+)/;

export const FONTS = {
  noSerif: 'Arial',
  serif: 'Times New Roman',
  wide: 'Arial Black',
  narrow: 'Arial Narrow',
  equalSpace: 'monospace', // squire zwraca monospace z getFontInfo z malej litery a reszta fontow z duzych
  tahoma: 'Tahoma',
  verdana: 'Verdana',
} as const;

export const TEXT_COLORS = {
  black: 'black',
  grey: 'grey',
  lightgrey: 'lightgrey',
  white: 'white',
  darkred: 'darkred',
  red: 'red',
  pink: 'pink',
  purple: 'purple',
  darkblue: 'darkblue',
  blue: 'blue',
  lightblue: 'lightblue',
  darkgreen: 'darkgreen',
  green: 'green',
  lightgreen: 'lightgreen',
  orange: 'orange',
  yellow: 'yellow',
} as const;

export const FONT_SIZES = {
  sm: '12px',
  md: '16px',
  lg: '24px',
  xlg: '32px',
} as const;

// Standardy jakości w megapikselach MP
// export const IMAGE_QUALITY_STANDARDS = {
//   '360p': 0.23,
//   '480p': 0.41,
//   '720p': 0.92,
//   '1080p': 2.07,
//   '2K': 3.69,
//   '4K': 8.29,
//   '8K': 33.18,
// };
