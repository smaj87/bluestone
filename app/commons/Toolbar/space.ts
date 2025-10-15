import { css } from 'commons/Goober';

import { ToolbarGroupStyledProps } from './styles';
import { ToolbarGroupSpace } from './types';

export const spaceSm = css`
  grid-column-gap: 0.4rem;
`;

export const spaceMd = css`
  grid-column-gap: 0.8rem;
`;

export const spaceLg = css`
  grid-column-gap: 3.2rem;
`;

export const toolbarGroupSpaces: Record<ToolbarGroupSpace, any> = {
  sm: spaceSm,
  md: spaceMd,
  lg: spaceLg,
};

export const toolbarGroupSpacesFunc = ({
  $space,
}: {
  $space?: ToolbarGroupStyledProps['$space'];
}) => ($space ? toolbarGroupSpaces[$space] : 'md');
