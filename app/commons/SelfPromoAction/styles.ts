import Badge from 'commons/Badge';
import Button from 'commons/Button';
import {
  CTA_DIMENSION_CSS,
  CTA_LABEL_CLASS,
} from 'commons/CallToAction/constants';
import { ctaSizes } from 'commons/CallToAction/sizes';
import { ctaStyles } from 'commons/CallToAction/styles';
import styled from 'commons/Goober';
import {
  selfPromoBadgeColorsFunc,
  selfPromoColorsFunc,
} from 'commons/SelfPromoAction/colors';

import { SelfPromoColor } from './types';

export interface SelfPromoProps {
  $color: SelfPromoColor;
}

export const SelfPromoActionButton = styled(Button)<SelfPromoProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 0.8rem;
  padding: 0.4rem 0.8rem;
  height: 3rem;
  border-radius: 1.5rem;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.2rem;
  ${selfPromoColorsFunc};

  .${CTA_LABEL_CLASS} {
    > span {
      ${ctaStyles};
      ${ctaSizes.sm};
      justify-content: center;
      margin-right: 0.4rem;
      padding: 0.2rem;
      border-radius: 50%;
      width: ${CTA_DIMENSION_CSS.SM}rem;
      font-weight: 700;
    }
  }
`;

export const BadgeSelfPromoAction = styled(Badge)<SelfPromoProps>`
  border-radius: 1rem;
  font-weight: 700;
  ${selfPromoBadgeColorsFunc}
`;
