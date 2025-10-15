import { css } from 'commons/Goober';

import { DotStyledProps } from './styles';
import { DotLocation } from './types';

export const dotLocation: Record<DotLocation, any> = {
  default: css`
    top: 0;
    right: 0;
    transform: translate3d(0, 0, 0);
  `,
  dropdown: css`
    top: 0;
    right: 2rem;
    transform: translate3d(-75%, 50%, 0);
  `,
  toolbarSubmenu: css`
    top: 0;
    left: 50%;
    transform: translate3d(100%, 0, 0);
  `,
};

export const dotLocationFunc = ({
  $location,
}: {
  $location?: DotStyledProps['$location'];
}) => ($location ? dotLocation[$location] : '');
