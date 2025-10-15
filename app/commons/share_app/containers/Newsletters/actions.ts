import { reportCatchErrorFromAction } from 'commons/ErrorBoundary/utils';
import { SMART_FUNCTIONS_ID } from 'commons/hooks/useAgreements/constants';
import {
  isAgreement as isAgreementSelector,
  isFetched as isFetchedAgreementsSelector,
} from 'commons/hooks/useAgreements/selectors';
import { openModal } from 'commons/Modal/actions';
import { showError, showSuccess } from 'commons/Notifications/actions';
import {
  REDIRECT_TO_UNSUBSCRIBE_FORM_MODAL_ID,
  REMOVE_MAILS_NEWSLETTER_MODAL_ID,
} from 'commons/share_app/components/Modals/constants';
import { SUB_PAGE_NAME_HISTORY } from 'commons/share_app/containers/Mails/constants';
import {
  isFetched as isFetchedNewslettersSelector,
  isFetching as isFetchingNewslettersSelector,
} from 'commons/share_app/containers/Newsletters/selectors';
import t from 'commons/translations/t';
import { WEBMAIL_API_URL } from 'commons/utils/constants';
import { stringToDate } from 'commons/utils/date';
import { AppThunk, getStateValueBySelector } from 'commons/utils/react-redux';
import request from 'commons/utils/request';

import {
  getCurrentSubPage,
  getMailsUrlProps,
  getNewsletterUrlProps,
} from 'containers/App/selectors';
// TODO wb 2.0 importy do aplikacji webmail 3.0
// eslint-disable-next-line import/no-unresolved
import { fetchFolders } from 'containers/Folders/actions';
import { goToHistory } from 'utils/route';

import {
  DELETE_MAILS_FROM_NEWSLETTER,
  DELETE_MAILS_NEWSLETTER_DAYS_COUNT,
  FETCH_NEWSLETTERS,
  FETCH_NEWSLETTERS_FAILURE,
  FETCH_NEWSLETTERS_SUCCESS,
  REMOVE_NEWSLETTER_MAILS,
  REMOVE_NEWSLETTER_MAILS_FAILURE,
  REMOVE_NEWSLETTER_MAILS_SUCCESS,
  SET_LAST_SHOWN_ID,
  SORT_NEWSLETTERS,
  UNSUBSCRIBE_NEWSLETTER,
  UNSUBSCRIBE_NEWSLETTER_FAILURE,
  UNSUBSCRIBE_NEWSLETTER_SUCCESS,
} from './constants';
import {
  Newsletter,
  NewsletterRule,
  NewslettersSortType,
  UnsubscribeResponse,
} from './types';

const fetchNewslettersSuccess = (
  newsletters: Newsletter[],
  sort: NewslettersSortType,
) => ({
  type: FETCH_NEWSLETTERS_SUCCESS,
  newsletters,
  sort,
});

const fetchNewslettersFailure = () => ({
  type: FETCH_NEWSLETTERS_FAILURE,
});

/**
 * Get newsletters
 * GET /api/subscriptions/
 *
 * Response
 * [{
 *   idMessage: 877625,
 *   lastMessage: '2023-04-12T09:48:49.000Z',
 *   "from": {
 *      "email": "kontakt@mailingi.onet.pl",
 *      "name": "Grzegorz Giza"
 *   },
 *   fullFrom: '"Phil Konieczny" <bok@instytutkryptografii.pl>',
 *   subject: '[SPAM] Widzimy się w sobotę. Czego się możesz spodziewać?',
 *   count: 10,
 *   isBimi: true,
 *   recivedDate: '2023-03-28T07:05:04.000Z',
 *   sentDate: '2023-03-28T05:18:54.000Z',
 *   snippet: 'W środku szczegóły',
 * }];
 */
export const fetchNewsletters = (): AppThunk => async (dispatch) => {
  try {
    dispatch({ type: FETCH_NEWSLETTERS });

    const reqNewsletters = request(
      `${WEBMAIL_API_URL}/subscriptions?sort=from`,
    );
    const reqNewsletterRules = request(`${WEBMAIL_API_URL}/unsubscribed`);

    const [newsletters, nRules]: [Newsletter[], NewsletterRule[]] =
      await Promise.all([reqNewsletters, reqNewsletterRules]);
    const mapRules: { [key: string]: string } = {};

    nRules.forEach(({ unsubFrm, unsubLastUpdate }) => {
      if (unsubFrm && unsubLastUpdate) {
        mapRules[unsubFrm] = unsubLastUpdate;
      }
    });

    const sort = getStateValueBySelector(getNewsletterUrlProps, 'sort');

    dispatch(
      fetchNewslettersSuccess(
        newsletters.filter(({ from, lastMessage }) => {
          let isSubscribeAgain = false;
          const unsubDateString = mapRules[from.email];

          if (lastMessage && unsubDateString) {
            isSubscribeAgain =
              (stringToDate(lastMessage)?.getTime() || 0) >
              (stringToDate(unsubDateString)?.getTime() || 0);
          }

          return !unsubDateString || (isSubscribeAgain && unsubDateString);
        }),
        sort,
      ),
    );
  } catch (e) {
    reportCatchErrorFromAction(e as Error);
    dispatch(fetchNewslettersFailure());
  }
};

const unsubscribeNewsletterSuccess = (mid: Newsletter['idMessage']) => ({
  type: UNSUBSCRIBE_NEWSLETTER_SUCCESS,
  mid,
});

const unsubscribeNewsletterFailure = (mid: Newsletter['idMessage']) => ({
  type: UNSUBSCRIBE_NEWSLETTER_FAILURE,
  mid,
});

/**
 * Unsubscribe newsletter in redirector API
 */
export const unsubscribeNewsletter =
  (
    mid: Newsletter['idMessage'],
    emailFrom: Newsletter['from']['email'],
  ): AppThunk =>
  async (dispatch, getState) => {
    const agreementProps = { agreementId: SMART_FUNCTIONS_ID };
    const isFetchedNewsletters = isFetchedNewslettersSelector(getState());
    const isFetchingNewsletters = isFetchingNewslettersSelector(getState());
    const isSmartFunctionAgreement = isAgreementSelector(
      getState(),
      agreementProps,
    );

    // @ts-ignore
    const isFetchedAgreements = isFetchedAgreementsSelector(getState());

    if (
      !isFetchedNewsletters &&
      !isFetchingNewsletters &&
      isSmartFunctionAgreement &&
      isFetchedAgreements
    ) {
      dispatch(fetchNewsletters());
    }

    try {
      dispatch({ type: UNSUBSCRIBE_NEWSLETTER, mid });

      const reqData = (await request(
        `${process.env.REDIRECTOR_API_URL}/unsubscribe?mid=${mid}`,
      )) as UnsubscribeResponse;

      if (reqData.status === 1 && reqData.data) {
        dispatch(
          openModal(REDIRECT_TO_UNSUBSCRIBE_FORM_MODAL_ID, {
            url: reqData.data,
            emailFrom,
            mid,
          }),
        );
      } else {
        dispatch(
          openModal(REMOVE_MAILS_NEWSLETTER_MODAL_ID, {
            emailFrom,
            mid,
          }),
        );
      }

      dispatch(unsubscribeNewsletterSuccess(mid));
    } catch (e) {
      reportCatchErrorFromAction(e as Error);
      dispatch(unsubscribeNewsletterFailure(mid));
      dispatch(showError(t('newslettersErrorMsg')));
    }
  };

const removeNewsletterMailsSuccess =
  (emailFrom: Newsletter['from']['email']): AppThunk =>
  async (dispatch, getState) => {
    dispatch({
      type: REMOVE_NEWSLETTER_MAILS_SUCCESS,
      emailFrom,
    });

    const subPage = getCurrentSubPage(getState());

    if (subPage === SUB_PAGE_NAME_HISTORY) {
      const params = getMailsUrlProps(getState(), '');

      if (params.historyValue?.[0]?.isUnsubscribe) {
        goToHistory([{ ...params.historyValue[0], isUnsubscribe: false }]);
      }
    }
  };

const removeNewsletterMailsFailure = () => ({
  type: REMOVE_NEWSLETTER_MAILS_FAILURE,
});

/**
 * Move mails from given sender to trash
 */
export const removeNewsletterMails =
  (emailFrom: Newsletter['from']['email']): AppThunk =>
  async (dispatch) => {
    try {
      dispatch({ type: REMOVE_NEWSLETTER_MAILS });

      await request(`${WEBMAIL_API_URL}/mail/moveByFrom`, {
        method: 'PATCH',
        body: {
          dstFolder: 'trash',
          from: emailFrom,
        },
      });

      dispatch(fetchFolders()); // todo: czy potrzebne
      dispatch(removeNewsletterMailsSuccess(emailFrom));
    } catch (e) {
      reportCatchErrorFromAction(e as Error);
      dispatch(removeNewsletterMailsFailure());
      dispatch(showError(t('newslettersErrorMsg')));
    }
  };

export const deleteMailsFromNewsletter =
  (email: string, count: number): AppThunk =>
  async (dispatch) => {
    try {
      dispatch({ type: DELETE_MAILS_FROM_NEWSLETTER });

      await request(`${WEBMAIL_API_URL}/cleaner/custom`, {
        method: 'POST',
        // mozemy dodac do body parametr fid, ktory bedzie zawieral id folderu, z ktorego chcemy usunac maile
        // fromList zawiera liste maili, ktore chcemy usunac czyli np. [abs@wp.pl, a@onet.pl, o@interia.pl], ale w tym przypadku tylko jeden email usuwamy
        body: {
          fromList: [email],
          days: DELETE_MAILS_NEWSLETTER_DAYS_COUNT,
        },
      });

      dispatch(showSuccess(t('newsletterDeleteSucces', { counter: count })));
      dispatch(fetchFolders());
    } catch (e) {
      dispatch(showError(t('newslettersErrorMsg')));
      reportCatchErrorFromAction(e as Error);
    }
  };

export const sortNewsletters = (sort: NewslettersSortType) => ({
  type: SORT_NEWSLETTERS,
  sort,
});

export const setLastShownId = (id: number) => ({
  type: SET_LAST_SHOWN_ID,
  id,
});
