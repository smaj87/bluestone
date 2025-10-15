import { css } from 'commons/Goober';
import { AdSize } from 'commons/share_app/components/hooks/useAds/types';
import { screenMdAbove } from 'commons/utils/breakpoints';

import {
  AD_PLUG_INBOX_LG_ABOVE_MD_HEIGHT_CSS,
  AD_PLUG_INBOX_MD_ABOVE_MD_HEIGHT_CSS,
  AD_PLUG_INBOX_SM_ABOVE_MD_HEIGHT_CSS,
} from './constants';
import { SlotInboxAdPlugStyledProps } from './styles';

export const sizeSm = css`
  @media screen and (min-width: ${screenMdAbove}) {
    height: ${AD_PLUG_INBOX_SM_ABOVE_MD_HEIGHT_CSS};
  }
`;

export const sizeMd = css`
  @media screen and (min-width: ${screenMdAbove}) {
    height: ${AD_PLUG_INBOX_MD_ABOVE_MD_HEIGHT_CSS};
  }
`;

export const sizeLg = css`
  @media screen and (min-width: ${screenMdAbove}) {
    height: ${AD_PLUG_INBOX_LG_ABOVE_MD_HEIGHT_CSS};
  }
`;

export const adPlugInboxSizes: Record<AdSize, any> = {
  sm: sizeSm,
  md: sizeMd,
  lg: sizeLg,
};

export const adPlugInboxSizesFunc = ({
  $size,
}: {
  $size?: SlotInboxAdPlugStyledProps['$size'];
}) => ($size ? adPlugInboxSizes[$size] : adPlugInboxSizes.md);
