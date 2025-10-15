import { css } from 'commons/Goober';

import { ListStatusStyledProps } from './styles';
import { ListStatusType } from './types';

export const defaultStatusStyles = css`
  background: transparent;
  color: var(--list-item-txt--primary);
`;

export const warnStatusStyles = css`
  background: var(--state-warning);
  color: var(--state-warning-txt);
`;

export const errorStatusStyles = css`
  background: var(--state-error);
  color: var(--state-error-txt);
`;

export const successStatusStyles = css`
  background: var(--state-success);
  color: var(--state-success-txt);
`;

export const statusTypes: Record<ListStatusType, any> = {
  default: css`
    ${defaultStatusStyles};
  `,
  warn: css`
    ${warnStatusStyles};
  `,
  error: css`
    ${errorStatusStyles};
  `,
  success: css`
    ${successStatusStyles};
  `,
};

export const listStatusFunc = ({
  $status,
}: {
  $status?: ListStatusStyledProps['$status'];
}) => ($status ? statusTypes[$status] : 'default');
