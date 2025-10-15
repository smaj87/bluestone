import {
  ComponentStateIcon,
  ComponentStateImageStyled,
  ComponentStateStyled,
} from 'commons/ComponentState/styles';
import {
  ComponentStateColor,
  ComponentStateSize,
  ComponentStateStretch,
} from 'commons/ComponentState/types';
import { IconImage } from 'commons/Icon/iconImage';
import { FC, memo, ReactNode } from 'commons/utils/react';

export interface Props {
  children?: ReactNode;
  color?: ComponentStateColor;
  description?: string;
  stretch?: ComponentStateStretch;
  icon?: IconImage;
  size?: ComponentStateSize;
  title: string;
}

const EmptyPage: FC<Props> = ({
  children,
  color = 'default',
  description,
  icon,
  size = 'lg',
  stretch = 'auto',
  title,
}) => (
  <ComponentStateStyled $size={size} $stretch={stretch}>
    <ComponentStateImageStyled $size={size} aria-hidden>
      {!!icon && (
        <ComponentStateIcon $color={color} $image={icon} aria-hidden />
      )}
    </ComponentStateImageStyled>
    <h2>{title}</h2>
    {description ? <p>{description}</p> : null}
    {children}
  </ComponentStateStyled>
);

export default memo(EmptyPage);
