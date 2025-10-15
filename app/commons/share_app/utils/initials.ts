import runes from 'runes';

export const getInitials = (text = '') =>
  runes.substr(
    text.trim().replace(/[^\u{1F000}-\u{1F9FF}\p{L}\p{N}]/gu, ''),
    0,
    1,
  );
