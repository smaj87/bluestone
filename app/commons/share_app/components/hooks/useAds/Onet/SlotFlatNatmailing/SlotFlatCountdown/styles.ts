import styled from 'commons/Goober';
import { screenMdAbove } from 'commons/utils/breakpoints';
import { corner } from 'commons/utils/variables';

export const SlotFlatCountdownStyled = styled('div')`
  display: grid;
  grid-template-columns: 1fr;
  justify-content: flex-start;
  align-items: flex-end;
  width: 100%;
  font-weight: 400;
  font-size: 1rem;
  line-height: 2;
  color: var(--list-item-txt--primary);
  text-align: center;
  text-transform: none;

  @media screen and (min-width: ${screenMdAbove}) {
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    padding: 0.8rem;
    font-weight: 700;
    font-size: 1.2rem;
    line-height: 2rem;
  }
`;

export const SlotFlatCountdownContentStyled = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;

  @media screen and (min-width: ${screenMdAbove}) {
    flex-direction: column;
    align-items: center;
    column-gap: 0.4rem;
    height: fit-content;
  }
`;

export const SlotFlatOfferStyled = styled('span')`
  display: inline-flex;
  justify-content: flex-end;
  align-items: center;
  column-gap: 0.4rem;
  height: 2rem;
  font-size: 1.3rem;
  line-height: 1.25;
  color: var(--list-item-txt--primary);
  white-space: nowrap;

  @media screen and (min-width: ${screenMdAbove}) {
    width: 100%;
  }
`;

export const SlotFlatClockStyled = styled('div')`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 0.2rem;
  justify-content: center;
  align-items: flex-start;
  margin-left: auto;
  width: fit-content;
  text-align: center;
`;

export const SlotFlatClockCellStyled = styled('div')`
  position: relative;
  padding: 0.2rem;
  min-width: 2rem;
  max-width: 3.2rem;
  height: 2rem;
  border-radius: ${corner};
  background: var(--cta-primary-bg);
  font-size: 1.2rem;
  line-height: 1.6rem;
  color: var(--cta-primary-txt);
`;
