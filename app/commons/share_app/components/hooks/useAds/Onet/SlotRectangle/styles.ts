import styled from 'commons/Goober';
import { SLOT_TOP_LG_HEIGHT_CSS } from 'commons/share_app/components/hooks/useAds/Onet/SlotTop/constants';
import { SlotTopStyledProps } from 'commons/share_app/components/hooks/useAds/Onet/SlotTop/styles';
import { adsCommonStyles } from 'commons/share_app/components/hooks/useAds/styles';
import { navbarHeight } from 'commons/utils/variables';

import { GRID_SLOT_RECTANGLE } from './constants';

export const SlotRectangleStyled = styled('div')<SlotTopStyledProps>`
  grid-area: ${GRID_SLOT_RECTANGLE};
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: stretch;
  align-content: center;
  padding: 0.8rem;
  width: 100%;
  min-height: ${SLOT_TOP_LG_HEIGHT_CSS};

  ${adsCommonStyles}
`;

export const SlotRectangleContentStyled = styled('div')`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  background: var(--ad-plug-bg);
`;

export const SlotRectangleDetailStyled = styled('div')`
  position: sticky;
  top: calc(${navbarHeight} + 0.8rem);
  width: 100%;
  overflow: hidden;
`;
