import { css } from 'commons/Goober';

import { AdBlockStyledProps } from './styles';
import { Color } from './types';

export const primaryStyles = css`
  border-color: var(--ad-block-border--primary);
  background: var(--ad-block-bg--primary);
  color: var(--ad-block-txt--primary);
`;

export const secondaryStyles = css`
  border-color: var(--ad-block-border--secondary);
  background: var(--ad-block-bg--secondary);
  color: var(--ad-block-txt--secondary);
`;

export const tertiaryStyles = css`
  border-color: var(--ad-block-border--tertiary);
  background: var(--ad-block-bg--tertiary);
  color: var(--ad-block-txt--tertiary);
`;

export const adBlockColors: Record<Color, any> = {
  primary: primaryStyles,
  secondary: secondaryStyles,
  tertiary: tertiaryStyles,
};

export const adBlockColorsFunc = ({
  $color,
}: {
  $color?: AdBlockStyledProps['$color'];
}) => ($color ? adBlockColors[$color] : adBlockColors.primary);
