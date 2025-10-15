import styled from 'commons/Goober';
import { screenMdAbove } from 'commons/utils/breakpoints';
import { corner } from 'commons/utils/variables';

export const UserActionTileStyled = styled('div')`
  isolation: isolate;
  position: relative;
  margin: 0 0 0.8rem;
  padding: 2.4rem;
  min-height: 20rem;
  border-radius: ${corner};
  border: 0.1rem solid var(--modal-constant-tile-border);
  background: var(--modal-constant-tile-bg);
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 12.8rem;
    height: 11.2rem;
    border-radius: 0 0 12.8rem 0;
    background: var(--modal-constant-tile-decoration-bg);
  }

  h3 {
    margin-bottom: 2.4rem;
    width: 100%;
    font-weight: 700;
    font-size: 1.8rem;
    line-height: 2.4rem;
    color: var(--modal-constant-tile-txt);
  }

  p {
    width: 100%;
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 1.5;
    color: var(--modal-constant-tile-txt);
  }

  ul {
    padding-left: 2.4rem;

    li {
      font-size: 1.4rem;
      line-height: 2.1rem;
      color: var(--modal-constant-tile-txt);

      &:not([class]) {
        color: var(--modal-constant-tile-txt);
      }
    }
  }
`;

export const UserActionTileInfoStyled = styled('div')`
  margin: 2.4rem -2.4rem -2.4rem;
  padding: 0.8rem 2.4rem;
  background: var(--modal-constant-tile-info-bg);

  p {
    margin: 0;
    font-size: 1.4rem;
    line-height: 1.5;
    color: var(--modal-constant-tile-info-txt);
    text-align: left;
  }
`;

export const UserActionTileActionsStyled = styled('div')`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0.8rem;
  margin-top: 2.4rem;

  @media screen and (min-width: ${screenMdAbove}) {
    grid-template-columns: repeat(auto-fit, minmax(14.4rem, auto));
  }
`;
