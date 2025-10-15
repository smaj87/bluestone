import { CheckboxPlacement } from 'commons/Checkbox/types';
import { TargetedEvent } from 'commons/utils/preact';
import {
  FC,
  memo,
  ReactNode,
  ReactText,
  useCallback,
} from 'commons/utils/react';

import { CHECKBOX_CLASS, CHECKBOX_LABEL_CLASS } from './constants';
import { CheckboxLabelStyled, CheckboxStyled } from './styles';

interface CheckboxProps {
  name?: string;
  id?: string;
  label?: string | ReactNode;
  className?: string;
  isDisabled?: boolean;
  isChecked?: boolean;
  onChange?: (event: TargetedEvent<HTMLInputElement, Event>) => void;
  stopProp?: boolean;
  placement?: CheckboxPlacement;
  required?: boolean;
  value?: ReactText;
}

const Checkbox: FC<CheckboxProps> = ({
  className,
  id,
  isChecked,
  isDisabled = false,
  label,
  name,
  onChange,
  placement,
  required,
  stopProp,
  value,
}) => {
  const labelStopProp = useCallback(
    (e) => {
      if (stopProp) {
        e.stopPropagation();
      }
    },
    [stopProp],
  );

  return (
    <CheckboxStyled
      className={`${CHECKBOX_CLASS} ${className}`}
      draggable="false"
      htmlFor={id}
      onClick={labelStopProp}
    >
      <input
        checked={isChecked}
        disabled={isDisabled}
        id={id}
        name={name}
        onChange={onChange}
        required={required}
        type="checkbox"
        value={value}
      />
      <CheckboxLabelStyled
        $placement={placement}
        className={CHECKBOX_LABEL_CLASS}
      >
        <span>{label}</span>
      </CheckboxLabelStyled>
    </CheckboxStyled>
  );
};

export default memo(Checkbox);
