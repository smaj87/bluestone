import Button from 'commons/Button';
import styled, { css } from 'commons/Goober';
import Icon from 'commons/Icon';

import { ctaStateTypes, stateTypes } from './colors';
import { placementTypes } from './placement';
import { infobarEmbeddedCTAStyles } from './stylesCTA';
import { infobarEmbeddedContentStyles } from './stylesEmbeded';
import { InfobarPlacement, InfobarType } from './types';

export const InfobarStyled = styled('div')<{
  $type?: InfobarType;
  $placement?: InfobarPlacement;
}>`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  column-gap: 0.8rem;
  width: 100%;
  min-width: 0;
  max-width: 100%;
  padding: 0.8rem;
  color: var(--infobar-txt);

  ${({ $type }) => ($type ? stateTypes[$type] : stateTypes.info)};
  ${({ $placement }) =>
    $placement ? placementTypes[$placement] : placementTypes.default};
`;

export const InfobarIcon = styled(Icon)`
  font-size: 2rem;
`;

export const InfobarContentStyled = styled('div')`
  display: inherit;
  flex-wrap: wrap;
  flex: 1;
  min-width: 0;
  font-size: 1.3rem;
  line-height: 2rem;

  ${infobarEmbeddedContentStyles};
  ${infobarEmbeddedCTAStyles};
`;

export const InfobarLabelStyled = styled('span')`
  align-self: center;
  margin: auto 0.8rem;
  font-weight: 500;
  font-size: 1.3rem;
  line-height: 2rem;

  &:first-child {
    margin-left: 0;
  }
`;

export const InfobarActionsStyled = styled('ul')`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const InfobarActionItemStyled = styled('li')`
  position: relative;
  display: inline-flex;

  &:not(:last-child) {
    &:before {
      content: '|';
      position: absolute;
      top: 0;
      left: 100%;
      transform: translate3d(calc(0.4rem - 50%), 0, 0);
      color: inherit;
    }
  }
`;

export const infobarButtonDisabledStyles = css`
  color: var(--infobar-txt--disabled);
`;

export const InfobarButton = styled(Button)`
  padding: 0;
  font-size: 1.3rem;
  line-height: 2rem;
  color: inherit;
  text-decoration: underline;
  text-decoration-thickness: 0.1rem;

  @media (hover: hover) {
    &:hover:not(:disabled) {
      text-decoration-thickness: 0.2rem;
    }
  }

  &:disabled {
    ${infobarButtonDisabledStyles};
  }

  ${({ isDisabled }) => isDisabled && infobarButtonDisabledStyles};
`;

export interface InfobarButtonCloseProps {
  $state?: InfobarType;
}

export const InfobarButtonClose = styled(Button)<InfobarButtonCloseProps>`
  ${({ $state }) => ($state ? ctaStateTypes[$state] : ctaStateTypes.info)};
`;
