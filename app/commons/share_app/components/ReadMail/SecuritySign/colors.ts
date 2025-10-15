import { css } from 'commons/Goober';

import { StyledProps } from './styles';
import { SecuritySignTypes } from './types';

export const securitySignColors: Record<SecuritySignTypes, any> = {
  error: css`
    color: var(--state-error);
  `,
  success: css`
    color: var(--state-success);
  `,
  warning: css`
    color: var(--state-warning);
  `,
};

export const securitySignColorsFunc = ({
  $type,
}: {
  $type?: StyledProps['$type'];
}) => ($type ? securitySignColors[$type] : '');
