import styled, { css } from 'commons/Goober';
import Icon from 'commons/Icon';
import { screenMdAbove, screenMdUnder } from 'commons/utils/breakpoints';
import { focusVisibleStyles } from 'commons/utils/commonStyles';
import { corner, fontApp } from 'commons/utils/variables';

import { ctaAlignFunc, ctaIconAlignFunc } from './alignment';
import { ctaColorsFunc, ctaColorsStaticFunc } from './colors';
import { ctaShapesFunc } from './shapes';
import { ctaSizesFunc, iconSizesFunc } from './sizes';
import { CtaAlign, CtaColor, CtaShape, CtaSize } from './types';

export interface CtaStyledProps {
  $align?: CtaAlign;
  $color?: CtaColor;
  $isActive?: boolean;
  $isMobile?: boolean;
  $isStretch?: boolean;
  $size?: CtaSize;
  $shape?: CtaShape;
}

export const isMobileStyles = css`
  @media screen and (max-width: ${screenMdUnder}) {
    flex-direction: column;
    justify-content: center;
    gap: 0.2rem;
    padding-block: 0.2rem;
    min-width: 3.6rem;
  }
`;

export const isMobileNotStretchStyles = css`
  @media screen and (max-width: ${screenMdUnder}) {
    height: 3.6rem;
  }
`;

export const isStretchStyles = css`
  height: 100%;
`;

export const isActiveStyles = css`
  cursor: default;
  pointer-events: none;
`;

export const isMobileIconStyles = css`
  @media screen and (max-width: ${screenMdUnder}) {
    font-size: 1.8rem;
  }
`;

export const ctaStyles = css`
  position: relative;
  display: inline-flex;
  align-content: center;
  align-items: center;
  gap: 0.4rem;
  max-width: 100%;
  min-width: 0;
  border-radius: ${corner};
  border: 0.1rem solid transparent;
  font-family: ${fontApp};
  text-decoration: none;
  text-shadow: none;
  text-transform: none;
  user-select: none;
  vertical-align: middle;
  box-shadow: none;
  appearance: none;

  &:hover,
  &:active {
    outline: none;
  }

  &:disabled {
    cursor: default;
    pointer-events: none;
    opacity: 1;
  }

  &:focus-visible {
    ${focusVisibleStyles};
  }

  img {
    display: block;
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
`;

export const ctaCommonStyles = css<CtaStyledProps>`
  ${ctaSizesFunc};
  ${ctaShapesFunc};
  ${ctaAlignFunc};
  ${({ $isStretch }) => ($isStretch ? isStretchStyles : '')};
  ${({ $isMobile }) => ($isMobile ? isMobileStyles : '')};
  ${({ $isMobile, $isStretch }) =>
    $isMobile && !$isStretch ? isMobileNotStretchStyles : ''};
`;

export const ctaStaticStyles = css<CtaStyledProps>`
  ${ctaCommonStyles};
  ${ctaColorsStaticFunc};
`;

export const ctaModifyStyles = css<CtaStyledProps>`
  ${ctaCommonStyles};
  ${ctaColorsFunc};
  ${({ $isActive }) => $isActive && isActiveStyles};
`;

export const isMobileLabelStyles = css`
  @media screen and (max-width: ${screenMdUnder}) {
    flex: none;
    font-weight: 500;
    font-size: 1rem;
    line-height: 1.2;
    text-transform: none;
  }
`;

export const hideLabelStyles = css`
  @media screen and (min-width: ${screenMdAbove}) {
    display: none;
  }
`;

export interface CtaLabelStyledProps {
  $isMobile?: CtaStyledProps['$isMobile'];
  $hideLabel?: boolean;
}

export const ctaLabelStyles = css`
  flex: 1;
  max-width: fit-content;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

// We need to put <CtaLabelProps> after styled to override default span props
export const CtaLabelStyled = styled('span')<CtaLabelStyledProps>`
  ${ctaLabelStyles};
  ${({ $isMobile }) => ($isMobile ? isMobileLabelStyles : '')};
  ${({ $hideLabel }) => ($hideLabel ? hideLabelStyles : '')};
`;

export interface CtaIconProps {
  $size: CtaStyledProps['$size'];
  $isMobile?: CtaStyledProps['$isMobile'];
  $align?: CtaStyledProps['$align'];
}

export const CtaIcon = styled(Icon)<CtaIconProps>`
  line-height: 1;
  ${iconSizesFunc};
  ${ctaIconAlignFunc};
  ${({ $isMobile }) => ($isMobile ? isMobileIconStyles : '')};
`;
