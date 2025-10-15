import { FC, memo, ReactNode } from 'commons/utils/react';

import {
  DetailItemCellStyled,
  DetailItemLabelStyled,
  DetailItemStyled,
  DetailItemValuesListStyled,
  DetailItemValueStyled,
} from './styles';

interface Props {
  id?: string;
  isMultiLine?: boolean;
  label?: string;
  value?: string | ReactNode;
  cypressId?: string;
}

const DetailsItem: FC<Props> = ({
  cypressId,
  id,
  isMultiLine,
  label,
  value,
}) => (
  <DetailItemStyled $isMultiLine={isMultiLine}>
    <DetailItemLabelStyled data-cypress={`${cypressId}-LABEL`} htmlFor={id}>
      {label}:
    </DetailItemLabelStyled>
    <DetailItemValuesListStyled id={id}>
      <DetailItemValueStyled $grid="row">
        <DetailItemCellStyled data-cypress={`${cypressId}-VALUE`}>
          {value}
        </DetailItemCellStyled>
      </DetailItemValueStyled>
    </DetailItemValuesListStyled>
  </DetailItemStyled>
);

DetailsItem.displayName = 'DetailsItem';

export default memo(DetailsItem);
