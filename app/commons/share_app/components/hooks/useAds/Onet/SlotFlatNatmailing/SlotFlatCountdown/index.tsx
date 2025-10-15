import SlotFlatOffer from 'commons/share_app/components/hooks/useAds/Onet/SlotFlatNatmailing/SlotFlatCountdown/SlotFlatOffer';
import { stringToDate } from 'commons/utils/date';
import { FC, memo, useEffect, useRef, useState } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

import { Selector } from '../types';
import {
  getCounterHours,
  getCounterMinutes,
  getCounterSeconds,
} from '../utils';
import SlotFlatClock from './SlotFlatClock';
import {
  SlotFlatCountdownContentStyled,
  SlotFlatCountdownStyled,
} from './styles';

interface Props {
  selector: Selector;
}

const SlotFlatCountdown: FC<Props> = ({ selector }) => {
  const [seconds, setSeconds] = useState(0);
  const [isCounter, setIsCounter] = useState(false);

  const timer = useRef<ReturnType<typeof setInterval>>();

  const counterEndDate = useSelector(selector, 'counterEndDate');

  useEffect(() => () => clearInterval(timer.current), []);

  useEffect(() => {
    if (counterEndDate) {
      const date = stringToDate(counterEndDate);

      if (date) {
        const defaultSeconds = (date.getTime() - new Date().getTime()) / 1000;

        setIsCounter(true);
        setSeconds(Math.floor(defaultSeconds));

        clearInterval(timer.current);

        timer.current = setInterval(() => {
          setSeconds((prevSeconds) => {
            const result = prevSeconds - 1;

            if (result < 0) {
              clearInterval(timer.current);
            }

            return result >= 0 ? result : 0;
          });
        }, 1000);
      } else {
        setIsCounter(false);
      }
    } else {
      clearInterval(timer.current);
    }
  }, [counterEndDate]);

  return (
    <SlotFlatCountdownStyled>
      <SlotFlatCountdownContentStyled>
        <SlotFlatOffer selector={selector} />
        {isCounter ? (
          <SlotFlatClock
            hours={getCounterHours(seconds)}
            minutes={getCounterMinutes(seconds)}
            seconds={getCounterSeconds(seconds)}
          />
        ) : null}
      </SlotFlatCountdownContentStyled>
    </SlotFlatCountdownStyled>
  );
};

export default memo(SlotFlatCountdown);
