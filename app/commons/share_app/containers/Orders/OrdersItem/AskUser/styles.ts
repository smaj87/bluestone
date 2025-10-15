import Button from 'commons/Button';
import { CTA_ICON_CLASS } from 'commons/CallToAction/constants';
import styled from 'commons/Goober';
import { screenMdAbove } from 'commons/utils/breakpoints';

export const AskUserStyled = styled('div')`
  margin-top: 2.4rem;
  width: 100%;
  text-align: center;

  & > div {
    width: 100%;
  }

  @media screen and (min-width: ${screenMdAbove}) {
    margin-top: 0.8rem;
  }
`;

export const AskUserButtonsStyled = styled('div')`
  font-size: 1.2rem;
  width: 100%;

  p {
    font-size: 1.4rem;
    margin-bottom: 1.6rem;
  }
`;

export const AskUserButton = styled(Button)<{ $isActive: boolean }>`
  border-color: var(--banner-button-border--secondary--hover);
  background-color: ${({ $isActive }) =>
    $isActive ? 'var(--shopping-state-bg--error)' : 'transparent'};

  .${CTA_ICON_CLASS} {
    color: var(--state-error);
  }

  &:hover:not(:disabled) {
    background-color: ${({ $isActive }) =>
      $isActive ? 'var(--shopping-state-bg--error)' : 'transparent'};

    .${CTA_ICON_CLASS} {
      color: var(--state-error--hover);
    }
  }

  &:first-of-type {
    margin-right: 1.6rem;
    background-color: ${({ $isActive }) =>
      $isActive ? 'var(--shopping-state-bg--success)' : 'transparent'};

    .${CTA_ICON_CLASS} {
      color: var(--state-success);
    }

    &:hover:not(:disabled) {
      background-color: ${({ $isActive }) =>
        $isActive ? 'var(--shopping-state-bg--success)' : 'transparent'};

      .${CTA_ICON_CLASS} {
        color: var(--state-success--hover);
      }
    }
  }
`;
