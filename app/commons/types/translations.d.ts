import pl from 'translations/langs/pl';

declare module 'commons/translations/types' {
  import {
    TranslationKeyWithCommons,
    TranslationsWithCommons,
  } from 'commons/translations/types';

  /**
   * All translation keys are determined by `PL` translations.
   */
  export type TranslationKey = TranslationKeyWithCommons<keyof typeof pl>;

  /**
   * Translations object type is based on PL translations.
   * It only accepts keys that are defined in pl.ts.
   * This prevents typos in translation files.
   */
  export type Translations = TranslationsWithCommons<typeof pl>;
}
