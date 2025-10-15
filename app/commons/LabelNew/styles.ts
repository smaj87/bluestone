import { ctaColors } from 'commons/CallToAction/colors';
import { CTA_DIMENSION_CSS } from 'commons/CallToAction/constants';
import { ctaSizes } from 'commons/CallToAction/sizes';
import { ctaStyles } from 'commons/CallToAction/styles';
import styled from 'commons/Goober';

export const NotificationBadgeStyledHideTime = 11000;
export const NotificationBadgeStyledFadeTime = 1000;

const NotificationFadeOutDelay =
  NotificationBadgeStyledHideTime - NotificationBadgeStyledFadeTime;

export const LabelNewStyled = styled('span')`
  ${ctaStyles};
  ${ctaColors.primary};
  ${ctaSizes.sm};
  flex-shrink: 0;
  border-radius: calc(${CTA_DIMENSION_CSS.SM}rem / 2);
  font-weight: 500;

  animation:
    fadeInNotification ${NotificationBadgeStyledFadeTime}ms ease 0s,
    fadeOutNotification ${NotificationBadgeStyledFadeTime}ms ease
      ${NotificationFadeOutDelay}ms;

  @keyframes fadeInNotification {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fadeOutNotification {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`;
