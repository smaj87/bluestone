import Button from 'commons/Button';
import {
  primaryStyles,
  secondaryActiveStyles,
  secondaryDisabledStyles,
} from 'commons/CallToAction/colors';
import { sizeMd } from 'commons/CallToAction/sizes';
import styled, { css } from 'commons/Goober';

export const HeaderStyled = styled('header')`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h3 {
    font-weight: 700;
    font-size: 1.3rem;
    line-height: 2rem;
    color: var(--app-txt);
  }
`;

export const HeaderActionsStyled = styled('div')`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 0.4rem;
`;

export const WeekDaysStyled = styled('div')`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-column-gap: 0.2rem;
  justify-content: flex-start;
  align-items: center;
`;

export const WeekDayStyled = styled('div')`
  ${sizeMd};
  padding-right: 0.2rem;
  padding-left: 0.2rem;
  color: var(--cta-secondary-txt--disabled);
  text-align: center;
`;

export const MonthDaysStyled = styled('div')`
  width: 100%;
`;

export const MonthDaysRowStyled = styled('div')`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-column-gap: 0.2rem;
  justify-content: flex-start;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: 0.2rem;
  }
`;

export const MonthDayCellStyled = styled('div')``;

export interface MonthDayStyledProps {
  isToday?: boolean;
  isOtherMonth?: boolean;
  isActive?: boolean;
}

const isTodayStyles = css`
  ${secondaryActiveStyles};
`;

const isOtherMonthStyles = css`
  ${secondaryDisabledStyles};
  font-weight: 400;
`;

const isActiveStyles = css`
  ${primaryStyles};
`;

export const MonthDayStyled = styled(Button)<MonthDayStyledProps>`
  padding-right: 0.2rem;
  padding-left: 0.2rem;
  width: 100%;
  font-weight: 700;
  ${({ isToday }) => (isToday ? isTodayStyles : '')};
  ${({ isOtherMonth }) => (isOtherMonth ? isOtherMonthStyles : '')};
  ${({ isActive }) => (isActive ? isActiveStyles : '')};
`;
