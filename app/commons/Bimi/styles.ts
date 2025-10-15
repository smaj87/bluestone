import styled, { css } from 'commons/Goober';

import { placementTypes } from './placement';
import { BimiPlacement } from './types';

export const bimiStyles = css`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 0.1rem solid;
  overflow: hidden;

  img {
    display: block;
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
`;

export const BimiStyled = styled('figure')<{
  $placement?: BimiPlacement;
}>`
  ${bimiStyles}
  ${({ $placement }) =>
    $placement ? placementTypes[$placement] : placementTypes.default};
`;
