const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// const onlyNumbersRegex = /^\d+$/;

const websiteRegex =
  /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/;

const phoneNumberRegex = /^[0-9+]{8,13}$/i;

export const validation: Record<
  string,
  (value: string, number?: number) => boolean
> = {
  // EMPTY_FIELD: (value) => () => value.length ? '' : t('fieldCannotBeEmpty'),
  // GENERIC_ERROR: () => () => t('genericError'),
  MAX_LENGTH: (value, max) => value.length <= max!,
  // ONLY_NUMBERS: (value) => () =>
  //   onlyNumbersRegex.test(value) || value === '' ? '' : t('numbersOnly'),
  EMAIL: (value) => emailRegex.test(value) || value === '',
  WEBSITE: (value) => websiteRegex.test(value) || value === '',
  PHONE: (value) => phoneNumberRegex.test(value) || value === '',
};
