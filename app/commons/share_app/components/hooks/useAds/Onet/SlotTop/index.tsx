import AdPlug from 'commons/AdPlug';
import { isAdblock as isAdblockSelector } from 'commons/hooks/useUserConfig/selectors';
import AdBlockTop from 'commons/share_app/components/hooks/useAds/elements/AdBlock/AdBlockTop';
import { FC, memo, useEffect, useState } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

import { getReFetchFlag } from '../../selectors';
import { isShowDesktopAds } from '../selectors';
import { addEvents, destroyAd, fetchAd } from '../utils';
import {
  SlotTopContentStyled,
  SlotTopDetailStyled,
  SlotTopStyled,
} from './styles';

const NAME = 'top';
const CONTAINER_ID = `slot-${NAME}`;

const SlotTop: FC = () => {
  const isShowAd = useSelector(isShowDesktopAds);
  const isAdblock = useSelector(isAdblockSelector);
  const reFetchFlag = useSelector(getReFetchFlag);
  const [isEmpty, setIsEmpty] = useState(true);
  const slotSize = isAdblock ? 'lg' : 'md';

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
  }, [isShowAd, reFetchFlag]);

  useEffect(
    () => () => {
      destroyAd(CONTAINER_ID);
    },
    [],
  );

  return isShowAd ? (
    <SlotTopStyled $size={slotSize} data-cypress="SLOT-TOP-CONTAINER">
      <SlotTopContentStyled>
        {isEmpty && !isAdblock ? <AdPlug /> : null}
        {isAdblock ? <AdBlockTop size={slotSize} /> : null}
        <SlotTopDetailStyled>
          <div data-prop-lazyPercentage="100" id={CONTAINER_ID} />
        </SlotTopDetailStyled>
      </SlotTopContentStyled>
    </SlotTopStyled>
  ) : null;
};

export default memo(SlotTop);
