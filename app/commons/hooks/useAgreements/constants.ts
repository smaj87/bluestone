export const KEY = 'agreements';

export const FETCH_AGREEMENTS = `${KEY}/FETCH_AGREEMENTS` as const;
export const FETCH_AGREEMENTS_SUCCESS = `${FETCH_AGREEMENTS}_SUCCESS` as const;
export const FETCH_AGREEMENTS_FAILURE = `${FETCH_AGREEMENTS}_FAILURE` as const;

export const SAVE_AGREEMENTS = `${KEY}/SAVE_AGREEMENTS` as const;
export const SAVE_AGREEMENTS_SUCCESS = `${SAVE_AGREEMENTS}_SUCCESS` as const;
export const SAVE_AGREEMENTS_FAILURE = `${SAVE_AGREEMENTS}_FAILURE` as const;

export const SET_IS_FETCHING = `${KEY}/SET_IS_FETCHING` as const;

export const SMART_FUNCTIONS_ID = 111; // smart funkcje: oferty, powiadomienia, eplatnosci, kupony itp
export const SMART_ADS_ID = 113; // DEPRECATED!, specjale pozwolenie na kupony z adservera, bez tego nie wyswietlamy kuponow z ads
export const DATA_PROCESSING_ID = 1; // zgoda na przetwrzanie danych
export const MARKETING_ID = 3; // zgoda marketingowa - informacja handlowa
export const GOODIE_1_ID = 116; // zgoda goodie 1
export const GOODIE_2_ID = 117; // zgoda goodie 1
