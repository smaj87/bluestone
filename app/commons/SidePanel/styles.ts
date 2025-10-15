import Button from 'commons/Button';
import styled from 'commons/Goober';
import { screenMdAbove, screenXsUnder } from 'commons/utils/breakpoints';
import { LAYER_SIDE_PANEL } from 'commons/utils/layers';
import { corner } from 'commons/utils/variables';

export const SidePanelStyled = styled('div')`
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 80vw;
  height: 100%;
  background: var(--modal-bg);
  color: var(--modal-txt);
  box-shadow: 0 0 2.5rem var(--modal-shadow);
  z-index: ${LAYER_SIDE_PANEL};

  h3 {
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 2rem;
    color: var(--modal-txt);
  }

  p {
    font-size: 1.6rem;
    line-height: 2.2rem;
  }

  hr {
    margin: 1.6rem 0;
    border-top: 0.1rem solid var(--modal-line);
  }

  @media screen and (min-width: ${screenXsUnder}) {
    width: 46rem;
  }
`;

export const SidePanelContentStyled = styled('div')`
  padding: 1.6rem;
  width: 100%;
  height: 100%;
  overflow-y: auto;
`;

export const SidePanelHeaderStyled = styled('header')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.6rem;

  h2 {
    font-size: 1.6rem;
    line-height: 2.4rem;

    @media screen and (min-width: ${screenMdAbove}) {
      font-size: 2.6rem;
      line-height: 3.6rem;
    }
  }
`;

export const SidePanelActionsStyled = styled('div')`
  position: sticky;
  bottom: -1.6rem;
  z-index: 1;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 0.8rem;
  margin: 1.6rem -1.6rem -1.6rem;
  padding: 1.6rem;
  width: calc(100% + 3.2rem);
  background: var(--modal-bg);

  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 1.6rem;
    left: 1.6rem;
    height: 0.1rem;
    background: var(--modal-line);
  }
`;

export const SidePanelCloseStyled = styled('div')`
  position: absolute;
  top: 0;
  left: 0;
  transform: translateX(-100%);
`;

export const SidePanelButtonClose = styled(Button)`
  justify-content: center;
  border-radius: 0 0 0 ${corner};
  background: var(--modal-bg);
  width: 4rem;
  height: 4rem;

  @media (hover: hover) {
    &:hover:not(:disabled) {
      border-color: var(--modal-bg);
      background: var(--modal-bg);
    }
  }
`;
