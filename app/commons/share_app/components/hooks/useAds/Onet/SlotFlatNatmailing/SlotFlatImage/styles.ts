import styled from 'commons/Goober';
import { screenMdAbove } from 'commons/utils/breakpoints';
import { corner } from 'commons/utils/variables';

import {
  SLOT_FLAT_IMAGE_SIZE_DESKTOP_CSS,
  SLOT_FLAT_IMAGE_SIZE_MOBILE_CSS,
} from './constants';

export const SlotFlatImageStyled = styled('figure')`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  width: fit-content;
  max-width: ${SLOT_FLAT_IMAGE_SIZE_MOBILE_CSS}rem;
  height: 100%;
  border-radius: ${corner};
  background: var(--ad-plug-bg);
  overflow: hidden;

  @media screen and (min-width: ${screenMdAbove}) {
    flex-shrink: 0;
    margin-left: initial;
    min-width: ${SLOT_FLAT_IMAGE_SIZE_DESKTOP_CSS}rem;
    max-width: calc(${SLOT_FLAT_IMAGE_SIZE_DESKTOP_CSS}rem * 1.91);
    height: ${SLOT_FLAT_IMAGE_SIZE_DESKTOP_CSS}rem;
  }

  img {
    display: block;
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
`;
