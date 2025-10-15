import Button from 'commons/Button';
import styled from 'commons/Goober';
import Icon from 'commons/Icon';

import { componentStateColorsFunc } from './colors';
import {
  componentStateImageSizesFunc,
  componentStateSizesFunc,
  componentStateStretchFunc,
} from './sizes';
import {
  ComponentStateColor,
  ComponentStateSize,
  ComponentStateStretch,
} from './types';

export interface ComponentStateStyledProps {
  $stretch?: ComponentStateStretch;
  $size?: ComponentStateSize;
}

export const ComponentStateStyled = styled('div')<ComponentStateStyledProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
  max-width: 64rem;

  h2 {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 0;
    width: 100%;
    text-align: center;
    color: var(--component-state-txt--primary);

    &:not(:last-child) {
      margin-bottom: 1.6rem;
    }
  }

  p {
    margin: 0.4rem 0;
    font-weight: 400;
    font-size: inherit;
    line-height: inherit;
    text-align: center;
    color: var(--component-state-txt--secondary);
  }

  a {
    font-weight: 400;
    font-size: inherit;
    line-height: inherit;
    text-decoration: underline;
  }

  ${componentStateSizesFunc};
  ${componentStateStretchFunc};
`;

export interface ComponentStateImageStyledProps {
  $size?: ComponentStateSize;
}

export const ComponentStateImageStyled = styled(
  'div',
)<ComponentStateImageStyledProps>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  ${componentStateImageSizesFunc};
`;

export interface ComponentStateIconProps {
  $color: ComponentStateColor;
}

export const ComponentStateIcon = styled(Icon)<ComponentStateIconProps>`
  ${componentStateColorsFunc};
`;

export const ComponentStateButton = styled(Button)`
  font-weight: 400;
  font-size: inherit;
  line-height: inherit;
  color: var(--component-state-link);
  text-decoration: underline;
  text-decoration-thickness: 0.1rem;

  @media (hover: hover) {
    &:hover:not(:disabled) {
      text-decoration-thickness: 0.2rem;
    }
  }
`;

export const ComponentStateActionsStyled = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.8rem;
  margin: 2.4rem auto 0;
  padding: 0;
  width: fit-content;
`;

export const ComponentStateActionItemStyled = styled('div')`
  width: 100%;
`;
