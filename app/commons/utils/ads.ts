import { AppThunk } from 'commons/utils/react-redux';

import { CappingOptionsInterface, EventParamsInterface } from './ads.onet';

export interface RunTimeData {
  cashbacksViewVisitedFrom?: string;
  couponsViewVisitedFrom?: string;
  newslettersViewVisitedFrom?: string;
  ordersViewVisitedFrom?: string;
}

export const runtimeData: RunTimeData = {};

export const dataLayerPush = (_: object) => null;

export const eventsApiSend = (_: EventParamsInterface) => null;

export const eventsApiSendWithCapping = (
  _key = '',
  _capping = 0,
  _params: EventParamsInterface,
) => null;

export const eventsApiSendAction =
  (
    _params: EventParamsInterface,
    _cappingOptions?: CappingOptionsInterface,
  ): AppThunk =>
  async () =>
    undefined;

export const zeroGifSend = (_: string) => null;
