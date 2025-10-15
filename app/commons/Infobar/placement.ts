import { css } from 'commons/Goober';
import { InfobarPlacement } from 'commons/Infobar/types';
import { screenMdAbove } from 'commons/utils/breakpoints';
import { corner } from 'commons/utils/variables';

export const defaultPlacementStyles = css`
  @media screen and (min-width: ${screenMdAbove}) {
    margin-bottom: 0.8rem;
    border-radius: ${corner};
  }
`;

export const formPlacementStyles = css`
  margin-bottom: 0;
  border-radius: ${corner};
`;

export const modalPlacementStyles = css`
  margin-bottom: 0.8rem;
  border-radius: ${corner};
`;

export const placementTypes: Record<InfobarPlacement, any> = {
  default: css`
    ${defaultPlacementStyles}
  `,
  form: css`
    ${formPlacementStyles}
  `,
  modal: css`
    ${modalPlacementStyles}
  `,
};
