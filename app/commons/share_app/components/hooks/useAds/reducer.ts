import { INVOKE_ADS_FETCH } from './constants';
import { AdsAction, AdsState } from './types';

export const initialState: AdsState = {
  reFetchFlag: [],
  page: '',
  folderUrlName: '',
};

export default (state = initialState, action: AdsAction): AdsState => {
  switch (action.type) {
    case INVOKE_ADS_FETCH:
      return {
        ...state,
        page: action.page,
        folderUrlName: action.folderUrlName,
        // If ads are initialized, refresh reFetchFlag every time to update ads
        reFetchFlag: !action.isInit ? [] : state.reFetchFlag,
      };
    default:
  }

  return state;
};
