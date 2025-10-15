import Button from 'commons/Button';
import {
  secondaryDisabledStyles,
  secondaryStyles,
} from 'commons/CallToAction/colors';
import styled, { css } from 'commons/Goober';
import { screenMdAbove } from 'commons/utils/breakpoints';
import { corner } from 'commons/utils/variables';

export const AttachmentsStyled = styled('div')`
  position: relative;
  margin-bottom: 0.8rem;
  padding: 0.8rem;
  background: var(--readmail-bg);
  color: var(--readmail-txt--primary);

  @media screen and (min-width: ${screenMdAbove}) {
    border-radius: ${corner};
  }
`;

export const AttachmentsActionsListStyled = styled('ul')`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin: 0 0 0.8rem;
  padding: 0;
  list-style: none;
`;

export const AttachmentsActionItemStyled = styled('li')`
  font-weight: 400;
  font-size: 1.3rem;
  line-height: 2rem;
`;

export const buttonDownloadHoverStyles = css`
  &:hover:not(:disabled) {
    text-decoration-thickness: 0.2rem;
  }
`;

export const ButtonDownload = styled(Button)`
  // TODO - komponent do przemyślenia
  ${secondaryStyles};
  font-weight: 400;
  font-size: 1.3rem;
  line-height: 2rem;
  text-decoration: underline;
  ${({ isDisabled }) => isDisabled && secondaryDisabledStyles};

  &:disabled {
    ${secondaryDisabledStyles};
  }

  @media (hover: hover) {
    ${({ isDisabled }) => !isDisabled && buttonDownloadHoverStyles};
  }
`;
