import { css } from 'commons/Goober';

import { RadioPlacement } from './types';

export const radioModalStyles = css`
  font-size: 1.6rem;
  color: var(--modal-txt);
`;

export const placementTypes: Record<RadioPlacement, any> = {
  default: css``,
  modal: css`
    ${radioModalStyles};
  `,
};
