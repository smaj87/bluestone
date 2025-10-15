import { invokeAdsFetch } from 'commons/share_app/components/hooks/useAds';
import { FC, memo, useEffect } from 'commons/utils/react';
import { dispatch } from 'commons/utils/store';

import { goBack, setCurrentPage, setUrlProps } from 'containers/App/actions';
import { NEW_MAIL_VIEW_URL_PROPS } from 'containers/App/constants';
import NewMail from 'containers/NewMail';
import {
  defaultUrlParams,
  NEW_MAIL_REPLAY_TYPES,
  NEW_MAIL_URL_NAME,
  PAGE_NAME,
} from 'containers/NewMail/constants';
// import NewMail from 'commons/share_app/containers/NewMail';
import { UrlParamsInterface } from 'containers/NewMail/types';

import { NewMailRouterIsShowContext } from './constants';

interface Props {
  isShow: boolean;
  params: UrlParamsInterface;
}

const NewMailRouterHelper: FC<Props> = ({ isShow, params }) => {
  useEffect(() => {
    if (isShow) {
      const needMid = NEW_MAIL_REPLAY_TYPES.includes(params.type);
      const isNoRequiredMid = needMid && params.mid <= 0;

      if (isNoRequiredMid) {
        dispatch(goBack());
      } else {
        dispatch(setUrlProps(NEW_MAIL_VIEW_URL_PROPS, params));

        dispatch(invokeAdsFetch(PAGE_NAME, NEW_MAIL_URL_NAME));
        dispatch(setCurrentPage(PAGE_NAME));
      }
    } else {
      dispatch(
        setUrlProps(NEW_MAIL_VIEW_URL_PROPS, {
          ...defaultUrlParams,
        }),
      );
    }
  }, [isShow, ...Object.values(params)]);

  return (
    <NewMailRouterIsShowContext.Provider value={isShow}>
      <NewMail />
    </NewMailRouterIsShowContext.Provider>
  );
};

export default memo(NewMailRouterHelper);
