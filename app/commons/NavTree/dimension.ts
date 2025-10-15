import { css } from 'commons/Goober';

import { NavTreeItemStylesProps } from './styles';
import { NavTreeDimension } from './types';

export const navTreeWidth: Record<NavTreeDimension, any> = {
  fit: css`
    width: fit-content;
  `,
  full: css`
    width: 100%;
  `,
};

export const navTreeWidthFunc = ({
  $width,
}: {
  $width?: NavTreeItemStylesProps['$width'];
}) => ($width ? navTreeWidth[$width] : navTreeWidth.fit);

export const navTreeHeight: Record<NavTreeDimension, any> = {
  fit: css`
    height: fit-content;
  `,
  full: css`
    height: 100%;
  `,
};

export const navTreeHeightFunc = ({
  $height,
}: {
  $height?: NavTreeItemStylesProps['$height'];
}) => ($height ? navTreeHeight[$height] : navTreeHeight.fit);
