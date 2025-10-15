import { FC, memo } from 'commons/utils/react';

import { SlotFlatClockCellStyled, SlotFlatClockStyled } from './styles';

interface Props {
  hours: string;
  minutes: string;
  seconds: string;
}

const SlotFlatClock: FC<Props> = ({ hours, minutes, seconds }) => (
  <SlotFlatClockStyled>
    <SlotFlatClockCellStyled>{hours}</SlotFlatClockCellStyled>
    <SlotFlatClockCellStyled>{minutes}</SlotFlatClockCellStyled>
    <SlotFlatClockCellStyled>{seconds}</SlotFlatClockCellStyled>
  </SlotFlatClockStyled>
);

export default memo(SlotFlatClock);
