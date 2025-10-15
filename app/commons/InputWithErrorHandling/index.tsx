import { FormFieldSize } from 'commons/FormElements/types';
import Input from 'commons/Input';
import { ChangeEvent, FC, memo, Ref } from 'commons/utils/react';

import ErrorTooltip from './ErrorTooltip';
import useInputErrorTooltip from './hooks/useInputErrorTooltip';
import { ErrorTooltipContent } from './styles';

interface InputWithErrorHandlingProps {
  id?: string;
  name?: string;
  value?: string | number;
  type?: string;
  sizeField?: FormFieldSize;
  isDisabled?: boolean;
  isError?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  forRef?: Ref<HTMLInputElement>;
  error?: string;
  maxLength?: number;
}

const InputWithErrorHandling: FC<InputWithErrorHandlingProps> = ({
  error,
  forRef,
  id,
  isDisabled,
  isError,
  maxLength = 2000,
  name,
  onChange,
  placeholder,
  sizeField = 'md',
  type,
  value,
}) => {
  const { change, hide, isOpen, show } = useInputErrorTooltip(error);

  return (
    <ErrorTooltip isOpen={isOpen && !!error} onChange={change}>
      <Input
        forRef={forRef}
        id={id}
        isDisabled={isDisabled}
        isError={isError || !!error}
        maxLength={maxLength}
        name={name}
        onBlur={hide}
        onChange={onChange}
        onFocus={show}
        placeholder={placeholder}
        sizeField={sizeField}
        type={type}
        value={value}
      />

      {isOpen && !!error && (
        <ErrorTooltipContent sizeField={sizeField}>{error}</ErrorTooltipContent>
      )}
    </ErrorTooltip>
  );
};

InputWithErrorHandling.displayName = 'InputWithErrorHandling';

export default memo(InputWithErrorHandling);
