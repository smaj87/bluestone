import { RootState } from 'initRedux';

import { getAvatarUrl } from 'commons/share_app/utils/avatar';
import { createSelector } from 'commons/utils/reselect';

import { getNewsletterUrlProps } from 'containers/App/selectors';

import { KEY } from './constants';
import { initialState } from './reducer';
import { Newsletter, NewslettersRootState, NewslettersState } from './types';

export const getState = createSelector(
  (state: NewslettersRootState) => state?.[KEY] || initialState,
  (state): NewslettersState => state,
);

export const getNewsletters = createSelector(
  getState,
  (state) => state.newsletters,
);

export const getFilteredNewsletters = createSelector(
  getNewsletters,
  (newsletters) => newsletters.filter((n) => n.count > 0),
);

export const getLastShownId = createSelector(
  getState,
  (state) => state.lastShownId,
);

export const isFetching = createSelector(getState, (state) => state.isFetching);

export const isFetched = createSelector(getState, (state) => state.isFetched);

export const isFetchingError = createSelector(
  getState,
  (state) => state.isFetchingError,
);

export const isRemovingMails = createSelector(
  getState,
  (state) => state.isRemovingMails,
);

export const isUnsubscribingByMid = createSelector(
  [getState, (_: RootState, mid: number) => mid],
  (state, mid) => !!state.isUnsubscribing[mid],
);

export const getNewslettersLength = createSelector(
  getNewsletters,
  (newsletters) => newsletters.length,
);

export const getNewsletterByMid = createSelector(
  [getNewsletters, (_: RootState, { mid }: { mid: number }) => mid],
  (newsletters, mid): Newsletter | undefined =>
    newsletters.find((newsletter) => mid === newsletter.idMessage) || undefined,
);

export const getBimiByMid = createSelector(
  [getNewsletterByMid],
  (newsletter): string =>
    getAvatarUrl(newsletter?.from?.email || '', '', !!newsletter?.isBimi),
);

export const isDot = createSelector(
  [(state) => getNewsletterUrlProps(state, 'sort')],
  (sort) => sort !== 'from',
);
