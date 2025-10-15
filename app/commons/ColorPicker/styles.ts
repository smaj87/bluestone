import Button from 'commons/Button';
import styled, { css } from 'commons/Goober';
import { corner } from 'commons/utils/variables';

const pickerSize = '2.4rem';

interface ColorPickerStyledProps {
  $columns?: number;
}

export const ColorPickerStyled = styled('div')<ColorPickerStyledProps>`
  display: grid;
  justify-content: flex-start;
  align-items: flex-start;
  grid-template-columns: repeat(
    ${({ $columns }) => $columns || 'auto-fit'},
    minmax(${pickerSize}, ${pickerSize})
  );
  gap: 0.8rem;
  min-width: 0;
`;

interface ColorPickerButtonProps {
  $bgColor: string;
  selected?: boolean;
}

const isSelectedStyles = css`
  outline: 0.2rem solid var(--app-primary-bg); /* TODO - do zastanowienia na później */
  outline-offset: 0.2rem;
`;

export const ColorPickerButtonStyled = styled(Button)<ColorPickerButtonProps>`
  width: ${pickerSize};
  height: ${pickerSize};
  border-radius: ${corner};
  background: ${({ $bgColor }) => $bgColor};
  cursor: pointer;
  ${({ selected }) => selected && isSelectedStyles};

  @media (hover: hover) {
    &:hover {
      ${isSelectedStyles}
    }
  }
`;
