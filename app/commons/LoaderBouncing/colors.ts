import { secondaryNeutralStyles } from 'commons/CallToAction/colors';
import { css } from 'commons/Goober';

import { BouncingDotStyledProps } from './styles';
import { BouncingDotColor } from './types';

const basicColor = css`
  background: var(--loader-dot-bg);
`;

const socialStyles = css`
  background: var(--social);
`;

const eprescriptionStyles = css`
  background: var(--eprescriptions);
`;

const offersStyles = css`
  background: var(--offers);
`;

const notificationStyles = css`
  background: var(--notifications);
`;

const epaymentsStyles = css`
  background: var(--epayments);
`;

const errorStyles = css`
  background: var(--state-error);
`;

const primaryStyles = css`
  background: var(--cta-primary-txt);
`;

const defaultStyles = css`
  background: var(--cta-default-txt);
`;

const defaultNeutralStyles = css`
  background: var(--cta-default-neutral-txt);
`;

const secondaryStyles = css`
  background: var(--cta-secondary-txt);
`;

const toolbarSubmenuStyles = css`
  background: var(--cta-toolbar-submenu-txt);
`;

const infobarStyles = css`
  background: var(--cta-infobar-txt);
`;

const navbarStyles = css`
  background: var(--cta-navbar-txt);
`;

const fieldStyles = css`
  background: var(--cta-field-txt);
`;

const sidebarItemStyles = css`
  background: var(--cta-sidebar-txt);
`;

const onetPremiumStyles = css`
  background: var(--cta-onet-premium-txt);
`;

export const bouncingDotColors: Record<BouncingDotColor, any> = {
  basic: css`
    ${basicColor};
  `,
  social: css`
    ${socialStyles};
  `,
  notification: css`
    ${notificationStyles};
  `,
  offers: css`
    ${offersStyles};
  `,
  eprescriptions: css`
    ${eprescriptionStyles};
  `,
  epayments: css`
    ${epaymentsStyles};
  `,
  error: css`
    ${errorStyles};
  `,
  primary: css`
    ${primaryStyles};
  `,
  secondary: css`
    ${secondaryStyles};
  `,
  default: css`
    ${defaultStyles};
  `,
  toolbarSubmenu: css`
    ${toolbarSubmenuStyles};
  `,
  infobar: css`
    ${infobarStyles};
  `,
  navbar: css`
    ${navbarStyles};
  `,
  field: css`
    ${fieldStyles};
  `,
  sidebar: css`
    ${sidebarItemStyles};
  `,
  defaultNeutral: css`
    ${defaultNeutralStyles};
  `,
  secondaryNeutral: css`
    ${secondaryNeutralStyles};
  `,
  onetPremium: css`
    ${onetPremiumStyles};
  `,
};

export const bouncingDotColorsFunc = ({
  $color,
}: {
  $color?: BouncingDotStyledProps['$color'];
}) => ($color ? bouncingDotColors[$color] : bouncingDotColors.basic);
