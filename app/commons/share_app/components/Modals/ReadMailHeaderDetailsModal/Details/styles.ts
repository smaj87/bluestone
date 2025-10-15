import Button from 'commons/Button';
import styled, { css } from 'commons/Goober';
import Icon from 'commons/Icon';
import { screenMdAbove } from 'commons/utils/breakpoints';
import { IS_PRINTING_VIEW_CLASS } from 'commons/utils/classNames';
import { PRINT_WIDTH } from 'commons/utils/variables';

import { VALUE_SIZE_CLASS } from './constants';

export const DetailsListStyled = styled('ul')`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.8rem;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0;
  padding: 0;
  list-style: none;

  .${IS_PRINTING_VIEW_CLASS} & {
    margin: 0 auto 1.6rem;
    padding: 1.6rem;
    width: 100%;
    max-width: ${PRINT_WIDTH};
    border-bottom: 0.1rem solid var(--neutral-border);
    background: var(--neutral-bg);
  }
`;

interface DetailItemStyledProps {
  $isHidden?: boolean;
  $isMultiLine?: boolean;
}

const isSingleLineItemStyles = css`
  grid-template-columns: 12rem 1fr;
  grid-column-gap: 0.4rem;

  .${IS_PRINTING_VIEW_CLASS} & {
    grid-template-columns: 8rem 1fr;
    grid-column-gap: 0.8rem;
  }
`;

const isMultiLineItemStyles = css`
  grid-template-columns: 1fr;
  grid-row-gap: 0.2rem;

  &:not(:last-child) {
    margin-bottom: 0.8rem;
  }

  .${IS_PRINTING_VIEW_CLASS} & {
    grid-template-columns: 8rem 1fr;
    grid-column-gap: 0.8rem;

    &:not(:last-child) {
      margin-bottom: 0;
    }
  }
`;

export const DetailItemStyled = styled('li')<DetailItemStyledProps>`
  ${({ $isMultiLine }) =>
    $isMultiLine ? isMultiLineItemStyles : isSingleLineItemStyles};
  display: grid;
  justify-content: flex-start;
  align-items: flex-start;
  font-size: 1.2rem;
  line-height: 1.5;

  @media screen and (min-width: ${screenMdAbove}) {
    font-size: 1.3rem;
  }
`;

export const DetailItemLabelStyled = styled('label')`
  font-weight: 700;

  .${IS_PRINTING_VIEW_CLASS} & {
    font-weight: 400;
    color: var(--neutral-txt--secondary);
    text-align: right;
  }
`;

export const DetailItemValuesListStyled = styled('div')`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 0.4rem;
  justify-content: flex-start;
  align-items: flex-start;
`;

interface DetailItemValueStyledProps {
  $grid: 'column' | 'row';
}

const detailItemValueColumnStyles = css`
  grid-template-columns: auto auto;
  grid-column-gap: 0.8rem;
  align-items: center;
`;

const detailItemValueRowStyles = css`
  grid-template-columns: 1fr;
  grid-row-gap: 0.2rem;
  align-items: flex-start;
`;

export const DetailItemValueStyled = styled('div')<DetailItemValueStyledProps>`
  display: grid;
  justify-content: flex-start;
  ${({ $grid }) => ($grid === 'column' ? detailItemValueColumnStyles : '')};
  ${({ $grid }) => ($grid === 'row' ? detailItemValueRowStyles : '')};

  .${IS_PRINTING_VIEW_CLASS} & {
    color: var(--neutral-txt--primary);
  }
  .${VALUE_SIZE_CLASS} {
    //do usunięcia po przepisaniu komponentu size do 3.0
    font-size: inherit;
    line-height: inherit;
  }
`;

export const DetailItemCellStyled = styled('span')``;

export const ButtonToggle = styled(Button)`
  font-size: 1.2rem;
  line-height: 1.5;
  color: inherit;
  text-decoration: underline;

  @media (hover: hover) {
    &:hover:not(:disabled) {
      color: inherit;
      text-decoration-thickness: 0.2rem;
    }
  }

  @media screen and (min-width: ${screenMdAbove}) {
    font-size: 1.3rem;
  }
`;

export const SecurityContentStyled = styled('div')`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-column-gap: 0.8rem;
  justify-content: flex-start;
  align-items: flex-start;
`;

export interface SecurityIconProps {
  $type: 'success' | 'warning' | 'error' | undefined;
}

const securityIconSuccesssStyles = css`
  color: var(--state-success);
`;

const securityIconErrorStyles = css`
  color: var(--state-error);
`;

const securityIconWarningStyles = css`
  color: var(--state-warning);
`;

export const SecurityIcon = styled(Icon)<SecurityIconProps>`
  font-size: 1.6rem;
  ${({ $type }) => ($type === 'success' ? securityIconSuccesssStyles : '')};
  ${({ $type }) => ($type === 'error' ? securityIconErrorStyles : '')};
  ${({ $type }) => ($type === 'warning' ? securityIconWarningStyles : '')};
`;

export const SecurityLinkStyled = styled('a')`
  font-size: 1.2rem;
  color: inherit;
  text-decoration: underline;

  @media screen and (min-width: ${screenMdAbove}) {
    font-size: 1.3rem;
  }

  @media (hover: hover) {
    &:hover {
      text-decoration-thickness: 0.2rem;
    }
  }
`;

export const AttachmentItemStyled = styled('span')`
  display: block;
  width: 100%;
  word-break: break-word;

  &:not(:last-child) {
    &:after {
      content: ',\\00a0';
    }
  }

  .${VALUE_SIZE_CLASS} {
    white-space: nowrap;
  }
`;
