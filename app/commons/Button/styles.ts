import { CTA_LABEL_CLASS } from 'commons/CallToAction/constants';
import {
  ctaModifyStyles,
  CtaStyledProps,
  ctaStyles,
} from 'commons/CallToAction/styles';
import styled from 'commons/Goober';

import { CTA_SELECTED_CALENDAR_CLASS } from './constants';

export const ButtonStyled = styled('button')<CtaStyledProps>`
  ${ctaStyles};
  ${ctaModifyStyles};
  cursor: pointer;

  // TEMP - do usunięcia po zmianie podjeścia w toolbar submnue
  &.${CTA_SELECTED_CALENDAR_CLASS} {
    .${CTA_LABEL_CLASS} {
      margin-left: 2.4rem;
    }
  }
`;
