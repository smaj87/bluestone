import {
  getThemeMode,
  isDisplayAds,
  isPremium,
} from 'commons/hooks/useUserConfig/selectors';
import { getIsMobile as isMobile } from 'commons/hooks/useUserConfig/utils';
import { PAGE_NAME as MAIL_LIST_PAGE_NAME } from 'commons/share_app/containers/Mails/constants';
import { AppThunk } from 'commons/utils/react-redux';

import { INVOKE_ADS_FETCH } from '../constants';
import { getFolderUrlName, getPage } from '../selectors';
import { AdsRootState, FolderName } from '../types';
import { clearTemplateAd } from './SlotFlatNatmailing/actions';
import { changeView, COLOR_MODES, COLOR_MODES_KEYS, gemiusHit } from './utils';

let isInit = true;

/**
 * Instructs app to fetch ads.
 * NOTE: it should be called even if user is premium. Ad components have a check for that.
 */
export const invokeAdsFetch =
  (page: string, folderUrlName: FolderName): AppThunk =>
  async (dispatch, getState) => {
    if (page === MAIL_LIST_PAGE_NAME) {
      dispatch(clearTemplateAd());
    }

    const theme: COLOR_MODES_KEYS = getThemeMode(getState());

    changeView(
      page,
      isMobile(),
      isInit,
      folderUrlName,
      COLOR_MODES[theme] || COLOR_MODES.light,
      isPremium(getState()),
      isDisplayAds(getState()),
    );

    if (!isInit) {
      gemiusHit();
    }

    dispatch({
      type: INVOKE_ADS_FETCH,
      page,
      isInit,
      folderUrlName,
    });

    isInit = false;
  };

export const changeViewOnMobileChange = (): AppThunk => async (_, getState) => {
  const theme: COLOR_MODES_KEYS = getThemeMode(getState());

  changeView(
    getPage(getState() as AdsRootState),
    isMobile(),
    false,
    getFolderUrlName(getState() as AdsRootState),
    COLOR_MODES[theme] || COLOR_MODES.light,
    isPremium(getState()),
    isDisplayAds(getState()),
  );
};
