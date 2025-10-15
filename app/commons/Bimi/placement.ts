import { css } from 'commons/Goober';
import { screenMdAbove } from 'commons/utils/breakpoints';
import { animationStyle2x } from 'commons/utils/variables';

import {
  BIMI_PLACEMENTS,
  BIMI_SIZES,
  IS_ITEM_CHECKED_CLASS,
} from './constants';
import { BimiPlacement } from './types';

export const newsletterPlacementStyles = css`
  width: ${BIMI_SIZES.NEWSLETTER};
  height: ${BIMI_SIZES.NEWSLETTER};
  border: 0.1rem solid var(--shopping-avatar-border);
  background: var(--shopping-avatar-bg);
  font-weight: 500;
  font-size: 2rem;
  line-height: 1;
  color: var(--shopping-avatar-txt);
  text-transform: uppercase;
`;

export const newsletterPagePlacementStyles = css`
  width: ${BIMI_SIZES.NEWSLETTER_PAGE};
  height: ${BIMI_SIZES.NEWSLETTER_PAGE};
  border: 0.1rem solid var(--shopping-avatar-border);
  background: var(--shopping-avatar-bg);
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 1;
  color: var(--shopping-avatar-txt);
  text-transform: uppercase;
`;

export const readMailPlacementStyles = css`
  width: ${BIMI_SIZES.READ_MAIL};
  height: ${BIMI_SIZES.READ_MAIL};
  border: 0.1rem solid var(--bimi-border--readmail);
  background: var(--bimi-bg--readmail);
  font-weight: 500;
  font-size: 2rem;
  line-height: 1;
  color: var(--bimi-txt--readmail);
  text-transform: uppercase;

  @media screen and (min-width: ${screenMdAbove}) {
    width: ${BIMI_SIZES.READ_MAIL_MD};
    height: ${BIMI_SIZES.READ_MAIL_MD};
  }
`;

export const sellerPlacementStyles = css`
  width: ${BIMI_SIZES.SELLER};
  height: ${BIMI_SIZES.SELLER};
  border: none;
  background: var(--shopping-avatar-bg);
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 1;
  color: var(--shopping-avatar-txt);
  text-transform: uppercase;
`;

export const defaultSellerPlacementStyles = css`
  width: auto;
  height: auto;
  border: none;
  max-width: 100%;
  max-height: 100%;
  background: transparent;
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 1;
  color: var(--shopping-avatar-txt);
  text-transform: uppercase;
  border-radius: 0;
`;

export const newMailContactPlacementStyles = css`
  width: ${BIMI_SIZES.NEW_MAIL};
  height: ${BIMI_SIZES.NEW_MAIL};
  border: 0.1rem solid var(--bimi-border--newmail);
  background: var(--bimi-bg--newmail);
  font-weight: 500;
  font-size: 2rem;
  line-height: 1;
  color: var(--bimi-txt--newmail);
  text-transform: uppercase;
  opacity: 1;
  transform: rotate(0);
  transition:
    opacity ${animationStyle2x},
    transform ${animationStyle2x};

  .${IS_ITEM_CHECKED_CLASS} & {
    transform: rotate(180deg);
    opacity: 0;
  }
`;

export const placementTypes: Record<BimiPlacement, any> = {
  [BIMI_PLACEMENTS.DEFAULT]: css``,
  [BIMI_PLACEMENTS.NEWSLETTER]: css`
    ${newsletterPlacementStyles}
  `,
  [BIMI_PLACEMENTS.NEWSLETTER_PAGE]: css`
    ${newsletterPagePlacementStyles}
  `,
  [BIMI_PLACEMENTS.READ_MAIL]: css`
    ${readMailPlacementStyles}
  `,
  [BIMI_PLACEMENTS.SELLER_USER]: css`
    ${sellerPlacementStyles}
  `,
  [BIMI_PLACEMENTS.SELLER_DEFAULT]: css`
    ${defaultSellerPlacementStyles}
  `,
  [BIMI_PLACEMENTS.NEW_MAIL_CONTACT]: css`
    ${newMailContactPlacementStyles}
  `,
};
