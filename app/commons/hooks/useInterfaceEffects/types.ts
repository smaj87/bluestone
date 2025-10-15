import { ContextMenuSize } from 'commons/ContextMenu/types';
import { PopperinoPlacement } from 'commons/Dropdown/popperino';
import { IconImage } from 'commons/Icon/iconImage';
import { InfobarType } from 'commons/Infobar/types';
import { Lang } from 'commons/translations/types';

import {
  FETCH_INTERFACE_EFFECTS,
  FETCH_INTERFACE_EFFECTS_FAILURE,
  FETCH_INTERFACE_EFFECTS_SUCCESS,
  KEY,
  REMOVE_INTERFACE_EFFECT,
  SET_INTERFACE_EFFECTS,
} from './constants';

export interface InterfaceEffectsState {
  isFetching: boolean;
  isFetched: boolean;
  interfaceEffects: NormalizedInterfaceEffects;
}

export interface InterfaceEffectsRootState {
  [KEY]: InterfaceEffectsState;
}

export type UserInfoType = Record<string, string | string[]>;

export interface InterfaceEffectSelectorParams {
  type: string;
  subtype: string;
}

export type InterfaceEffectsButtonMethod =
  | 'clearMails'
  | 'redirect'
  | 'mauticForm';

export interface InterfaceEffectsButtons {
  clearMails: {
    fromList?: string[];
    folders?: string[];
    excluded?: boolean;
  };
  redirect?: {
    redirectUrl?: string;
  };
  mauticForm?: {
    id?: number;
    alias?: string;
  };
}

export interface InterfaceEffectsCloud {
  targetId: string;
  menuSize: ContextMenuSize;
  placement: PopperinoPlacement;
  onBoarding?: boolean; // paramet wyswetlajacy zolta kropecza dla mobile
}

interface InterfaceTemplate {
  id?: string;
  content: { [key in Lang]: string };
}

export interface InterfaceEffectInterface {
  id?: string;
  type: string;
  params: {
    adserver_meta?: {
      async_render: boolean;
      async_viewability: boolean;
      enable_conversion_tracking: boolean;
      mailing_meta: null;
      server: string;
      set_slot_size: boolean;
      viewability?: number;
      viewability_cfg?: {
        percent: number;
        time: number;
      };
    };
    meta?: {
      actioncount: string;
      adclick: string;
      ems_link: string;
      viewability: string;
    };
    subtype: string;
    // parametr zawierający content komponentów
    template?: InterfaceTemplate;
    // test id - analityka
    pTestId?: string;
    // parametr do modala MailProtocolsModal lub wariant analityki
    variant?: string;
    // parametr do wyświetlania customowych buttonów wywołujących akcje react'owe
    customButtons?: InterfaceEffectsButtons;
    // parametr do wyświetlania dymków
    cloudData?: InterfaceEffectsCloud;
    // parametr do reguł czyszczących - lista fromów
    fromList?: string[];
    // parametr do reguł czyszczących - folder name, gdzie wyświetlić infobar
    folderName?: string;
    fid?: number;
    // -- do ustalenia z backend
    days?: number;
    // parametr do modala ze zgodami
    currentPage?: string;
    // parametr do modala ze zgodami
    closeButton?: boolean;
    // parametry infobara
    infobarType?: InfobarType;
    icon?: IconImage;
    title?: string;
    placement?:
      | 'mails'
      | 'attachments'
      | 'orders'
      | 'coupons'
      | 'cashback'
      | 'newsletters';
  };
}

export interface NormalizedInterfaceEffects {
  [key: string]: InterfaceEffectInterface;
}

export type InterfaceEffectsAction =
  | { type: typeof FETCH_INTERFACE_EFFECTS }
  | {
      type: typeof FETCH_INTERFACE_EFFECTS_SUCCESS;
      interfaceEffects: NormalizedInterfaceEffects;
    }
  | { type: typeof FETCH_INTERFACE_EFFECTS_FAILURE }
  | {
      type: typeof REMOVE_INTERFACE_EFFECT;
      id: string;
      interfaceEffectType: string;
    }
  | {
      type: typeof SET_INTERFACE_EFFECTS;
      interfaceEffects: NormalizedInterfaceEffects;
    };

export interface InterfaceDlApi {
  watchVisibility: (ref: {
    el: HTMLElement;
    slot: {
      ads: { meta: InterfaceEffectInterface['params']['adserver_meta'] }[];
    };
  }) => {
    on(event: string, callback: () => Promise<void>): void;
  };
}
