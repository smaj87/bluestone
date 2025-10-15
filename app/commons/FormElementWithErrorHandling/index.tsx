import { InputProps } from 'commons/Input';
import { TextareaProps } from 'commons/Textarea';
import Tooltip from 'commons/TooltipOld';
import { ChangeEvent, FC, memo } from 'commons/utils/react';

interface FormElementWithErrorHandlingProps
  extends Omit<TextareaProps, 'onChange'>,
    Omit<InputProps, 'onChange'> {
  error?: string;
  component: any;
  onChange?: (e: ChangeEvent<unknown>) => void;
}

const FormElementWithErrorHandling: FC<FormElementWithErrorHandlingProps> = ({
  component: Component,
  error,
  id,
  isError,
  name,
  onChange,
  placeholder,
  sizeField = 'md',
  type,
  value,
}) => {
  const { change, hide, isOpen, show } = Tooltip.useInputTooltip(error);

  return (
    <Tooltip isOpen={isOpen && !!error} onChange={change}>
      <Component
        id={id}
        isError={isError || !!error}
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
        <Tooltip.TooltipContent>{error}</Tooltip.TooltipContent>
      )}
    </Tooltip>
  );
};

FormElementWithErrorHandling.displayName = 'FormElementWithErrorHandling';

export default memo(FormElementWithErrorHandling);
