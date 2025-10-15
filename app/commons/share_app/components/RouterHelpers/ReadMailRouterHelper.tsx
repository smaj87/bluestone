import { invokeAdsFetch } from 'commons/share_app/components/hooks/useAds';
import { ReadMailRouterIsShowContext } from 'commons/share_app/components/RouterHelpers/constants';
import ReadMail from 'commons/share_app/containers/ReadMail';
import { PAGE_NAME } from 'commons/share_app/containers/ReadMail/constants';
import Printing from 'commons/share_app/containers/ReadMail/Printing';
import { UrlParamsInterface } from 'commons/share_app/containers/ReadMail/types';
import { FC, memo, useEffect, useRef, useState } from 'commons/utils/react';
import { getStateValueBySelector } from 'commons/utils/react-redux';
import { dispatch } from 'commons/utils/store';

import { goBack, setCurrentPage, setUrlProps } from 'containers/App/actions';
import { READ_MAIL_VIEW_URL_PROPS } from 'containers/App/constants';
import { getMailsUrlProps } from 'containers/App/selectors';
import { FOLDER_INBOX_KEY } from 'containers/Folders/constants';
import { MAILS_URLS } from 'utils/constants';

interface Props {
  params: UrlParamsInterface;
  isShow: boolean;
  isPrinting: boolean;
}

const ReadMailRouterHelper: FC<Props> = ({ isPrinting, isShow, params }) => {
  const [cachedMid, setCachedMid] = useState(-1);
  const cachedMidRef = useRef(cachedMid);
  cachedMidRef.current = cachedMid;

  const lastIsShowRef = useRef(isShow);
  const isShowView =
    isShow &&
    (lastIsShowRef.current || params.mid < 0 || params.mid === cachedMid);

  useEffect(() => {
    if (isShow && params.mid < 0 && !isPrinting) {
      dispatch(goBack());
    } else if (isShow && params.mid > 0) {
      dispatch(setUrlProps(READ_MAIL_VIEW_URL_PROPS, params, isPrinting));

      dispatch(
        invokeAdsFetch(
          PAGE_NAME,
          getStateValueBySelector(getMailsUrlProps, 'urlName') ||
            MAILS_URLS[FOLDER_INBOX_KEY],
        ),
      );

      dispatch(setCurrentPage(PAGE_NAME));

      // setState wymusza rerender nawet jezeli wartosc sie nie zmienila
      if (params.mid !== cachedMidRef.current) {
        // celowe opoznienie, useDisplayContainer jest za szybki dla reacta
        setTimeout(() => setCachedMid(params.mid), 0);
      }
    }

    lastIsShowRef.current = isShow;
  }, [isShow, params.mid]);

  return (
    <ReadMailRouterIsShowContext.Provider
      value={isPrinting ? true : isShowView}
    >
      {isPrinting ? <Printing /> : <ReadMail />}
    </ReadMailRouterIsShowContext.Provider>
  );
};

export default memo(ReadMailRouterHelper);
