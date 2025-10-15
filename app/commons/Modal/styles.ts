import Button from 'commons/Button';
import { customCommunicationStyles } from 'commons/CustomCommunication/styles';
import { ctaCustomCommunicationStyles } from 'commons/CustomCommunication/stylesCTA';
import styled, { css } from 'commons/Goober';
import { MODAL_DIALOG_CONSTANT_THEME_CLASS } from 'commons/Modal/constants';
import { screenMdAbove } from 'commons/utils/breakpoints';
import { LAYER_MODAL } from 'commons/utils/layers';
import { corner } from 'commons/utils/variables';

import { modalSizesFunc } from './sizes';
import { ModalSize } from './types';

export const ModalStyled = styled('div')`
  position: fixed;
  top: 0;
  left: 0;
  padding: 0.8rem;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  z-index: ${LAYER_MODAL};

  @media screen and (min-width: ${screenMdAbove}) {
    padding: 2.4rem;
  }
`;

export const ModalActionsStyled = styled('div')`
  position: sticky;
  z-index: 1;
  bottom: -1.6rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 0.8rem;
  margin: 0 -1.6rem -1.6rem;
  padding: 1.6rem;
  border-radius: 0 0 ${corner} ${corner};
  background: var(--modal-bg);

  @media screen and (min-width: ${screenMdAbove}) {
    bottom: -2.4rem;
    margin: 0 -2.4rem -2.4rem;
    padding: 2.4rem;
  }

  .${MODAL_DIALOG_CONSTANT_THEME_CLASS} & {
    background: var(--modal-constant-bg);
    border-top: 0.1rem solid var(--modal-constant-line);
  }
`;

export const ModalOptionsStyled = styled('div')`
  display: grid;
  grid-gap: 0.8rem;
  margin-top: 1.6rem;
`;

const isFullScreenStyles = css`
  margin: -0.8rem;
  width: calc(100% + 1.6rem);
  max-width: none;
  height: calc(100% + 1.6rem);
  border-radius: 0;
  overflow-y: auto;

  @media screen and (min-width: ${screenMdAbove}) {
    margin: 0;
    width: 100%;
    height: 100%;
    border-radius: ${corner};
  }
`;

export interface ModalDialogProps {
  $size?: ModalSize;
  $isFullScreen?: boolean;
}

export const ModalDialogStyled = styled('div')<ModalDialogProps>`
  position: relative;
  margin: 0 auto;
  padding: 1.6rem;
  width: 100%;
  border-radius: ${corner};
  background: var(--modal-bg);
  color: var(--modal-txt);
  box-shadow: 0 0 2.4rem var(--modal-shadow);

  ${modalSizesFunc};

  p {
    font-size: 1.6rem;
    line-height: 2rem;

    &:not(:last-child) {
      margin-bottom: 0.8rem;
    }
  }

  li:not[class] {
    font-size: 1.6rem;
    line-height: 2rem;
  }

  hr {
    margin: 1.6rem 0;
    border-top: 0.1rem solid var(--modal-line);
  }

  table {
    table-layout: fixed;
    margin-block: 1.6rem;
    width: 100%;
    border-radius: ${corner};
    border-collapse: collapse;
    border: 0.1rem solid var(--modal-line);

    th,
    td {
      padding: 0.8rem;
      border: 0.1rem solid var(--modal-line);
      font-size: 1.6rem;
      line-height: 2rem;
      text-align: left;
    }

    th {
      font-weight: 500;
    }

    caption {
      font-size: 1.2rem;
      line-height: 1.5;
      text-align: left;

      &:not(:last-child) {
        margin-bottom: 0.4rem;
      }
    }
  }

  &.${MODAL_DIALOG_CONSTANT_THEME_CLASS} {
    background: var(--modal-constant-bg);
    color: var(--modal-constant-txt);
    box-shadow: 0 0 2.4rem var(--modal-constant-shadow);
    overflow-x: initial;
    overflow-y: initial;

    hr {
      border-top: 0.1rem solid var(--modal-constant-line);
    }

    table {
      border-color: var(--modal-constant-line);

      th,
      td {
        border-color: var(--modal-constant-line);
      }
    }
  }

  @media screen and (min-width: ${screenMdAbove}) {
    padding: 2.4rem;
  }

  ${({ $isFullScreen }) => ($isFullScreen ? isFullScreenStyles : undefined)}

  ${customCommunicationStyles};
  ${ctaCustomCommunicationStyles};
`;

export const ModalHeaderStyled = styled('div')`
  h3 {
    font-size: 2rem;
    line-height: 2.4rem;
    margin-bottom: 1.6rem;

    @media screen and (min-width: ${screenMdAbove}) {
      font-size: 2.4rem;
      line-height: 3.6rem;
    }
  }
`;

export const ModalCloseStyled = styled('div')`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
`;

export const ButtonRemove = styled(Button)`
  justify-self: flex-start;
  margin-right: auto;
`;

export const ButtonBack = styled(Button)`
  justify-self: flex-start;
  margin-right: auto;
`;

export const ButtonAction = styled(Button)`
  @media screen and (min-width: ${screenMdAbove}) {
    min-width: 14.4rem;
  }
`;

export const ButtonClose = styled(Button)`
  justify-content: center;
  width: 4rem;
  height: 4rem;

  .${MODAL_DIALOG_CONSTANT_THEME_CLASS} & {
    border-color: var(--modal-constant-close-border);
    background: var(--modal-constant-close-bg);
    color: var(--modal-constant-close-txt);

    @media (hover: hover) {
      &:hover:not(:disabled) {
        border-color: var(--modal-constant-close-border--hover);
        background: var(--modal-constant-close-bg--hover);
        color: var(--modal-constant-close-txt--hover);
      }
    }
  }
`;

export const ModalImageStyled = styled('figure')`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-block: 2.4rem;

  img {
    display: block;
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
`;
