import { invokeAdsFetch } from 'commons/share_app/components/hooks/useAds';
import Mails from 'commons/share_app/containers/Mails';
import {
  FETCH_MAILS,
  PAGE_NAME,
} from 'commons/share_app/containers/Mails/constants';
import { UrlParamsInterface } from 'commons/share_app/containers/Mails/types';
import { getSubPage } from 'commons/share_app/containers/Mails/utils';
import {
  FC,
  memo,
  useLayoutEffect,
  useRef,
  useState,
} from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';
import { historyPush } from 'commons/utils/route';
import { dispatch } from 'commons/utils/store';
import { isEqual } from 'commons/utils/tinyLodash';

import { setCurrentPage, setUrlProps } from 'containers/App/actions';
import { MAILS_VIEW_URL_PROPS } from 'containers/App/constants';
import { setNotificationByFid } from 'containers/Folders/actions';
import { FOLDER_INBOX_KEY } from 'containers/Folders/constants';
import { getFidByKey } from 'containers/Folders/selectors';
import { Smart, System } from 'containers/Folders/types';
import { MAILS_URLS } from 'utils/constants';
import { getKeyByUrlName } from 'utils/url';

import { MailsRouterIsShowContext } from './constants';

interface Props {
  params: UrlParamsInterface;
  isShow: boolean;
  notRequiredData: boolean;
  deprecated_mailsNewRedirectUrl: string;
}

const MailsRouterHelper: FC<Props> = ({
  deprecated_mailsNewRedirectUrl,
  isShow,
  notRequiredData,
  params,
}) => {
  const fidByUrl = useSelector(
    getFidByKey,
    getKeyByUrlName(params.urlName) as keyof System | keyof Smart,
  );

  if (
    fidByUrl &&
    !params.history &&
    !params.searchQuery &&
    params.labelId < 0 &&
    params.folderId < 0
  ) {
    // eslint-disable-next-line no-param-reassign
    params = { ...params, folderId: fidByUrl };
  }

  const [cachedParams, setCachedParams] = useState(params);
  const cachedParamsRef = useRef(cachedParams);
  cachedParamsRef.current = cachedParams;

  const lastIsShowRef = useRef(isShow);
  const isShowView =
    isShow &&
    !notRequiredData &&
    (lastIsShowRef.current || isEqual(params, cachedParams));

  useLayoutEffect(() => {
    if (isShow && notRequiredData) {
      historyPush(
        deprecated_mailsNewRedirectUrl || `/${MAILS_URLS[FOLDER_INBOX_KEY]}`,
      );
    } else if (isShow) {
      dispatch(setUrlProps(MAILS_VIEW_URL_PROPS, params));

      if (params.folderId > 0) {
        dispatch(setNotificationByFid(params.folderId, 0));
      }

      if (!isEqual(params, cachedParamsRef.current)) {
        setTimeout(() => {
          setCachedParams(params);

          // Problem with VA slot-rectangle
          dispatch({ type: FETCH_MAILS, append: false });
          dispatch(
            invokeAdsFetch(
              PAGE_NAME,
              params.urlName || MAILS_URLS[FOLDER_INBOX_KEY],
            ),
          );
        }, 0);
      } else {
        dispatch(
          invokeAdsFetch(
            PAGE_NAME,
            params.urlName || MAILS_URLS[FOLDER_INBOX_KEY],
          ),
        );
      }

      dispatch(setCurrentPage(PAGE_NAME, getSubPage(params)));
    }

    lastIsShowRef.current = isShow;
  }, [
    notRequiredData,
    deprecated_mailsNewRedirectUrl,
    isShow,
    ...Object.values(params),
  ]);

  return (
    <MailsRouterIsShowContext.Provider value={isShowView}>
      <Mails />
    </MailsRouterIsShowContext.Provider>
  );
};

export default memo(MailsRouterHelper);
