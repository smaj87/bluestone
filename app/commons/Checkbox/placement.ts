import { css } from 'commons/Goober';

import { CheckboxPlacement } from './types';

export const checkboxModalStyles = css`
  font-size: 1.6rem;
  color: var(--modal-txt);
`;

export const placementTypes: Record<CheckboxPlacement, any> = {
  default: css``,
  modal: css`
    ${checkboxModalStyles};
  `,
};
