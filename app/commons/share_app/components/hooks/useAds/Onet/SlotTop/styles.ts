import styled from 'commons/Goober';
import { slotTopSizesFunc } from 'commons/share_app/components/hooks/useAds/Onet/SlotTop/sizes';
import { adsCommonStyles } from 'commons/share_app/components/hooks/useAds/styles';
import { AdSize } from 'commons/share_app/components/hooks/useAds/types';
import { AD_SCREENING_CLASS } from 'commons/utils/classNames';
import { navbarHeight } from 'commons/utils/variables';

import { GRID_SLOT_TOP } from './constants';

export interface SlotTopStyledProps {
  $size?: AdSize;
}

export const SlotTopStyled = styled('div')<SlotTopStyledProps>`
  grid-area: ${GRID_SLOT_TOP};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: -0.8rem;
  padding: 0.8rem;
  width: 100%;

  ${slotTopSizesFunc};

  ${adsCommonStyles};

  .${AD_SCREENING_CLASS} & {
    margin-inline: auto;
    width: fit-content;
    pointer-events: none;
  }
`;

export const SlotTopContentStyled = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: var(--ad-plug-bg);

  .${AD_SCREENING_CLASS} & {
    background: transparent;
  }
`;

export const SlotTopDetailStyled = styled('div')`
  position: sticky;
  top: calc(${navbarHeight} + 0.8rem);
  width: 100%;
  overflow: hidden;

  div[data-prop-lazypercentage] {
    .${AD_SCREENING_CLASS} & {
      pointer-events: auto;
    }
  }
`;
