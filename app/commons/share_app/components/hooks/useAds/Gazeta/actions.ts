import { AppThunk } from 'commons/utils/react-redux';

import { INVOKE_ADS_FETCH } from '../constants';
import { FolderName } from '../types';
import { gemiusHit, init } from './utils';

let isInit = true;

/**
 * Instructs app to fetch ads.
 * NOTE: it should be called even if user is premium. Ad components have a check for that.
 */
export const invokeAdsFetch =
  (page: string, folderUrlName: FolderName): AppThunk =>
  async (dispatch) => {
    if (!isInit) {
      gemiusHit();
    } else {
      init();
    }

    dispatch({
      type: INVOKE_ADS_FETCH,
      page,
      isInit,
      folderUrlName,
    });

    isInit = false;
  };
