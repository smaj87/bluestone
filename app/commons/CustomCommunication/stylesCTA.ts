import { ctaColors } from 'commons/CallToAction/colors';
import { ctaSizes } from 'commons/CallToAction/sizes';
import { ctaLabelStyles, ctaStyles } from 'commons/CallToAction/styles';
import { css } from 'commons/Goober';
import { screenMdAbove } from 'commons/utils/breakpoints';

import {
  CC_CTA_EMBEDDED_CLASS,
  CC_CTA_LABEL_CLASS,
  CC_CTA_LG_CLASS,
  CC_CTA_LINK_CLASS,
  CC_CTA_MD_CLASS,
  CC_CTA_PRIMARY_CLASS,
  CC_CTA_SECONDARY_CLASS,
  CC_CTA_SM_CLASS,
  CC_CTA_TERTIARY_CLASS,
} from './constants';

export const ctaCustomCommunicationStyles = css`
  .${CC_CTA_EMBEDDED_CLASS} {
    ${ctaStyles};
    justify-content: center;
    width: 100%;
    cursor: pointer;

    @media screen and (min-width: ${screenMdAbove}) {
      width: auto;
    }
  }

  .${CC_CTA_SM_CLASS} {
    ${ctaSizes.sm}
  }

  .${CC_CTA_MD_CLASS} {
    ${ctaSizes.md}
  }

  .${CC_CTA_LG_CLASS} {
    ${ctaSizes.lg}
  }

  .${CC_CTA_PRIMARY_CLASS} {
    ${ctaColors.primary}
  }

  .${CC_CTA_SECONDARY_CLASS} {
    ${ctaColors.secondaryNeutral}
  }

  .${CC_CTA_TERTIARY_CLASS} {
    ${ctaColors.defaultNeutral}
  }

  .${CC_CTA_LINK_CLASS} {
    ${ctaColors.secondaryNeutral}
    text-decoration: underline;
    text-decoration-thickness: 0.1rem;

    @media (hover: hover) {
      &:hover:not(:disabled) {
        border-color: transparent;
        background: transparent;
        text-decoration-thickness: 0.2rem;
      }
    }
  }

  .${CC_CTA_LABEL_CLASS} {
    ${ctaLabelStyles};
  }
`;
