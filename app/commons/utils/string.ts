export function normalizeSearchString(value: any) {
  let result = value.trim();

  if (value.normalize) {
    const combining = /[\u0300-\u036F]/g;

    result = result
      .normalize('NFKD')
      .replace(combining, '')
      .replace(/ł/gi, 'l'); // ręczna obsluga Ł, z combine nie dziala
  }

  return result.toLocaleLowerCase();
}

export const shadeSimple = [
  'sdv',
  '@#XsdZC3%$#^',
  '64532fsdx1',
  '!cxdsSD9863SDF',
  'gsdf342fdssdff',
];
