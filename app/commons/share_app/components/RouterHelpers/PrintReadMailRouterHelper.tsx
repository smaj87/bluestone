import {
  getUrlParamsCache,
  normalizedUrl,
} from 'commons/share_app/components/RouterHelpers/utils';
import { FC, memo } from 'commons/utils/react';

import { READ_MAIL_VIEW_URL_PROPS } from 'containers/App/constants';

import ReadMailRouterHelper from './ReadMailRouterHelper';

const PrintReadMailRouterHelper: FC = () => (
  <ReadMailRouterHelper
    isPrinting
    isShow
    params={
      getUrlParamsCache(normalizedUrl(window.location.pathname))[
        READ_MAIL_VIEW_URL_PROPS
      ]
    }
  />
);

export default memo(PrintReadMailRouterHelper);
