import {
  CTA_CLASS,
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
import LoaderBouncingDots from 'commons/LoaderBouncing';
import { FC, memo, ReactNode } from 'commons/utils/react';

import { BadgeStyled } from './styles';

export interface BadgeProps extends CtaStyledProps {
  $isActive?: boolean;
  ariaHidden?: boolean;
  children?: ReactNode;
  className?: string;
  color?: CtaColor;
  cypressId?: string;
  hideLabel?: boolean;
  icon?: IconImage;
  id?: string;
  image?: string;
  img?: string;
  isDisabled?: boolean;
  isFetching?: boolean;
  isMobile?: boolean;
  isStretch?: boolean;
  label?: string;
  params?: any;
  shape?: CtaShape;
  size?: CtaSize;
  tabIndex?: number;
  title?: string;
}

const Badge: FC<BadgeProps> = ({
  $isActive,
  ariaHidden,
  children,
  className,
  color,
  cypressId,
  hideLabel,
  icon,
  id,
  image,
  isDisabled,
  isFetching,
  isMobile,
  isStretch,
  label,
  shape,
  size,
  title,
}) => {
  const badgeClassName = className || '';

  return (
    <BadgeStyled
      $color={color}
      $isActive={$isActive}
      $isDisabled={isDisabled}
      $isMobile={isMobile}
      $isStretch={isStretch}
      $shape={shape}
      $size={size}
      aria-hidden={ariaHidden}
      className={`${CTA_CLASS} ${badgeClassName}`}
      data-cypress={cypressId}
      id={id}
      title={title}
    >
      {!!image && <img alt="" src={image} />}
      {!!icon && (
        <CtaIcon
          $image={icon}
          $isMobile={isMobile}
          $size={size}
          aria-hidden
          className={CTA_ICON_CLASS}
        />
      )}
      {!!label && (
        <CtaLabelStyled
          $hideLabel={hideLabel}
          $isMobile={isMobile}
          className={CTA_LABEL_CLASS}
        >
          {label}
        </CtaLabelStyled>
      )}
      {children}
      {!!isFetching && (
        <LoaderBouncingDots color={color} position="absolute" size="sm" />
      )}
    </BadgeStyled>
  );
};

export default memo(Badge);
