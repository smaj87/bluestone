import { css } from 'commons/Goober';

import { IconInfoStyledProps } from './styles';
import { InfoState } from './types';

export const iconInfoState: Record<InfoState, any> = {
  error: css`
    color: var(--state-error);
  `,
  warning: css`
    color: var(--state-warning);
  `,
  success: css`
    color: var(--state-success);
  `,
};

export const iconInfoStateFunc = ({
  $state,
}: {
  $state?: IconInfoStyledProps['$state'];
}) => ($state ? iconInfoState[$state] : '');
