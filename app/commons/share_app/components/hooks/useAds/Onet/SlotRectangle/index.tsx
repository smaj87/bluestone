import AdPlug from 'commons/AdPlug';
import { FC, memo, useEffect, useState } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

import { getReFetchFlag } from '../../selectors';
import { addEvents, destroyAd, fetchAd } from '../utils';
import { isShowAd as isShowAdSelector } from './selectors';
import {
  SlotRectangleContentStyled,
  SlotRectangleDetailStyled,
  SlotRectangleStyled,
} from './styles';

const NAME = 'rectangle1';
const CONTAINER_ID = `slot-${NAME}`;

const SlotRectangle: FC = () => {
  const isShowAd = useSelector(isShowAdSelector);
  const reFetchFlag = useSelector(getReFetchFlag);
  const [isEmpty, setIsEmpty] = useState(true);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout> | undefined;

    if (isShowAd) {
      // !!! settimeout obowiazkowe ze wzgledu na LL reklam i naszego obserwera
      timeout = setTimeout(() => {
        fetchAd(NAME, CONTAINER_ID);

        addEvents(
          CONTAINER_ID,
          () => setIsEmpty(false),
          () => setIsEmpty(true),
          () => setIsEmpty(true),
        );
      }, 0);
    } else {
      destroyAd(CONTAINER_ID);
    }

    return () => {
      if (isShowAd) {
        clearTimeout(timeout);
      }
    };
  }, [isShowAd, reFetchFlag]);

  useEffect(
    () => () => {
      destroyAd(CONTAINER_ID);
    },
    [],
  );

  return isShowAd ? (
    <SlotRectangleStyled $size="lg">
      <SlotRectangleContentStyled>
        {isEmpty ? <AdPlug /> : null}
        <SlotRectangleDetailStyled>
          <div
            data-cypress="SLOT-RECTANGLE"
            data-prop-lazyPercentage="100"
            id={CONTAINER_ID}
          />
        </SlotRectangleDetailStyled>
      </SlotRectangleContentStyled>
    </SlotRectangleStyled>
  ) : null;
};

export default memo(SlotRectangle);
