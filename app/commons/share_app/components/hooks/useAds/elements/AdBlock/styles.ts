import styled, { css } from 'commons/Goober';
import { SPECIAL_TEXT_CLASS } from 'commons/share_app/components/hooks/useAds/elements/AdBlock/constants';
import {
  SLOT_RIGHT_LG,
  SLOT_RIGHT_WIDTH_CSS,
  SLOT_RIGHT_WIDTH_LG_CSS,
} from 'commons/share_app/components/hooks/useAds/Onet/SlotRight/constants';
import { corner, fontApp } from 'commons/utils/variables';

import { adBlockColorsFunc } from './colors';
import {
  adBlockDescriptionPlacementFunc,
  adBlockPlacementFunc,
} from './placement';
import { adBlockTopSizesFunc } from './sizes';
import { Color, Placement, Size } from './types';

export interface AdBlockStyledProps {
  $placement?: Placement;
  $color?: Color;
  $size?: Size;
}

export const adBlockStyles = css`
  position: absolute;
  z-index: 1;
  display: flex;
  justify-content: flex-start;
  width: 100%;
  font-family: ${fontApp};
  overflow: hidden;
`;

export const AdBlockTopStyled = styled('div')<AdBlockStyledProps>`
  ${adBlockStyles};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  align-content: stretch;
  align-items: stretch;
  max-width: 960px;
  height: 100%;

  ${adBlockTopSizesFunc}
`;

export const AdBlockRightStyled = styled('div')<AdBlockStyledProps>`
  ${adBlockStyles};
  top: 0;
  left: 0;
  align-items: flex-start;
  width: ${SLOT_RIGHT_WIDTH_CSS}px;
  height: 100%;

  @media screen and (min-width: ${SLOT_RIGHT_LG}px) {
    width: ${SLOT_RIGHT_WIDTH_LG_CSS}px;
  }
`;

export const AdBlockContentStyled = styled('div')<AdBlockStyledProps>`
  border-radius: ${corner};
  ${adBlockPlacementFunc}
  ${adBlockColorsFunc}
`;

export const AdBlockDescriptionStyled = styled('div')<AdBlockStyledProps>`
  ${adBlockDescriptionPlacementFunc}

  h3 {
    width: 100%;
    font-weight: 700;
    line-height: 1.2;
  }

  p {
    width: 100%;
    font-weight: 400;
    line-height: 1.2;

    &.${SPECIAL_TEXT_CLASS} {
      font-weight: 700;
    }

    &:not(:last-child) {
      margin-bottom: 0;
    }
  }

  a {
    color: inherit;
    text-decoration: underline;
    text-decoration-color: var(--ad-block-decoration);
    text-decoration-thickness: 4px;

    @media (hover: hover) {
      &:hover {
        text-decoration-color: var(--ad-block-decoration--hover);
      }
    }
  }
`;

export const AdBlockImageStyled = styled('figure')`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 29.6rem;

  img {
    display: block;
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
`;
