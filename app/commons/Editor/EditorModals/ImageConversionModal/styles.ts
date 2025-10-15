import Button from 'commons/Button';
import {
  CTA_ICON_CLASS,
  CTA_LABEL_CLASS,
} from 'commons/CallToAction/constants';
import styled, { css } from 'commons/Goober';

export interface ConversionOptionsStyledProps {
  $isSingleOption?: boolean;
}

const isSingleOptionStyles = css`
  grid-template-columns: 1fr;
`;

const isMultiOptionStyles = css`
  grid-template-columns: repeat(3, 1fr);
`;

export const ConversionStyled = styled('div')`
  margin-top: 3.2rem;
  text-align: center;
`;

export const ConversionOptionsStyled = styled(
  'div',
)<ConversionOptionsStyledProps>`
  ${({ $isSingleOption }) =>
    $isSingleOption ? isSingleOptionStyles : isMultiOptionStyles};
  display: grid;
  grid-column-gap: 0.8rem;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;

  &:not(:last-child) {
    margin-bottom: 1.6rem;
  }

  &:not(:first-child) {
    margin-top: 1.6rem;
  }
`;

export const ButtonConversion = styled(Button)`
  flex-direction: column;
  align-items: center;
  row-gap: 0.8rem;
  padding: 1.6rem;

  .${CTA_LABEL_CLASS} {
    white-space: normal;
  }

  .${CTA_ICON_CLASS} {
    font-size: 2.4rem;
  }
`;
