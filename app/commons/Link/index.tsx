import {
  CTA_ICON_CLASS,
  CTA_LABEL_CLASS,
} from 'commons/CallToAction/constants';
import {
  CtaIcon,
  CtaLabelStyled,
  CtaStyledProps,
} from 'commons/CallToAction/styles';
import { CtaColor, CtaShape, CtaSize } from 'commons/CallToAction/types';
import { IconImage } from 'commons/Icon/iconImage';
import { FC, memo, ReactNode } from 'commons/utils/react';

import { LinkStyled } from './styles';

export interface LinkProps extends CtaStyledProps {
  className?: string;
  params?: unknown;
  onClick?: () => void;
  id?: string;
  download?: boolean | string;
  href?: string;
  icon?: IconImage;
  image?: string;
  label?: string;
  title?: string;
  isDisabled?: boolean;
  color?: CtaColor;
  size?: CtaSize;
  shape?: CtaShape;
  isMobile?: boolean;
  $isActive?: boolean;
  children?: ReactNode;
  hideLabel?: boolean;
  img?: string;
  target?: string;
  cypressId?: string;
}

const Link: FC<LinkProps> = ({
  $isActive,
  children,
  className,
  color,
  cypressId,
  download,
  hideLabel,
  href,
  icon,
  id,
  image,
  isMobile,
  label,
  onClick,
  shape,
  size = 'md',
  target,
  title,
}) => (
  <LinkStyled
    $color={color}
    $isActive={$isActive}
    $isMobile={isMobile}
    $shape={shape}
    $size={size}
    className={className}
    data-cypress={cypressId}
    download={download}
    href={href}
    id={id}
    onClick={onClick}
    target={target}
    title={title || label}
  >
    {image && <img alt="" src={image} />}
    {icon && (
      <CtaIcon
        $image={icon}
        $size={size}
        aria-hidden="true"
        className={CTA_ICON_CLASS}
      />
    )}
    {label && (
      <CtaLabelStyled
        $hideLabel={hideLabel}
        $isMobile={isMobile}
        className={CTA_LABEL_CLASS}
      >
        {label}
      </CtaLabelStyled>
    )}
    {children}
  </LinkStyled>
);

export default memo(Link);
