import {
  InterfaceEffectInterface,
  UserInfoType,
} from 'commons/hooks/useInterfaceEffects/types';
import { FrontCommons, PremiumInfo } from 'commons/hooks/useUserConfig/types';
import { Theme } from 'commons/Themes/types';
import { Lang } from 'commons/translations/types';

import { GoogleTagPubadsReturnInterface } from './ads';

declare global {
  interface Window {
    Dropbox?: {
      choose: (options: {
        multiselect: boolean;
        success: (files: any[]) => void;
      }) => void;
    };
    BoxSelect?: {
      launchPopup: () => void;
      success: (callback: (files: any[]) => void) => void;
      unregister: (eventType: string) => void;
      SUCCESS_EVENT_TYPE: string;
      new (options: {
        clientId: string;
        linkType: 'shared' | 'direct'; // shared zalezy czy plik ma ustawione dostepy (dotyczy folderow oraz plikow), direct jest tylko do plikow i mozna je pobrac
        multiselect: boolean;
      }): Window['BoxSelect'];
    };
    firebase: {
      initializeApp: (config: {
        apiKey: string;
        authDomain: string;
        databaseURL: string;
        projectId: string;
        storageBucket: string;
        messagingSenderId: string;
        appId: string;
        measurementId: string;
      }) => void;
      messaging: () => {
        getToken: (config: { vapidKey: string }) => Promise<string>;
        deleteToken: () => Promise<void>;
      };
    };
    userConfig: {
      betaUser: boolean; // czy uzytkownik jest beta testerem mautica
      shopActive: boolean; // czy uzytkownik ma włączoną zakładkę zakupy
      kid: number;
      email: string;
      skin: string;
      theme: Theme;
      premium: false;
      displayAds: number;
      foreverPremium: false;
      shownMailsCount: number;
      citeOnReply: number;
      version: string;
      variantName: string;
      consents: number[];
      onboarding: object;
      lang: Lang;
      createdDate: string;
      partnersActive: boolean; // todo sprawdzic czy backend dodal na prod
      couponsActive: boolean; // todo sprawdzic czy backend dodal na prod
      frontCommons: FrontCommons | null;
      agreements: {
        [agreementId: string]: {
          value: boolean;
          date: string;
        };
      };
      premiumDate: string;
      premiumInfo: PremiumInfo;
    };
    interfaceEffects: InterfaceEffectInterface[];
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
    onetAdsConfig: any;
    onetAds?: {
      cmd: any;
      target: any;
      DV: any;
      mobile: any;
      lazy: any;
      keywords: string[];
      keyvalues: Record<string, number | string | (string | number)[]>;
      userInfo: UserInfoType | undefined;
      site: string;
      area: string;
    };
    AG?: {
      // agora (gazeta) rodo
      rodoAccepted: number;
    };
    gemius_hit: any;
    pp_gemius_hit_identificator: any;
    keyword: string;
    kwrd: string[];
    version: string;
    dataLayer: object[];
    EventsApi: {
      send: (staticParams: object, params: object) => void;
    };
    _protected_reference: unknown;
    googletag: {
      cmd: (() => void)[];
      display: (containerId: string) => void;
      destroySlots: (slots?: GoogleTagPubadsReturnInterface[]) => void;
      enableServices: () => void;
      defineSlot: (
        name: string,
        config: any[],
        containerId: string,
      ) => GoogleTagPubadsReturnInterface;
      pubads: () => GoogleTagPubadsReturnInterface;
    };
    browserInfo: {
      name: string;
      ver: string;
      os: string;
      osVer: string;
    };
    mt?: (event: string, action: string, params: object) => void;
  }

  interface Navigator {
    contacts?: ContactsManager;
  }

  interface ReadonlyArray<T> {
    includes<U>(x: U & (T & U extends never ? never : unknown)): boolean;
  }
  interface Array<T> {
    includes<U>(x: U & (T & U extends never ? never : unknown)): boolean;
  }
}

export {};
