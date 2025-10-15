import MailsRouterHelper from 'commons/share_app/components/RouterHelpers/MailsRouterHelper';
import { UrlParamsCacheType } from 'commons/share_app/components/RouterHelpers/utils';
import { FC, memo } from 'commons/utils/react';

import { MAILS_VIEW_URL_PROPS } from 'containers/App/constants';

interface Props {
  urlParamsCache: UrlParamsCacheType;
}

const MainRouter: FC<Props> = ({ urlParamsCache }) => (
  <>
    <MailsRouterHelper
      deprecated_mailsNewRedirectUrl={
        urlParamsCache.deprecated_mailsNewRedirectUrl
      }
      isShow={urlParamsCache.isMailsShow}
      notRequiredData={urlParamsCache.mailsNotRequiredData}
      params={urlParamsCache[MAILS_VIEW_URL_PROPS]}
    />
  </>
);

export default memo(MainRouter);
