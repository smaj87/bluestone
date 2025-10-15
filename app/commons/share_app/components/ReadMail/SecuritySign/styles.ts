import styled from 'commons/Goober';
import Icon from 'commons/Icon';

import { securitySignColorsFunc } from './colors';
import { SecuritySignTypes } from './types';

export interface StyledProps {
  $type?: SecuritySignTypes;
}

export const SecuritySignStyled = styled(Icon)<StyledProps>`
  ${securitySignColorsFunc};
  justify-self: flex-end;
  margin-left: auto;
  font-size: 1.6rem;
`;
