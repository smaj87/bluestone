import { FC, memo, ReactNode } from 'commons/utils/react';

import {
  MauticFormErrorMessageIconStyled,
  MauticFormErrorMessageStyled,
  MauticFormItemStyled,
  MauticLabelStyled,
} from '../styles';

interface Props {
  fieldId: string;
  label?: string;
  children: ReactNode;
  isError?: boolean;
  validationMessage?: string;
}

const MauticFormElement: FC<Props> = ({
  children,
  fieldId,
  isError,
  label,
  validationMessage,
}) => (
  <MauticFormItemStyled>
    {label && <MauticLabelStyled htmlFor={fieldId}>{label}</MauticLabelStyled>}
    {isError && (
      <MauticFormErrorMessageStyled>
        <MauticFormErrorMessageIconStyled $image="error" />
        <span>{validationMessage}</span>
      </MauticFormErrorMessageStyled>
    )}
    {children}
  </MauticFormItemStyled>
);

export default memo(MauticFormElement);
