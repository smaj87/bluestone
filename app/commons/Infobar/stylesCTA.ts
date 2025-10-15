import { ctaColors } from 'commons/CallToAction/colors';
import { ctaSizes } from 'commons/CallToAction/sizes';
import { ctaLabelStyles, ctaStyles } from 'commons/CallToAction/styles';
import { css } from 'commons/Goober';

import {
  EMBEDDED_CTA_CLASS,
  EMBEDDED_CTA_LABEL_CLASS,
  EMBEDDED_CTA_LG_CLASS,
  EMBEDDED_CTA_LINK_CLASS,
  EMBEDDED_CTA_MD_CLASS,
  EMBEDDED_CTA_PRIMARY_CLASS,
  EMBEDDED_CTA_SM_CLASS,
  EMBEDDED_CTA_TERTIARY_CLASS,
} from './constants';

export const infobarEmbeddedCTAStyles = css`
  .${EMBEDDED_CTA_CLASS} {
    ${ctaStyles};
    color: inherit;
    cursor: pointer;

    &:disabled {
      color: var(--infobar-txt--disabled);
    }

    @media (hover: hover) {
      &:hover:not(:disabled) {
        text-shadow: 0 0 0.1rem currentColor;
      }
    }
  }

  .${EMBEDDED_CTA_SM_CLASS} {
    ${ctaSizes.sm};
    font-size: 1.3rem;
    line-height: 2rem;
  }

  .${EMBEDDED_CTA_MD_CLASS} {
    ${ctaSizes.md};
  }

  .${EMBEDDED_CTA_LG_CLASS} {
    ${ctaSizes.lg};
  }

  .${EMBEDDED_CTA_PRIMARY_CLASS} {
    ${ctaColors.primary};
  }

  .${EMBEDDED_CTA_TERTIARY_CLASS} {
    border-color: currentColor;
  }

  .${EMBEDDED_CTA_LINK_CLASS} {
    text-decoration: underline;
  }

  .${EMBEDDED_CTA_LABEL_CLASS} {
    ${ctaLabelStyles};
  }
`;
