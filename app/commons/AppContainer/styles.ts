import styled from 'commons/Goober';
import { screenMdAbove } from 'commons/utils/breakpoints';
import { IS_SIDEBAR_OPEN_CLASS } from 'commons/utils/classNames';
import { sidebarWidth, sideMenuWidth } from 'commons/utils/variables';

export const AppContainerStyled = styled('div')<{ $background?: string }>`
  @media screen and (min-width: ${screenMdAbove}) {
    display: grid;
    grid-template-columns: ${sideMenuWidth} 1fr;
    justify-content: flex-start;
    align-content: flex-start;
    align-items: stretch;
    padding-left: 0;
    ${({ $background }) =>
      $background
        ? `
          background: url(${$background}) no-repeat bottom center / cover;
        `
        : ''};
    .${IS_SIDEBAR_OPEN_CLASS} & {
      padding-left: ${sidebarWidth};
    }
  }

  @media screen and (max-width: ${screenMdAbove}) {
    .${IS_SIDEBAR_OPEN_CLASS} & {
      width: 100%;
    }
  }
`;
