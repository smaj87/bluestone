import { FC } from 'commons/utils/react';

import { SideMenuCounterLabelStyled, SideMenuCounterStyled } from './styles';

interface SideMenuCounterProps {
  counter?: number;
}

const SideMenuCounter: FC<SideMenuCounterProps> = ({ counter }) => (
  <SideMenuCounterStyled>
    <SideMenuCounterLabelStyled>{counter}</SideMenuCounterLabelStyled>
  </SideMenuCounterStyled>
);

export default SideMenuCounter;
