import { AppBrand } from 'commons/AppContainer/types';
import styled from 'commons/Goober';
import { slotRightBrandsFunc } from 'commons/share_app/components/hooks/useAds/elements/SlotRight/brands';
import {
  adsCommonStyles,
  adScreeningHiddenContentStyles,
  adScreeningHiddenStyles,
} from 'commons/share_app/components/hooks/useAds/styles';
import { navbarHeight } from 'commons/utils/variables';

import { GRID_SLOT_RIGHT } from './constants';

export interface SlotRightStyledProps {
  $brand: AppBrand;
}

export const SlotRightStyled = styled('div')<SlotRightStyledProps>`
  grid-area: ${GRID_SLOT_RIGHT};
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  margin-bottom: 0.8rem;
  margin-left: 0.8rem;
  flex-shrink: 0;
  ${slotRightBrandsFunc};

  ${adsCommonStyles};
  ${adScreeningHiddenStyles}
`;

export const SlotRightContentStyled = styled('div')`
  position: relative;
  isolation: isolate;
  width: 100%;
  min-width: 0;
  background: var(--ad-plug-bg);

  ${adScreeningHiddenContentStyles}
`;

export const SlotRightAdPlugStyled = styled('div')`
  position: absolute;
  top: 0.8rem;
  left: 0;
  z-index: -1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 250px;
`;

// px - reklama musi mieć stałe wymiary

export const SlotRightColumnStyled = styled('div')`
  position: sticky;
  top: ${navbarHeight};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: center;
  align-items: center;
  padding-top: 0.8rem;
  width: 100%;
`;

export const SlotRightColumnContentStyled = styled('div')`
  position: relative;
  width: 100%;
  min-width: 0;
  height: auto;
  min-height: 26.6rem;
  overflow-x: hidden;
  overflow-y: auto;
  scrollbar-width: thin;
`;
