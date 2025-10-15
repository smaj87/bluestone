import styled from 'commons/Goober';
import Icon from 'commons/Icon';
import { screenMdAbove } from 'commons/utils/breakpoints';

import { iconInfoStateFunc } from './states';
import { InfoState } from './types';

export interface IconInfoStyledProps {
  $state?: InfoState;
}

export const IconInfoStyled = styled(Icon)<IconInfoStyledProps>`
  ${iconInfoStateFunc};
  font-size: 3.2rem;

  @media screen and (min-width: ${screenMdAbove}) {
    font-size: 4rem;
  }
`;
