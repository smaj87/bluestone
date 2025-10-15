import { FormFieldSize } from 'commons/FormElements/types';
import {
  ChangeEvent,
  FC,
  FocusEvent,
  memo,
  ReactText,
  Ref,
} from 'commons/utils/react';

import { InputStyled } from './styles';

export interface InputProps {
  ariaDescribedby?: string;
  id?: string;
  name?: string;
  value?: string | number;
  type?: string;
  sizeField?: FormFieldSize;
  isDisabled?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  forRef?: Ref<HTMLInputElement>;
  onFocus?: (e: FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
  error?: string;
  isError?: boolean;
  maxLength?: number;
  min?: number;
  step?: number;
  required?: boolean;
  defaultValue?: ReactText | null;
  multiple?: boolean;
}

const Input: FC<InputProps> = ({
  ariaDescribedby,
  defaultValue,
  error,
  forRef,
  id,
  isDisabled,
  isError,
  maxLength,
  min,
  multiple,
  name,
  onBlur,
  onChange,
  onFocus,
  placeholder,
  required,
  sizeField = 'md',
  step,
  type = 'text',
  value,
}) => (
  <InputStyled
    ref={forRef}
    $isError={isError || !!error}
    $sizeField={sizeField}
    aria-describedby={ariaDescribedby}
    aria-invalid={isError || !!error}
    defaultValue={defaultValue ?? undefined}
    disabled={isDisabled}
    id={id}
    maxLength={maxLength}
    min={min}
    multiple={multiple}
    name={name}
    onBlur={onBlur}
    onChange={onChange}
    onFocus={onFocus}
    placeholder={placeholder}
    required={required}
    step={step}
    type={type}
    value={value}
  />
);

export default memo(Input);
