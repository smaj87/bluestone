import { invokeAdsFetch } from 'commons/share_app/components/hooks/useAds';
import { CashbacksRouterIsShowContext } from 'commons/share_app/components/RouterHelpers/constants';
import Cashbacks from 'commons/share_app/containers/Cashbacks';
import { PAGE_NAME } from 'commons/share_app/containers/Cashbacks/constants';
import { FC, memo, useEffect } from 'commons/utils/react';
import { dispatch } from 'commons/utils/store';

import { setCurrentPage } from 'containers/App/actions';

interface Props {
  isShow: boolean;
}

const CashbacksRouterHelper: FC<Props> = ({ isShow }) => {
  useEffect(() => {
    if (isShow) {
      dispatch(invokeAdsFetch(PAGE_NAME, ''));
      dispatch(setCurrentPage(PAGE_NAME));
    }
  }, [isShow]);

  return (
    <CashbacksRouterIsShowContext.Provider value={isShow}>
      <Cashbacks />
    </CashbacksRouterIsShowContext.Provider>
  );
};

export default memo(CashbacksRouterHelper);
