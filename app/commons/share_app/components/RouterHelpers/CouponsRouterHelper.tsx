import { invokeAdsFetch } from 'commons/share_app/components/hooks/useAds';
import Coupons from 'commons/share_app/containers/Coupons';
import { PAGE_NAME } from 'commons/share_app/containers/Coupons/constants';
import { FC, memo, useEffect } from 'commons/utils/react';
import { dispatch } from 'commons/utils/store';

import { setCurrentPage } from 'containers/App/actions';

import { CouponsRouterIsShowContext } from './constants';

interface Props {
  isShow: boolean;
}

const CouponsRouterHelper: FC<Props> = ({ isShow }) => {
  useEffect(() => {
    if (isShow) {
      dispatch(invokeAdsFetch(PAGE_NAME, ''));
      dispatch(setCurrentPage(PAGE_NAME));
    }
  }, [isShow]);

  return (
    <CouponsRouterIsShowContext.Provider value={isShow}>
      <Coupons />
    </CouponsRouterIsShowContext.Provider>
  );
};

export default memo(CouponsRouterHelper);
