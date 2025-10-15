import { invokeAdsFetch } from 'commons/share_app/components/hooks/useAds';
import Attachments from 'commons/share_app/containers/Attachments';
import { PAGE_NAME } from 'commons/share_app/containers/Attachments/constants';
import { UrlParamsInterface } from 'commons/share_app/containers/Attachments/types';
import {
  FC,
  memo,
  useLayoutEffect,
  useRef,
  useState,
} from 'commons/utils/react';
import { dispatch } from 'commons/utils/store';
import { isEqual } from 'commons/utils/tinyLodash';

import { setCurrentPage, setUrlProps } from 'containers/App/actions';
import { ATTACHMENTS_VIEW_URL_PROPS } from 'containers/App/constants';

import { AttachmentsRouterIsShowContext } from './constants';

interface Props {
  isShow: boolean;
  params: UrlParamsInterface;
}

const AttachmentsRouterHelper: FC<Props> = ({ isShow, params }) => {
  const [cachedParams, setCachedParams] = useState(params);
  const cachedParamsRef = useRef(cachedParams);
  cachedParamsRef.current = cachedParams;

  const lastIsShowRef = useRef(isShow);
  const isShowView =
    isShow && (lastIsShowRef.current || isEqual(params, cachedParams));

  useLayoutEffect(() => {
    if (isShow) {
      dispatch(setUrlProps(ATTACHMENTS_VIEW_URL_PROPS, params));

      dispatch(invokeAdsFetch(PAGE_NAME, ''));
      dispatch(setCurrentPage(PAGE_NAME));

      if (!isEqual(params, cachedParamsRef.current)) {
        setTimeout(() => setCachedParams(params), 0);
      }
    }

    lastIsShowRef.current = isShow;
  }, [isShow, ...Object.values(params)]);

  return (
    <AttachmentsRouterIsShowContext.Provider value={isShowView}>
      <Attachments />
    </AttachmentsRouterIsShowContext.Provider>
  );
};

export default memo(AttachmentsRouterHelper);
