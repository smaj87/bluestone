import { FormFieldSize } from 'commons/FormElements/types';
import { ChangeEvent, FC, memo, ReactText } from 'commons/utils/react';

import { TextareaStyled } from './styles';

export interface TextareaProps {
  name?: string;
  value?: ReactText;
  defaultValue?: ReactText | null;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  isError?: boolean;
  sizeField?: FormFieldSize;
  rows?: number;
  id?: string;
  required?: boolean;
}

const Textarea: FC<TextareaProps> = ({
  defaultValue,
  id,
  isError,
  name,
  onChange,
  placeholder,
  required,
  rows,
  sizeField = 'md',
  value,
}) => (
  <TextareaStyled
    $isError={isError}
    $sizeField={sizeField}
    defaultValue={defaultValue ?? undefined}
    id={id}
    name={name}
    onChange={onChange}
    placeholder={placeholder}
    required={required}
    rows={rows}
    value={value}
  />
);

export default memo(Textarea);
