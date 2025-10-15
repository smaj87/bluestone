import { TEXT_COLORS } from 'commons/Editor/constants';
import styled from 'commons/Goober';
import { screenMdAbove } from 'commons/utils/breakpoints';
import { corner } from 'commons/utils/variables';

export const ColorsContentStyled = styled('div')`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.6rem;
  width: 100%;
`;

export const ColorGroupStyled = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-block: 0.4rem;
`;

interface DotColorActiveStyled {
  $bg: string;
}

export const CurrentColorInfoStyled = styled('span')<DotColorActiveStyled>`
  position: absolute;
  right: 0.8rem; // padding buttona md
  bottom: 0.3rem;
  left: 0.8rem; // padding buttona md
  height: 0.4rem;
  border-radius: ${corner};
  background: ${({ $bg }) => $bg || TEXT_COLORS.black};
  box-shadow: 0 0 0 0.1rem var(--editor-btn-selected-color-shadow);

  @media screen and (min-width: ${screenMdAbove}) {
    right: 3.2rem; // padding buttona md + szerokość ikony + odstęp
  }
`;
