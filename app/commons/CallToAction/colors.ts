import { css } from 'commons/Goober';

import { CtaStyledProps } from './styles';
import { CtaColor } from './types';

export const primaryStyles = css`
  border-color: var(--cta-primary-border);
  background: var(--cta-primary-bg);
  color: var(--cta-primary-txt);
`;

export const primaryHoverColors = css`
  border-color: var(--cta-primary-border--hover);
  background: var(--cta-primary-bg--hover);
  color: var(--cta-primary-txt--hover);
`;

export const primaryHoverStyles = css`
  &:hover:not(:disabled) {
    ${primaryHoverColors};
  }
`;

export const primaryDisabledStyles = css`
  border-color: var(--cta-primary-border--disabled);
  background: var(--cta-primary-bg--disabled);
  color: var(--cta-primary-txt--disabled);
`;

export const defaultStyles = css`
  border-color: var(--cta-default-border);
  background: var(--cta-default-bg);
  color: var(--cta-default-txt);
`;

export const defaultHoverColors = css`
  border-color: var(--cta-default-border--hover);
  background: var(--cta-default-bg--hover);
  color: var(--cta-default-txt--hover);
`;

export const defaultHoverStyles = css`
  &:hover:not(:disabled) {
    ${defaultHoverColors};
  }
`;

export const defaultDisabledStyles = css`
  border-color: var(--cta-default-border--disabled);
  background: var(--cta-default-bg--disabled);
  color: var(--cta-default-txt--disabled);
`;

export const defaultNeutralStyles = css`
  border-color: var(--cta-default-neutral-border);
  background: var(--cta-default-neutral-bg);
  color: var(--cta-default-neutral-txt);
`;

export const defaultNeutralHoverColors = css`
  border-color: var(--cta-default-neutral-border--hover);
  background: var(--cta-default-neutral-bg--hover);
  color: var(--cta-default-neutral-txt--hover);
`;

export const defaultNeutralHoverStyles = css`
  &:hover:not(:disabled) {
    ${defaultNeutralHoverColors};
  }
`;

export const defaultNeutralDisabledStyles = css`
  border-color: var(--cta-default-neutral-border--disabled);
  background: var(--cta-default-neutral-bg--disabled);
  color: var(--cta-default-neutral-txt--disabled);
`;

export const secondaryStyles = css`
  border-color: var(--cta-secondary-border);
  background: var(--cta-secondary-bg);
  color: var(--cta-secondary-txt);
`;

export const secondaryHoverColors = css`
  border-color: var(--cta-secondary-border--hover);
  background: var(--cta-secondary-bg--hover);
  color: var(--cta-secondary-txt--hover);
`;

export const secondaryHoverStyles = css`
  &:hover:not(:disabled) {
    ${secondaryHoverColors};
  }
`;

export const secondaryDisabledStyles = css`
  border-color: var(--cta-secondary-border--disabled);
  background: var(--cta-secondary-bg--disabled);
  color: var(--cta-secondary-txt--disabled);
`;

export const secondaryActiveStyles = css<{ isDisabled?: boolean }>`
  border-color: var(--cta-secondary-border--active);
  background: var(--cta-secondary-bg--active);
  color: var(--cta-secondary-txt--active);

  @media (hover: hover) {
    ${({ isDisabled }) => !isDisabled && secondaryHoverStyles};
  }
`;

export const secondaryNeutralStyles = css`
  border-color: var(--cta-secondary-neutral-border);
  background: var(--cta-secondary-neutral-bg);
  color: var(--cta-secondary-neutral-txt);
`;

export const secondaryNeutralHoverColors = css`
  border-color: var(--cta-secondary-neutral-border--hover);
  background: var(--cta-secondary-neutral-bg--hover);
  color: var(--cta-secondary-neutral-txt--hover);
`;

export const secondaryNeutralHoverStyles = css`
  &:hover:not(:disabled) {
    ${secondaryNeutralHoverColors};
  }
`;

export const secondaryNeutralDisabledStyles = css`
  border-color: var(--cta-secondary-neutral-border--disabled);
  background: var(--cta-secondary-neutral-bg--disabled);
  color: var(--cta-secondary-neutral-txt--disabled);
`;

export const secondaryNeutralActiveStyles = css<{ isDisabled?: boolean }>`
  border-color: var(--cta-secondary-neutral-border--active);
  background: var(--cta-secondary-neutral-bg--active);
  color: var(--cta-secondary-neutral-txt--active);

  @media (hover: hover) {
    ${({ isDisabled }) => !isDisabled && secondaryNeutralHoverStyles};
  }
`;

export const toolbarSubmenuStyles = css`
  border-color: var(--cta-toolbar-submenu-border);
  background: var(--cta-toolbar-submenu-bg);
  color: var(--cta-toolbar-submenu-txt);
`;

export const toolbarSubmenuHoverColors = css`
  border-color: var(--cta-toolbar-submenu-border--hover);
  background: var(--cta-toolbar-submenu-bg--hover);
  color: var(--cta-toolbar-submenu-txt--hover);
`;

export const toolbarSubmenuHoverStyles = css`
  &:hover:not(:disabled) {
    ${toolbarSubmenuHoverColors};
  }
`;

export const toolbarSubmenuDisabledStyles = css`
  border-color: var(--cta-toolbar-submenu-border--disabled);
  background: var(--cta-toolbar-submenu-bg--disabled);
  color: var(--cta-toolbar-submenu-txt--disabled);
`;

export const toolbarSubmenuActiveStyles = css<{ isDisabled?: boolean }>`
  border-color: var(--cta-toolbar-submenu-border--active);
  background: var(--cta-toolbar-submenu-bg--active);
  color: var(--cta-toolbar-submenu-txt--active);

  @media (hover: hover) {
    ${({ isDisabled }) => !isDisabled && toolbarSubmenuHoverStyles};
  }
`;

export const infobarStyles = css`
  border-color: var(--cta-infobar-border);
  background: var(--cta-infobar-bg);
  color: var(--cta-infobar-txt);
`;

export const infobarHoverColors = css`
  border-color: var(--cta-infobar-border--hover);
  background: var(--cta-infobar-bg--hover);
  color: var(--cta-infobar-txt--hover);
`;

export const infobarHoverStyles = css`
  &:hover:not(:disabled) {
    ${infobarHoverColors};
  }
`;

export const infobarDisabledStyles = css`
  border-color: var(--cta-infobar-border--disabled);
  background: var(--cta-infobar-bg--disabled);
  color: var(--cta-infobar-txt--disabled);
`;

export const infobarActiveStyles = css<{ isDisabled?: boolean }>`
  border-color: var(--cta-infobar-border--active);
  background: var(--cta-infobar-bg--active);
  color: var(--cta-infobar-txt--active);

  @media (hover: hover) {
    ${({ isDisabled }) => !isDisabled && infobarHoverStyles};
  }
`;

export const navbarStyles = css`
  border-color: var(--cta-navbar-border);
  background: var(--cta-navbar-bg);
  color: var(--cta-navbar-txt);
`;

export const navbarHoverColors = css`
  border-color: var(--cta-navbar-border--hover);
  background: var(--cta-navbar-bg--hover);
  color: var(--cta-navbar-txt--hover);
`;

export const navbarHoverStyles = css`
  &:hover:not(:disabled) {
    ${navbarHoverColors};
  }
`;

export const navbarDisabledStyles = css`
  border-color: var(--cta-navbar-border--disabled);
  background: var(--cta-navbar-bg--disabled);
  color: var(--cta-navbar-txt--disabled);
`;

export const navbarActiveStyles = css<{ isDisabled?: boolean }>`
  border-color: var(--cta-navbar-border--active);
  background: var(--cta-navbar-bg--active);
  color: var(--cta-navbar-txt--active);

  @media (hover: hover) {
    ${({ isDisabled }) => !isDisabled && navbarHoverStyles};
  }
`;

export const errorStyles = css`
  border-color: var(--cta-error-border);
  background: var(--cta-error-bg);
  color: var(--cta-error-txt);
`;

export const errorHoverColors = css`
  border-color: var(--cta-error-border--hover);
  background: var(--cta-error-bg--hover);
  color: var(--cta-error-txt--hover);
`;

export const errorHoverStyles = css`
  &:hover:not(:disabled) {
    ${errorHoverColors};
  }
`;

export const errorDisabledStyles = css`
  border-color: var(--cta-error-border--disabled);
  background: var(--cta-error-bg--disabled);
  color: var(--cta-error-txt--disabled);
`;

export const errorActiveStyles = css<{ isDisabled?: boolean }>`
  border-color: var(--cta-error-border--active);
  background: var(--cta-error-bg--active);
  color: var(--cta-error-txt--active);

  @media (hover: hover) {
    ${({ isDisabled }) => !isDisabled && errorHoverStyles};
  }
`;

export const fieldStyles = css`
  border-color: var(--cta-field-border);
  background: var(--cta-field-bg);
  color: var(--cta-field-txt);
`;

export const fieldHoverColors = css`
  border-color: var(--cta-field-border--hover);
  background: var(--cta-field-bg--hover);
  color: var(--cta-field-txt--hover);
`;

export const fieldHoverStyles = css`
  &:hover:not(:disabled) {
    ${fieldHoverColors};
  }
`;

export const fieldDisabledStyles = css`
  border-color: var(--cta-field-border--disabled);
  background: var(--cta-field-bg--disabled);
  color: var(--cta-field-txt--disabled);
`;

export const fieldActiveStyles = css<{ isDisabled?: boolean }>`
  border-color: var(--cta-field-border--active);
  background: var(--cta-field-bg--active);
  color: var(--cta-field-txt--active);

  @media (hover: hover) {
    ${({ isDisabled }) => !isDisabled && fieldHoverStyles};
  }
`;

export const sidebarItemStyles = css`
  border-color: var(--cta-sidebar-border);
  background: var(--cta-sidebar-bg);
  color: var(--cta-sidebar-txt);
`;

export const sidebarItemHoverColors = css`
  border-color: var(--cta-sidebar-border--hover);
  background: var(--cta-sidebar-bg--hover);
  color: var(--cta-sidebar-txt--hover);
`;

export const sidebarItemHoverStyles = css`
  &:hover:not(:disabled) {
    ${sidebarItemHoverColors};
  }
`;

export const sidebarItemDisabledStyles = css`
  border-color: var(--cta-sidebar-border--disabled);
  background: var(--cta-sidebar-bg--disabled);
  color: var(--cta-sidebar-txt--disabled);
`;

export const sidebarItemActiveStyles = css<{ isDisabled?: boolean }>`
  border-color: var(--cta-sidebar-border--active);
  background: var(--cta-sidebar-bg--active);
  color: var(--cta-sidebar-txt--active);

  @media (hover: hover) {
    ${({ isDisabled }) => !isDisabled && sidebarItemHoverStyles};
  }
`;

export const onetPremiumStyles = css`
  border-color: var(--cta-onet-premium-border);
  background: var(--cta-onet-premium-bg);
  color: var(--cta-onet-premium-txt);
`;

export const onetPremiumHoverColors = css`
  border-color: var(--cta-onet-premium-border--hover);
  background: var(--cta-onet-premium-bg--hover);
  color: var(--cta-onet-premium-txt--hover);
`;

export const onetPremiumHoverStyles = css`
  &:hover:not(:disabled) {
    ${onetPremiumHoverColors};
  }
`;

export const onetPremiumDisabledStyles = css`
  border-color: var(--cta-onet-premium-border--disabled);
  background: var(--cta-onet-premium-bg--disabled);
  color: var(--cta-onet-premium-txt--disabled);
`;

export const ctaColorsStatic: Record<CtaColor, any> = {
  primary: css<{ $isDisabled?: boolean }>`
    ${primaryStyles};
    ${({ $isDisabled }) => $isDisabled && primaryDisabledStyles};

    &:disabled {
      ${primaryDisabledStyles};
    }
  `,
  secondary: css<{ $isDisabled?: boolean }>`
    ${secondaryStyles};
    ${({ $isDisabled }) => $isDisabled && secondaryDisabledStyles};

    &:disabled {
      ${secondaryDisabledStyles};
    }
  `,
  default: css<{ $isDisabled?: boolean }>`
    ${defaultStyles};
    ${({ $isDisabled }) => $isDisabled && defaultDisabledStyles};

    &:disabled {
      ${defaultDisabledStyles};
    }
  `,
  toolbarSubmenu: css<{ $isDisabled?: boolean }>`
    ${toolbarSubmenuStyles};
    ${({ $isDisabled }) => $isDisabled && toolbarSubmenuDisabledStyles};

    &:disabled {
      ${toolbarSubmenuDisabledStyles};
    }
  `,
  infobar: css<{ $isDisabled?: boolean }>`
    ${infobarStyles};
    ${({ $isDisabled }) => $isDisabled && infobarDisabledStyles};

    &:disabled {
      ${infobarDisabledStyles};
    }
  `,
  navbar: css<{ $isDisabled?: boolean }>`
    ${navbarStyles};
    ${({ $isDisabled }) => $isDisabled && navbarDisabledStyles};

    &:disabled {
      ${navbarDisabledStyles};
    }
  `,
  error: css<{ $isDisabled?: boolean }>`
    ${errorStyles};
    ${({ $isDisabled }) => $isDisabled && errorDisabledStyles};

    &:disabled {
      ${errorDisabledStyles};
    }
  `,
  field: css<{ $isDisabled?: boolean }>`
    ${fieldStyles};
    ${({ $isDisabled }) => $isDisabled && fieldDisabledStyles};

    &:disabled {
      ${fieldDisabledStyles};
    }
  `,
  sidebar: css<{ $isDisabled?: boolean }>`
    ${sidebarItemStyles};
    ${({ $isDisabled }) => $isDisabled && sidebarItemDisabledStyles};

    &:disabled {
      ${sidebarItemDisabledStyles};
    }
  `,
  defaultNeutral: css<{ $isDisabled?: boolean }>`
    ${defaultNeutralStyles};
    ${({ $isDisabled }) => $isDisabled && defaultNeutralDisabledStyles};

    &:disabled {
      ${defaultNeutralDisabledStyles};
    }
  `,
  secondaryNeutral: css<{ $isDisabled?: boolean }>`
    ${secondaryNeutralStyles};
    ${({ $isDisabled }) => $isDisabled && secondaryNeutralDisabledStyles};

    &:disabled {
      ${secondaryNeutralDisabledStyles};
    }
  `,
  onetPremium: css<{ $isDisabled?: boolean }>`
    ${onetPremiumStyles};
    ${({ $isDisabled }) => $isDisabled && onetPremiumDisabledStyles};

    &:disabled {
      ${onetPremiumDisabledStyles};
    }
  `,
};

export const ctaColorsStaticFunc = ({
  $color,
}: {
  $color?: CtaStyledProps['$color'];
}) => ($color ? ctaColorsStatic[$color] : '');

export const ctaColors: Record<CtaColor, any> = {
  primary: css<{ isDisabled?: boolean }>`
    ${primaryStyles};
    ${({ isDisabled }) => isDisabled && primaryDisabledStyles};

    @media (hover: hover) {
      ${({ isDisabled }) => !isDisabled && primaryHoverStyles};
    }

    &:disabled {
      ${primaryDisabledStyles};
    }
  `,
  secondary: css<{ isDisabled?: boolean; $isActive?: boolean }>`
    ${secondaryStyles};
    ${({ isDisabled }) => isDisabled && secondaryDisabledStyles};
    ${({ $isActive }) => $isActive && secondaryActiveStyles};

    @media (hover: hover) {
      ${({ isDisabled }) => !isDisabled && secondaryHoverStyles};
    }

    &:disabled {
      ${secondaryDisabledStyles};
    }
  `,
  default: css<{ isDisabled?: boolean }>`
    ${defaultStyles};
    ${({ isDisabled }) => isDisabled && defaultDisabledStyles};

    @media (hover: hover) {
      ${({ isDisabled }) => !isDisabled && defaultHoverStyles};
    }

    &:disabled {
      ${defaultDisabledStyles};
    }
  `,
  toolbarSubmenu: css<{ isDisabled?: boolean; $isActive?: boolean }>`
    ${toolbarSubmenuStyles};
    ${({ isDisabled }) => isDisabled && toolbarSubmenuDisabledStyles};
    ${({ $isActive }) => $isActive && toolbarSubmenuActiveStyles};

    @media (hover: hover) {
      ${({ isDisabled }) => !isDisabled && toolbarSubmenuHoverStyles};
    }

    &:disabled {
      ${toolbarSubmenuDisabledStyles};
    }
  `,
  infobar: css<{ isDisabled?: boolean; $isActive?: boolean }>`
    ${infobarStyles};
    ${({ isDisabled }) => isDisabled && infobarDisabledStyles};
    ${({ $isActive }) => $isActive && infobarActiveStyles};

    @media (hover: hover) {
      ${({ isDisabled }) => !isDisabled && infobarHoverStyles};
    }

    &:disabled {
      ${infobarDisabledStyles};
    }
  `,
  navbar: css<{ isDisabled?: boolean; $isActive?: boolean }>`
    ${navbarStyles};
    ${({ isDisabled }) => isDisabled && navbarDisabledStyles};
    ${({ $isActive }) => $isActive && navbarActiveStyles};

    @media (hover: hover) {
      ${({ isDisabled }) => !isDisabled && navbarHoverStyles};
    }

    &:disabled {
      ${navbarDisabledStyles};
    }
  `,
  error: css<{ isDisabled?: boolean; $isActive?: boolean }>`
    ${errorStyles};
    ${({ isDisabled }) => isDisabled && errorDisabledStyles};
    ${({ $isActive }) => $isActive && errorActiveStyles};

    @media (hover: hover) {
      ${({ isDisabled }) => !isDisabled && errorHoverStyles};
    }

    &:disabled {
      ${errorDisabledStyles};
    }
  `,
  field: css<{ isDisabled?: boolean; $isActive?: boolean }>`
    ${fieldStyles};
    ${({ isDisabled }) => isDisabled && fieldDisabledStyles};
    ${({ $isActive }) => $isActive && fieldActiveStyles};

    @media (hover: hover) {
      ${({ isDisabled }) => !isDisabled && fieldHoverStyles};
    }

    &:disabled {
      ${fieldDisabledStyles};
    }
  `,
  sidebar: css<{ isDisabled?: boolean; $isActive?: boolean }>`
    ${sidebarItemStyles};
    ${({ isDisabled }) => isDisabled && sidebarItemDisabledStyles};
    ${({ $isActive }) => $isActive && sidebarItemActiveStyles};

    @media (hover: hover) {
      ${({ isDisabled }) => !isDisabled && sidebarItemHoverStyles};
    }

    &:disabled {
      ${sidebarItemDisabledStyles};
    }
  `,
  defaultNeutral: css<{ isDisabled?: boolean }>`
    ${defaultNeutralStyles};
    ${({ isDisabled }) => isDisabled && defaultNeutralDisabledStyles};

    @media (hover: hover) {
      ${({ isDisabled }) => !isDisabled && defaultNeutralHoverStyles};
    }

    &:disabled {
      ${defaultNeutralDisabledStyles};
    }
  `,
  secondaryNeutral: css<{ isDisabled?: boolean; $isActive?: boolean }>`
    ${secondaryNeutralStyles};
    ${({ isDisabled }) => isDisabled && secondaryNeutralDisabledStyles};
    ${({ $isActive }) => $isActive && secondaryNeutralActiveStyles};

    @media (hover: hover) {
      ${({ isDisabled }) => !isDisabled && secondaryNeutralHoverStyles};
    }

    &:disabled {
      ${secondaryNeutralDisabledStyles};
    }
  `,
  onetPremium: css<{ isDisabled?: boolean; $isActive?: boolean }>`
    ${onetPremiumStyles};
    ${({ isDisabled }) => isDisabled && onetPremiumDisabledStyles};

    @media (hover: hover) {
      ${({ isDisabled }) => !isDisabled && onetPremiumHoverStyles};
    }

    &:disabled {
      ${onetPremiumDisabledStyles};
    }
  `,
};

export const ctaColorsFunc = ({
  $color,
}: {
  $color?: CtaStyledProps['$color'];
}) => ($color ? ctaColors[$color] : '');
