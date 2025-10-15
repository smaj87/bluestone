import { css } from 'commons/Goober';
import {
  AD_PLUG_TOP_LG_HEIGHT_CSS,
  AD_PLUG_TOP_MD_HEIGHT_CSS,
  AD_PLUG_TOP_SM_HEIGHT_CSS,
} from 'commons/share_app/components/hooks/useAds/Onet/SlotTop/constants';

import { AdBlockStyledProps } from './styles';
import { Size } from './types';

export const sizeTopSm = css`
  height: ${AD_PLUG_TOP_SM_HEIGHT_CSS};
`;

export const sizeTopMd = css`
  height: ${AD_PLUG_TOP_MD_HEIGHT_CSS};
`;

export const sizeTopLg = css`
  height: ${AD_PLUG_TOP_LG_HEIGHT_CSS};
`;

export const adBlockTopSizes: Record<Size, any> = {
  sm: sizeTopSm,
  md: sizeTopMd,
  lg: sizeTopLg,
};

export const adBlockTopSizesFunc = ({
  $size,
}: {
  $size?: AdBlockStyledProps['$size'];
}) => ($size ? adBlockTopSizes[$size] : adBlockTopSizes.md);
