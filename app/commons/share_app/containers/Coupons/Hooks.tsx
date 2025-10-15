import useDisplayContainer from 'commons/hooks/useDisplayContainer';
import { removeInterfaceEffect } from 'commons/hooks/useInterfaceEffects/actions';
import { getInterfaceEffectId } from 'commons/hooks/useInterfaceEffects/selectors';
import { CouponsRouterIsShowContext } from 'commons/share_app/components/RouterHelpers/constants';
import { FC, useContext, useEffect } from 'commons/utils/react';
import {
  getStateValueBySelector,
  useSelector,
} from 'commons/utils/react-redux';
import { dispatch } from 'commons/utils/store';

import { SHOW_NEW_LABEL_TYPE } from 'containers/Folders/constants';

import { sendSeenIds, setHideIsNewInCoupons, setIsNewCoupons } from './actions';
import { COUPONS_LIST_CONTAINER_ID, KEY } from './constants';
import { isFetched } from './selectors';

export const couponsShowProps = {
  type: SHOW_NEW_LABEL_TYPE,
  subtype: 'coupons',
};

let isFirstView = true;

const Hooks: FC = () => {
  const isShow = useContext(CouponsRouterIsShowContext);

  useDisplayContainer(COUPONS_LIST_CONTAINER_ID, isShow, true);

  const isFetchedCashbacksAndCoupons = useSelector(isFetched);

  useEffect(() => {
    // drugie wejscie w kupony wywala im flagi isNew
    if (isShow && !isFirstView) {
      dispatch(setHideIsNewInCoupons());
    }

    // pierwsze wejscie w kupony wywala labelke isNew w folderze oraz wysyla na backend idki oraz timeout wywalenia flag isNew
    if (isFetchedCashbacksAndCoupons && isShow && isFirstView) {
      dispatch(sendSeenIds(KEY));
      dispatch(setIsNewCoupons(false));

      setTimeout(() => dispatch(setHideIsNewInCoupons()), 15000);

      isFirstView = false;
    }
  }, [isFetchedCashbacksAndCoupons, isShow]);

  useEffect(() => {
    if (isShow) {
      const id = getStateValueBySelector(
        getInterfaceEffectId,
        couponsShowProps,
      );

      if (id) {
        dispatch(removeInterfaceEffect(SHOW_NEW_LABEL_TYPE, id));
      }
    }
  }, [isShow]);

  return null;
};

export default Hooks;
