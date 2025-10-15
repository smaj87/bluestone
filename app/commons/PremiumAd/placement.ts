import { css } from 'commons/Goober';
import { corner } from 'commons/utils/variables';

import { PremiumAdStyledProps } from './styles';
import { PremiumAdPlacement } from './types';

export const premiumAdPlacement: Record<PremiumAdPlacement, any> = {
  navbar: css`
    top: -0.1rem;
    right: 100%;
    bottom: -0.1rem;
    transform: translate3d(0.3rem, 0, 0);
    border-radius: ${corner} 0 0 ${corner};
    outline: 0.1rem solid var(--context-menu-bg);
    outline-offset: -0.1rem;
  `,
  sidebar: css`
    top: 100%;
    left: 4.8rem;
    transform: scale(0);
    transform-origin: top left;
    border-radius: ${corner};
    outline: 0.1rem solid var(--sidebar-btn-bg--hover);
    outline-offset: -0.1rem;
  `,
};

export const premiumAdContentPlacement: Record<PremiumAdPlacement, any> = {
  navbar: css`
    border-radius: ${corner} 0 0 ${corner};
  `,
  sidebar: css`
    border-radius: ${corner};
  `,
};

export const premiumAdPlacementFunc = ({
  $placement,
}: {
  $placement?: PremiumAdStyledProps['$placement'];
}) => ($placement ? premiumAdPlacement[$placement] : '');

export const premiumAdContentPlacementFunc = ({
  $placement,
}: {
  $placement?: PremiumAdStyledProps['$placement'];
}) => ($placement ? premiumAdContentPlacement[$placement] : '');
