import { css } from 'commons/Goober';

import { ComponentStateIconProps } from './styles';
import { ComponentStateColor } from './types';

export const componentStateColors: Record<ComponentStateColor, any> = {
  default: css`
    color: var(--app-txt);
  `,
  error: css`
    color: var(--state-error);
  `,
  success: css`
    color: var(--state-success);
  `,
  warning: css`
    color: var(--state-warning);
  `,
  offers: css`
    color: var(--offers);
  `,
  notifications: css`
    color: var(--notifications);
  `,
  social: css`
    color: var(--social);
  `,
  eprescriptions: css`
    color: var(--eprescriptions);
  `,
  epayments: css`
    color: var(--epayments);
  `,
};

export const componentStateColorsFunc = ({
  $color,
}: {
  $color?: ComponentStateIconProps['$color'];
}) => ($color ? componentStateColors[$color] : '');
