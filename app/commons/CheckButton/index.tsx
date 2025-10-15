import { CtaColor, CtaShape, CtaSize } from 'commons/CallToAction/types';
import { CHECK_BUTTON_LABEL_CLASS } from 'commons/CheckButton/constants';
import {
  CheckButtonLabelStyled,
  CheckButtonStyled,
} from 'commons/CheckButton/styles';
import { TargetedEvent } from 'commons/utils/preact';
import { FC, memo, ReactNode, useCallback } from 'commons/utils/react';

interface CheckButtonProps {
  id: string;
  label?: string | ReactNode;
  className?: string;
  isDisabled?: boolean;
  isChecked?: boolean;
  onChange?: (event: TargetedEvent<HTMLInputElement, Event>) => void;
  stopProp?: boolean;
  color?: CtaColor;
  size?: CtaSize;
  shape?: CtaShape;
  title?: string;
}

const CheckButton: FC<CheckButtonProps> = ({
  className,
  color,
  id,
  isChecked = false,
  isDisabled = false,
  label,
  onChange,
  shape,
  size,
  stopProp,
  title,
}) => {
  const labelstopProp = useCallback(
    (e) => {
      if (stopProp) {
        e.stopPropagation();
      }
    },
    [stopProp],
  );

  return (
    <CheckButtonStyled
      className={className}
      draggable="false"
      htmlFor={id}
      onClick={labelstopProp}
      title={title}
    >
      <input
        checked={!!isChecked}
        disabled={isDisabled}
        id={id}
        onChange={onChange}
        type="checkbox"
      />
      <CheckButtonLabelStyled
        $color={color}
        $isActive={!!isChecked}
        $shape={shape}
        $size={size}
        className={CHECK_BUTTON_LABEL_CLASS}
      >
        <span>{label}</span>
      </CheckButtonLabelStyled>
    </CheckButtonStyled>
  );
};

export default memo(CheckButton);
