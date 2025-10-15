import { KEY, SET_LANG } from 'commons/hooks/useTranslations/constants';
import { Lang } from 'commons/translations/types';

export interface LanguageState {
  lang: Lang;
}

export interface LanguageRootState {
  [KEY]: LanguageState;
}

export type LanguageAction = {
  type: typeof SET_LANG;
  lang: LanguageState['lang'];
};
