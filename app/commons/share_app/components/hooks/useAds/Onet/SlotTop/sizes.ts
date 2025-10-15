import { css } from 'commons/Goober';
import { AdSize } from 'commons/share_app/components/hooks/useAds/types';

import {
  SLOT_TOP_LG_HEIGHT_CSS,
  SLOT_TOP_MD_HEIGHT_CSS,
  SLOT_TOP_SM_HEIGHT_CSS,
} from './constants';
import { SlotTopStyledProps } from './styles';

export const sizeSm = css`
  height: ${SLOT_TOP_SM_HEIGHT_CSS};
`;

export const sizeMd = css`
  height: ${SLOT_TOP_MD_HEIGHT_CSS};
`;

export const sizeLg = css`
  height: ${SLOT_TOP_LG_HEIGHT_CSS};
`;

export const slotTopSizes: Record<AdSize, any> = {
  sm: sizeSm,
  md: sizeMd,
  lg: sizeLg,
};

export const slotTopSizesFunc = ({
  $size,
}: {
  $size?: SlotTopStyledProps['$size'];
}) => ($size ? slotTopSizes[$size] : slotTopSizes.md);
