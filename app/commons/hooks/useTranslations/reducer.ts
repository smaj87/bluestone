import { SET_LANG } from 'commons/hooks/useTranslations/constants';
import {
  LanguageAction,
  LanguageState,
} from 'commons/hooks/useTranslations/types';

import { getLang } from './utils';

export const initialState: LanguageState = {
  lang: getLang(window?.userConfig?.lang),
};

// first lang set
document.documentElement.setAttribute('lang', initialState.lang);

export default (
  state = initialState,
  action: LanguageAction,
): LanguageState => {
  switch (action.type) {
    case SET_LANG: {
      const lang = getLang(action.lang);
      document.documentElement.setAttribute('lang', lang);

      return state.lang !== lang ? { ...state, lang } : state;
    }

    default:
  }

  return state;
};
