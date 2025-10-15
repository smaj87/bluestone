import { CTA_LABEL_CLASS } from 'commons/CallToAction/constants';
import { css } from 'commons/Goober';

import { SelfPromoProps } from './styles';
import { SelfPromoColor } from './types';

export const selfPromoColors: Record<SelfPromoColor, any> = {
  primary: css`
    border-color: var(--cta-primary-border);
    background: var(--cta-primary-bg);
    color: var(--cta-primary-txt);

    @media (hover: hover) {
      &:hover:not(:disabled) {
        border-color: var(--cta-primary-border--hover);
        background: var(--cta-primary-bg--hover);
        color: var(--cta-primary-txt--hover);
      }
    }

    .${CTA_LABEL_CLASS} {
      > span {
        background: var(--self-promo-counter-bg--primary);
        color: var(--self-promo-counter-txt--primary);
      }
    }
  `,
  secondary: css`
    border-color: var(--self-promo-border--secondary);
    background: var(--self-promo-bg--secondary);
    color: var(--self-promo-txt--secondary);

    @media (hover: hover) {
      &:hover:not(:disabled) {
        border-color: var(--self-promo-border--secondary--hover);
        background: var(--self-promo-bg--secondary--hover);
        color: var(--self-promo-txt--secondary--hover);
      }
    }

    .${CTA_LABEL_CLASS} {
      > span {
        background: var(--cta-primary-bg);
        color: var(--cta-primary-txt);
      }
    }
  `,
};

export const selfPromoColorsFunc = ({
  $color,
}: {
  $color?: SelfPromoProps['$color'];
}) => ($color ? selfPromoColors[$color] : selfPromoColors.primary);

export const selfPromoBadgeColors: Record<SelfPromoColor, any> = {
  primary: css`
    background: var(--self-promo-badge-bg--primary);
    color: var(--self-promo-badge-txt--primary);
  `,
  secondary: css`
    background: var(--cta-primary-bg);
    color: var(--cta-primary-txt);
  `,
};

export const selfPromoBadgeColorsFunc = ({
  $color,
}: {
  $color?: SelfPromoProps['$color'];
}) => ($color ? selfPromoBadgeColors[$color] : selfPromoBadgeColors.primary);
