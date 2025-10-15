import { ctaColors } from 'commons/CallToAction/colors';
import { ctaSizes } from 'commons/CallToAction/sizes';
import { ctaStyles } from 'commons/CallToAction/styles';
import styled from 'commons/Goober';
import {
  KEYBOARD_NAVIGATION_ELEMENT_CLASS,
  KEYBOARD_NAVIGATION_ELEMENT_FOCUS_CLASS,
} from 'commons/NavTree/constants';
import { LAYER_SKIP_TO_MAIN_CONTENT } from 'commons/utils/layers';
import { navbarHeight } from 'commons/utils/variables';

export const GoToMainContentStyled = styled('div')`
  position: absolute;
  top: 0;
  left: 0;
  z-index: ${LAYER_SKIP_TO_MAIN_CONTENT};
  height: 0;

  .${KEYBOARD_NAVIGATION_ELEMENT_CLASS} {
    transform: translate3d(0, -200%, 0);
  }

  .${KEYBOARD_NAVIGATION_ELEMENT_FOCUS_CLASS} {
    transform: translate3d(1.6rem, calc(${navbarHeight} / 2 - 50%), 0);
  }
`;

export const GoToMainContentLinkStyled = styled('a')`
  ${ctaStyles};
  ${ctaColors.primary};
  ${ctaSizes.md};
`;
