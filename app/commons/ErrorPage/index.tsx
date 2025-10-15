import {
  ComponentStateButton,
  ComponentStateIcon,
  ComponentStateImageStyled,
  ComponentStateStyled,
} from 'commons/ComponentState/styles';
import {
  ComponentStateColor,
  ComponentStateSize,
  ComponentStateStretch,
} from 'commons/ComponentState/types';
import { FC, memo, MouseEvent, ReactNode } from 'commons/utils/react';

export interface Props {
  color?: ComponentStateColor;
  children?: ReactNode;
  stretch?: ComponentStateStretch;
  label?: string;
  onClick?: (event: MouseEvent<HTMLElement>) => void;
  size?: ComponentStateSize;
  title: string;
}

const ErrorPage: FC<Props> = ({
  children,
  color = 'error',
  label,
  onClick,
  size = 'lg',
  stretch = 'auto',
  title,
}) => (
  <ComponentStateStyled $size={size} $stretch={stretch}>
    <ComponentStateImageStyled $size={size}>
      <ComponentStateIcon $color={color} $image="error" />
    </ComponentStateImageStyled>
    <h2>{title}</h2>
    {onClick ? <ComponentStateButton label={label} onClick={onClick} /> : null}
    {children}
  </ComponentStateStyled>
);

export default memo(ErrorPage);
