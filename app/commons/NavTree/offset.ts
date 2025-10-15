import { css } from 'commons/Goober';
import {
  focusVisibleInsideStyles,
  focusVisibleStyles,
} from 'commons/utils/commonStyles';

import { NavTreeItemStylesProps } from './styles';
import { NavTreeOffset } from './types';

export const navTreeOffset: Record<NavTreeOffset, any> = {
  inside: css`
    ${focusVisibleInsideStyles}
  `,
  outside: css`
    ${focusVisibleStyles}
  `,
};

export const navTreeOffsetFunc = ({
  $offset,
}: {
  $offset?: NavTreeItemStylesProps['$offset'];
}) => ($offset ? navTreeOffset[$offset] : navTreeOffset.outside);
