import { RootState } from 'initRedux';

import { INVOKE_ADS_FETCH, KEY, KEYWORDS_MAPPING } from './constants';

export interface AdsRootState extends RootState {
  [KEY]: AdsState;
}

export interface AdsState {
  reFetchFlag: [];
  page: string;
  folderUrlName: FolderName;
}

export type AdsAction = {
  type: typeof INVOKE_ADS_FETCH;
  page: string;
  isInit: boolean;
  folderUrlName: FolderName;
};

export type FolderName = keyof typeof KEYWORDS_MAPPING | '';

export type AdSize = 'sm' | 'md' | 'lg';
