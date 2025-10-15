import { AriaHasPopup } from 'commons/Aria/types';
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
import {
  CtaAlign,
  CtaColor,
  CtaShape,
  CtaSize,
} from 'commons/CallToAction/types';
import { IconImage } from 'commons/Icon/iconImage';
import LoaderBouncingDots from 'commons/LoaderBouncing';
import {
  FC,
  memo,
  MouseEvent,
  ReactNode,
  Ref,
  useCallback,
} from 'commons/utils/react';

import { ButtonStyled } from './styles';

export interface ButtonProps extends CtaStyledProps {
  className?: string;
  forRef?: Ref<HTMLButtonElement>;
  params?: any;
  id?: string;
  onClick?: (
    event: MouseEvent<HTMLButtonElement>,
    params: ButtonProps['params'],
  ) => void;
  onClickCapture?: ButtonProps['onClick'];
  icon?: IconImage;
  image?: string;
  label?: string;
  title?: string;
  isDisabled?: boolean;
  align?: CtaAlign;
  ariaControls?: string;
  ariaExpanded?: boolean;
  ariaHasPopup?: AriaHasPopup;
  ariaHidden?: boolean; // temporary
  ariaPressed?: boolean;
  color?: CtaColor;
  size?: CtaSize;
  shape?: CtaShape;
  isMobile?: boolean;
  $isActive?: boolean;
  isFetching?: boolean;
  isStretch?: boolean;
  children?: ReactNode;
  hideLabel?: boolean;
  img?: string;
  type?: 'button' | 'submit' | 'reset';
  tabIndex?: number;
  role?: string;
  cypressId?: string;
}

const Button: FC<ButtonProps> = ({
  $isActive,
  align,
  ariaControls,
  ariaExpanded,
  ariaHasPopup,
  ariaHidden, // temporary
  ariaPressed,
  children,
  className,
  color,
  cypressId,
  forRef,
  hideLabel,
  icon,
  id,
  image,
  isDisabled,
  isFetching,
  isMobile,
  isStretch,
  label,
  onClick,
  onClickCapture,
  params,
  role,
  shape,
  size,
  tabIndex,
  title,
  type,
}) => {
  const onClickFunc = useCallback(
    (e: any) => {
      if (onClick) {
        onClick(e, params);
      }
    },
    [params, onClick],
  );

  const onClickCaptureFunc = useCallback(
    (e: any) => {
      if (onClickCapture) {
        onClickCapture(e, params);
      }
    },
    [params, onClickCapture],
  );

  const buttonClassName = className || '';

  return (
    <ButtonStyled
      ref={forRef}
      $align={align}
      $color={color}
      $isActive={$isActive}
      $isMobile={isMobile}
      $isStretch={isStretch}
      $shape={shape}
      $size={size}
      aria-controls={ariaControls}
      aria-expanded={ariaExpanded}
      aria-haspopup={ariaHasPopup}
      aria-hidden={ariaHidden} // temporary
      aria-pressed={ariaPressed}
      className={`${CTA_CLASS} ${buttonClassName}`}
      data-cypress={cypressId}
      disabled={isDisabled}
      id={id}
      onClick={onClickFunc}
      onClickCapture={onClickCaptureFunc}
      role={role}
      tabIndex={tabIndex}
      title={title}
      type={type || 'button'}
    >
      {!!image && <img alt="" src={image} />}
      {!!icon && (
        <CtaIcon
          $image={icon}
          $isMobile={isMobile}
          $size={size}
          aria-hidden="true"
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
    </ButtonStyled>
  );
};

export default memo(Button);
