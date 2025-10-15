import {
  destroyAd,
  fetchAd,
} from 'commons/share_app/components/hooks/useAds/Onet/utils';
import { FC, memo, useEffect } from 'commons/utils/react';

import { SLOT } from './constants';

const style = { width: '100%' };

interface Props {
  isShow: boolean;
}

const Slot: FC<Props> = ({ isShow }) => {
  useEffect(() => {
    if (isShow) {
      fetchAd(SLOT.NAME, SLOT.CONTAINER_ID);
    }

    return () => {
      destroyAd(SLOT.CONTAINER_ID);
    };
  }, [isShow]);

  return <div id={SLOT.CONTAINER_ID} style={style} />;
};

export default memo(Slot);
