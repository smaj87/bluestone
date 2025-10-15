import { invokeAdsFetch } from 'commons/share_app/components/hooks/useAds';
import Mautic from 'commons/share_app/containers/Communities/Mautic';
import {
  MAUTIC_CUSTOM_SURVEY_SLUG,
  MAUTIC_URL_NAME,
  PAGE_NAME,
} from 'commons/share_app/containers/Communities/Mautic/constants';
import { UrlParamsInterface } from 'commons/share_app/containers/Communities/Mautic/types';
import { FC, memo, useEffect, useRef, useState } from 'commons/utils/react';
import { historyPush } from 'commons/utils/route';
import { dispatch } from 'commons/utils/store';
import { isEqual } from 'commons/utils/tinyLodash';

import { setCurrentPage, setUrlProps } from 'containers/App/actions';
import { MAUTIC_VIEW_URL_PROPS } from 'containers/App/constants';

import { MauticRouterIsShowContext } from './constants';

interface Props {
  isShow: boolean;
  params: UrlParamsInterface;
}

const MauticRouterHelper: FC<Props> = ({ isShow = false, params }) => {
  const [cachedParams, setCachedParams] = useState(params);
  const cachedParamsRef = useRef(cachedParams);
  cachedParamsRef.current = cachedParams;

  const lastIsShowRef = useRef(isShow);
  const isShowView =
    isShow && (lastIsShowRef.current || isEqual(params, cachedParams));

  useEffect(() => {
    if (
      isShow &&
      cachedParamsRef.current.subpage === MAUTIC_CUSTOM_SURVEY_SLUG &&
      !cachedParamsRef.current.id
    ) {
      historyPush(`/${MAUTIC_URL_NAME}`);
    } else if (isShow) {
      dispatch(setUrlProps(MAUTIC_VIEW_URL_PROPS, params));

      dispatch(invokeAdsFetch(PAGE_NAME, ''));
      dispatch(setCurrentPage(PAGE_NAME));

      if (!isEqual(params, cachedParamsRef.current)) {
        setTimeout(() => setCachedParams(params), 0);
      }
    }

    lastIsShowRef.current = isShow;
  }, [isShow, ...Object.values(params)]);

  return (
    <MauticRouterIsShowContext.Provider value={isShowView}>
      <Mautic />
    </MauticRouterIsShowContext.Provider>
  );
};

export default memo(MauticRouterHelper);
