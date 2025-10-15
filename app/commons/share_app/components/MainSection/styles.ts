import { css } from 'commons/Goober';
import { screenMdAbove } from 'commons/utils/breakpoints';
import { sectionMobileMarginBottom } from 'commons/utils/variables';

export const mainSectionStyles = css`
  position: relative;
  display: none;
  margin-bottom: ${sectionMobileMarginBottom};
  width: 100%;
  min-width: 0;

  @media screen and (min-width: ${screenMdAbove}) {
    margin-bottom: 0;
  }
`;
