import { TargetedEvent } from 'commons/utils/preact';
import { FC, memo, ReactText } from 'commons/utils/react';

import { RADIO_LABEL_CLASS } from './constants';
import { RadioButtonLabelStyled, RadioButtonStyled } from './styles';
import { RadioPlacement } from './types';

interface RadioButtonProps {
  checked?: boolean;
  label?: string;
  onChange?: (e: TargetedEvent<HTMLInputElement, Event>) => void;
  placement?: RadioPlacement;
  value?: ReactText;
  id?: string;
  name?: string;
}

const RadioButton: FC<RadioButtonProps> = ({
  checked,
  id,
  label,
  name,
  onChange,
  placement,
  value,
}) => (
  <RadioButtonStyled>
    <input
      checked={checked}
      id={id}
      name={name}
      onChange={onChange}
      type="radio"
      value={value}
    />
    <RadioButtonLabelStyled
      $placement={placement}
      className={RADIO_LABEL_CLASS}
    >
      <span>{label}</span>
    </RadioButtonLabelStyled>
  </RadioButtonStyled>
);

export default memo(RadioButton);
