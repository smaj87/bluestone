import AdPlug from 'commons/AdPlug';
import { AppBrand } from 'commons/AppContainer/types';
import { isAdblock as isAdblockSelector } from 'commons/hooks/useUserConfig/selectors';
import AdBlockRight from 'commons/share_app/components/hooks/useAds/elements/AdBlock/AdBlockRight';
import {
  SlotRightAdPlugStyled,
  SlotRightColumnContentStyled,
  SlotRightColumnStyled,
  SlotRightContentStyled,
  SlotRightStyled,
} from 'commons/share_app/components/hooks/useAds/elements/SlotRight/styles';
import { FC, memo, useEffect, useState } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

import { getReFetchFlag } from '../../selectors';
import { addEvents, destroyAd, fetchAd } from '../utils';
import { isShowAd as isShowAdSelector } from './selectors';
import { getType } from './utils';

export const NAME = 'right';
export const CONTAINER_ID = `slot-${NAME}` as const;

const SlotRight: FC = () => {
  const isShowAd = useSelector(isShowAdSelector);
  const isAdblock = useSelector(isAdblockSelector);
  const reFetchFlag = useSelector(getReFetchFlag);

  const [isEmpty, setIsEmpty] = useState(true);
  const [type, setType] = useState(getType());

  useEffect(() => {
    const onResize = () => {
      setType(getType());
    };

    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
      destroyAd(CONTAINER_ID);
    };
  }, []);

  useEffect(() => {
    if (isShowAd) {
      fetchAd(NAME, CONTAINER_ID);

      addEvents(
        CONTAINER_ID,
        () => setIsEmpty(false),
        () => setIsEmpty(true),
        () => setIsEmpty(true),
      );
    } else {
      destroyAd(CONTAINER_ID);
    }
  }, [isShowAd, reFetchFlag, type]);

  return isShowAd ? (
    <SlotRightStyled $brand={process.env.APP as AppBrand}>
      <SlotRightContentStyled>
        <SlotRightColumnStyled>
          <SlotRightColumnContentStyled>
            {isEmpty && !isAdblock ? (
              <SlotRightAdPlugStyled>
                <AdPlug />
              </SlotRightAdPlugStyled>
            ) : null}
            <div
              data-cypress="SLOT-RIGHT"
              data-prop-lazyPercentage="100"
              id={CONTAINER_ID}
            />
            {isAdblock ? <AdBlockRight /> : null}
          </SlotRightColumnContentStyled>
        </SlotRightColumnStyled>
      </SlotRightContentStyled>
    </SlotRightStyled>
  ) : null;
};

export default memo(SlotRight);
