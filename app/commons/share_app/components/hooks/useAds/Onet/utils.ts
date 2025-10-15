import { PAGE_NAME as PAGE_READ_MAIL } from 'commons/share_app/containers/ReadMail/constants';
import { EMPTY_FUNC } from 'commons/utils/constants';

import { PAGE_NAME as PAGE_NEW_MAIL } from 'containers/NewMail/constants';

import { KEYWORDS_MAPPING } from '../constants';
import { FolderName } from '../types';
import {
  ONET_ADS_DESKTOP_DETAIL_DV,
  ONET_ADS_DESKTOP_DETAIL_TARGET,
  ONET_ADS_DESKTOP_MAIL_LIST_DV,
  ONET_ADS_DESKTOP_MAIL_LIST_TARGET,
  ONET_ADS_MOBILE_DETAIL_DV,
  ONET_ADS_MOBILE_DETAIL_TARGET,
  ONET_ADS_MOBILE_MAIL_LIST_DV,
  ONET_ADS_MOBILE_MAIL_LIST_TARGET,
} from './constants';
import { TemplateAd } from './SlotFlatNatmailing/types';

export const COLOR_MODES = { light: 'light_mode', dark: 'dark_mode' } as const;
export type COLOR_MODES_KEYS = keyof typeof COLOR_MODES;
type COLOR_MODE = (typeof COLOR_MODES)[COLOR_MODES_KEYS];

const getSlot = (dlApi: any, id: string) =>
  dlApi.getSlotById(id) || dlApi.getSlotByName(id);

export const updateOnetAdsConfig = (
  page: string,
  isMobile: boolean,
  folderName: FolderName,
  colorMode: COLOR_MODE,
  isPremium = true,
  isDisplayAds = false,
) => {
  const keywords = [...window.kwrd, colorMode];

  switch (page) {
    // @ts-ignore
    case PAGE_NEW_MAIL:
      keywords.push('poczta_napisz');
    // no break here
    // eslint-disable-next-line no-fallthrough
    case PAGE_READ_MAIL:
      window.onetAdsConfig.DV = isMobile
        ? ONET_ADS_MOBILE_DETAIL_DV
        : ONET_ADS_DESKTOP_DETAIL_DV;
      window.onetAdsConfig.target = isMobile
        ? ONET_ADS_MOBILE_DETAIL_TARGET
        : ONET_ADS_DESKTOP_DETAIL_TARGET;
      break;
    default:
      window.onetAdsConfig.DV = isMobile
        ? ONET_ADS_MOBILE_MAIL_LIST_DV
        : ONET_ADS_DESKTOP_MAIL_LIST_DV;
      window.onetAdsConfig.target = isMobile
        ? ONET_ADS_MOBILE_MAIL_LIST_TARGET
        : ONET_ADS_DESKTOP_MAIL_LIST_TARGET;

      break;
  }

  if (isPremium) {
    if (isDisplayAds) {
      keywords.push('poczta_paid_ads');
    } else {
      keywords.push('poczta_paid_no_ads');
    }
  }

  if (folderName && KEYWORDS_MAPPING[folderName]) {
    keywords.push(KEYWORDS_MAPPING[folderName]);
  }

  window.onetAdsConfig.keywords = keywords;

  if (isMobile) {
    window.onetAdsConfig.mobile = 1;
  } else {
    window.onetAdsConfig.mobile = 0;
  }
};

export const addCustomCss = () => {
  window.onetAds?.cmd?.push?.((dlApi: any) => {
    dlApi.addCss(
      '#onet-ad-top.onet-ad{margin-bottom:0}#onet-ad-rectangle1.onet-ad{margin-bottom:}#onet-ad-flat-belkagorna{margin-bottom:0}',
    );
  });
};

export const changeView = (
  page: string,
  isMobile: boolean,
  isInit = false,
  folderUrlName: FolderName = '',
  colorMode: COLOR_MODE = COLOR_MODES.light,
  isPremium = true,
  isDisplayAds = false,
) => {
  updateOnetAdsConfig(
    page,
    isMobile,
    folderUrlName,
    colorMode,
    isPremium,
    isDisplayAds,
  );

  if (window.onetAds) {
    if (!isInit) {
      window.onetAds.cmd.push((dlApi: any) => {
        dlApi.changeView(window.onetAdsConfig);
      });
    } else {
      window.onetAds.target = window.onetAdsConfig.target;
      window.onetAds.DV = window.onetAdsConfig.DV;
      window.onetAds.mobile = window.onetAdsConfig.mobile;
      window.onetAds.lazy = window.onetAdsConfig.lazy;
      window.onetAds.keywords = window.onetAdsConfig.keywords;
    }
  }
};

export const addEvents = (
  id: any,
  onRender = EMPTY_FUNC,
  onEmpty = EMPTY_FUNC,
  onDestroy = EMPTY_FUNC,
) => {
  window.onetAds?.cmd?.push?.((dlApi: any) => {
    const slot = getSlot(dlApi, id);

    if (slot) {
      slot.on('render', onRender);
      slot.on('empty', onEmpty);
      slot.on('destroy', onDestroy);
    }
  });
};

// todo remove after v3, when views will be hiding not removing
const DEPRECTATED_timestamps: { [key: string]: number } = {};

export const fetchAd = (name: string, id: string, pos = 0) => {
  const timestamp = Date.now();
  const key = `${name}_${pos}`;

  if (
    !DEPRECTATED_timestamps[key] ||
    timestamp - DEPRECTATED_timestamps[key] > 250 // 250ms
  ) {
    DEPRECTATED_timestamps[name] = timestamp;

    window.onetAds?.cmd?.push?.((dlApi: any) => {
      getSlot(dlApi, id)?.destroy();
      dlApi.defineSlot(name, id).setCollapseEmpty(true);
      dlApi.fetch();
    });
  }
};

export const destroyAd = (id: string) => {
  window.onetAds?.cmd?.push?.((dlApi: any) => {
    getSlot(dlApi, id)?.destroy();
  });
};

export const registerTemplate = (
  tplCode: string,
  onRender: (ad: TemplateAd) => void,
) => {
  window.onetAds?.cmd?.push?.((dlApi: any) => {
    dlApi.registerTemplate({
      tplCode,
      renderAd: onRender,
    });
  });
};

export const gemiusHit = () => {
  window?.gemius_hit?.(window.pp_gemius_hit_identificator);
};
