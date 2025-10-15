// TODO camel case
export const normalizeSkinValue = (skin = '') =>
  skin.replace(/^skin_|\.css$/gi, '');
