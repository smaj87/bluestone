import { FC, memo } from 'commons/utils/react';

import { THEME_PREVIEW_CLASS } from './constants';
import {
  ThemeButtonStyled,
  ThemeLabelStyled,
  ThemePreviewStyled,
} from './styles';

export interface ThemeButtonProps {
  ariaLabel?: string;
  color?: string;
  image?: string;
  label?: string;
  isActive?: boolean;
  onClick?: () => void;
}

const ThemeButton: FC<ThemeButtonProps> = ({
  ariaLabel,
  color,
  image,
  isActive,
  label,
  onClick,
}) => (
  <ThemeButtonStyled
    aria-label={ariaLabel}
    disabled={isActive}
    onClick={onClick}
    type="button"
  >
    <ThemePreviewStyled
      $color={color}
      $isActive={isActive}
      className={THEME_PREVIEW_CLASS}
    >
      {image ? <img alt="" src={image} /> : undefined}
    </ThemePreviewStyled>
    {label ? <ThemeLabelStyled>{label}</ThemeLabelStyled> : undefined}
  </ThemeButtonStyled>
);

export default memo(ThemeButton);
