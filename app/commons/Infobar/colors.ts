import {
  infobarDisabledStyles,
  infobarHoverStyles,
  infobarStyles,
} from 'commons/CallToAction/colors';
import { css } from 'commons/Goober';

import { InfobarType } from './types';

export const infoStateStyles = css`
  background: var(--infobar-bg);
  color: var(--infobar-txt);
`;
export const warnStateStyles = css`
  background: var(--state-warning);
  color: var(--state-warning-txt);
`;
export const errorStateStyles = css`
  background: var(--state-error);
  color: var(--state-error-txt);
`;
export const successStateStyles = css`
  background: var(--state-success);
  color: var(--state-success-txt);
`;
export const promo1StateStyles = css`
  background: var(--state-promo-1);
  color: var(--state-promo-1-txt);
`;

export const stateTypes: Record<InfobarType, any> = {
  info: css`
    ${infoStateStyles};
  `,
  warn: css`
    ${warnStateStyles};
  `,
  error: css`
    ${errorStateStyles};
  `,
  success: css`
    ${successStateStyles};
  `,
  promo1: css`
    ${promo1StateStyles};
  `,
};

export const ctaWarnStateStyles = css`
  ${warnStateStyles};

  @media (hover: hover) {
    &:hover {
      background: var(--state-warning--hover);
    }
  }
`;

export const ctaErrorStateStyles = css`
  ${errorStateStyles};

  @media (hover: hover) {
    &:hover {
      background: var(--state-error--hover);
    }
  }
`;

export const ctaSuccessStateStyles = css`
  ${successStateStyles};

  @media (hover: hover) {
    &:hover {
      background: var(--state-success--hover);
    }
  }
`;

export const ctaPromo1StateStyles = css`
  ${promo1StateStyles};

  @media (hover: hover) {
    &:hover {
      background: var(--state-promo-1--hover);
    }
  }
`;

export const ctaStateTypes: Record<Partial<InfobarType>, any> = {
  info: css<{ isDisabled?: boolean }>`
    ${infobarStyles};
    ${({ isDisabled }) => isDisabled && infobarDisabledStyles};

    @media (hover: hover) {
      ${({ isDisabled }) => !isDisabled && infobarHoverStyles};
    }

    &:disabled {
      ${infobarDisabledStyles};
    }
  `,
  warn: css<{ isDisabled?: boolean }>`
    ${ctaWarnStateStyles};
  `,
  error: css<{ isDisabled?: boolean }>`
    ${ctaErrorStateStyles};
  `,
  success: css<{ isDisabled?: boolean }>`
    ${ctaSuccessStateStyles};
  `,
  promo1: css<{ isDisabled?: boolean }>`
    ${ctaPromo1StateStyles};
  `,
};
