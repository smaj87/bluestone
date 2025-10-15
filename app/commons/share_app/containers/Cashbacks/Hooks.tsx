import useDisplayContainer from 'commons/hooks/useDisplayContainer';
import { removeInterfaceEffect } from 'commons/hooks/useInterfaceEffects/actions';
import { getInterfaceEffectId } from 'commons/hooks/useInterfaceEffects/selectors';
import { CashbacksRouterIsShowContext } from 'commons/share_app/components/RouterHelpers/constants';
import { FC, useContext, useEffect } from 'commons/utils/react';
import {
  getStateValueBySelector,
  useSelector,
} from 'commons/utils/react-redux';
import { dispatch } from 'commons/utils/store';

import { SHOW_NEW_LABEL_TYPE } from 'containers/Folders/constants';

import { sendSeenIds } from '../Coupons/actions';
import { isFetched } from '../Coupons/selectors';
import { setHideIsNewInCashbacks, setIsNewCashbacks } from './actions';
import { CASHBACKS_LIST_CONTAINER_ID, KEY } from './constants';

export const cashbacksShowProps = {
  type: SHOW_NEW_LABEL_TYPE,
  subtype: 'cashbacks',
};

let isFirstView = true;

const Hooks: FC = () => {
  const isShow = useContext(CashbacksRouterIsShowContext);

  useDisplayContainer(CASHBACKS_LIST_CONTAINER_ID, isShow, true);

  const isFetchedCashbacksAndCoupons = useSelector(isFetched);

  useEffect(() => {
    // drugie wejscie w cashbacki wywala im flagi isNew
    if (isShow && !isFirstView) {
      dispatch(setHideIsNewInCashbacks());
    }

    // pierwsze wejscie w cashbacki wywala labelke isNew w folderze oraz wysyla na backend idki oraz timeout wywalenia flag isNew
    if (isFetchedCashbacksAndCoupons && isShow && isFirstView) {
      dispatch(sendSeenIds(KEY));
      dispatch(setIsNewCashbacks(false));

      setTimeout(() => dispatch(setHideIsNewInCashbacks()), 15000);

      isFirstView = false;
    }
  }, [isFetchedCashbacksAndCoupons, isShow]);

  useEffect(() => {
    if (isShow) {
      const id = getStateValueBySelector(
        getInterfaceEffectId,
        cashbacksShowProps,
      );

      if (id) {
        dispatch(removeInterfaceEffect(SHOW_NEW_LABEL_TYPE, id));
      }
    }
  }, [isShow]);

  return null;
};

export default Hooks;
