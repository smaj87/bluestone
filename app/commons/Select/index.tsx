import { FormFieldSize } from 'commons/FormElements/types';
import { ChangeEvent, FC, memo, ReactNode } from 'commons/utils/react';

import { SelectBoxStyled, SelectIcon, SelectStyled } from './styles';

interface SelectProps {
  name?: string;
  value?: string | number;
  children?: ReactNode;
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
  placeholder?: string;
  isError?: boolean;
  sizeField?: FormFieldSize;
  required?: boolean;
  defaultValue?: string | number;
  id?: string;
}

const Select: FC<SelectProps> = ({
  children,
  defaultValue,
  id,
  isError,
  name,
  onChange,
  placeholder,
  required,
  sizeField = 'md',
  value,
}) => {
  const selectProps: Partial<SelectProps> = {
    defaultValue: defaultValue ?? undefined,
    id,
    name,
    onChange,
    placeholder,
    required,
  };

  if (value !== undefined) {
    // only when value is not undefined because of preact
    selectProps.value = value;
  }

  return (
    <SelectBoxStyled>
      <SelectStyled $isError={isError} $sizeField={sizeField} {...selectProps}>
        {children}
      </SelectStyled>
      <SelectIcon $image="chevronDown" />
    </SelectBoxStyled>
  );
};

export default memo(Select);
