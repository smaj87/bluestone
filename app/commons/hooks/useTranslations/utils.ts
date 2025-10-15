import langs from 'commons/translations';
import { Lang } from 'commons/translations/types';

import { DEFAULT_LANGUAGE } from './constants';

export const getLang = (lang: Lang) => (langs[lang] ? lang : DEFAULT_LANGUAGE);
