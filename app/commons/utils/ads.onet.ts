import { getKid } from 'commons/hooks/useUserConfig/selectors';
import { RunTimeData } from 'commons/utils/ads';
import { AppThunk } from 'commons/utils/react-redux';
import { getState, setState } from 'commons/utils/webStorage';

const EVENTS_API_SEND_SESSION_KEY = 'EVENTS_API_SEND_SESSION_KEY';

export interface EventParamsInterface {
  event_category: string;
  event_action: string;
  event_details?: {
    p_test_id?: string;
    variant?: string;
    name?: string;
    email?: string;
    sender?: string;
    action?: string;
    element?: string;
    from?: string;
    view?: string;
    sf_consent?: boolean;
    mkt_consent?: boolean;
    smtp?: boolean;
    pop?: boolean;
    imap?: boolean;
    // rest
    [key: string]: string | number | boolean | undefined | object;
  };
  mid?: number;
}

export const runtimeData: RunTimeData = {};

export const dataLayerPush = (params = {}) => {
  if (window.dataLayer) {
    window.dataLayer.push(params);
  }
};

export const eventsApiSend = (params: EventParamsInterface) => {
  if (window.EventsApi) {
    window.EventsApi.send(
      {
        account: '_GENERIC_',
        event: 'MailboxEvent',
        version: 2,
        fields: ['il', 'iz', 'dr', 'du', 'dv', 'ip', 'iv'],
      },
      params,
    );
  }
};

export const eventsApiSendWithCapping = (
  key = '',
  capping = 0, // ms, 0 - everTime
  params: EventParamsInterface,
) => {
  const sessionKey = `${EVENTS_API_SEND_SESSION_KEY}.${key}`;

  if (!capping) {
    eventsApiSend(params);
  } else if (!getState(sessionKey)) {
    setState(sessionKey, {}, window.sessionStorage, capping);
    eventsApiSend(params);
  }
};

export interface CappingOptionsInterface {
  key: string;
  capping: number;
}

export const eventsApiSendAction =
  (
    params: EventParamsInterface,
    cappingOptions: CappingOptionsInterface | null = null,
  ): AppThunk =>
  async (_, getReduxState) => {
    const kid = getKid(getReduxState());

    const normalizedParams = { ...params, kid };

    if (cappingOptions) {
      eventsApiSendWithCapping(
        cappingOptions.key,
        cappingOptions.capping,
        normalizedParams,
      );
    } else {
      eventsApiSend(normalizedParams);
    }
  };

export const zeroGifSend = (src: string) => {
  const img = new Image(0, 0);
  img.src = src;
};
