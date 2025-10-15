import { css } from 'commons/Goober';
import { AdSize } from 'commons/share_app/components/hooks/useAds/types';
import { screenMdAbove } from 'commons/utils/breakpoints';

import {
  SLOT_INBOX_LG_HEIGHT_ABOVE_MD_CSS,
  SLOT_INBOX_MD_HEIGHT_ABOVE_MD_CSS,
  SLOT_INBOX_SM_HEIGHT_ABOVE_MD_CSS,
} from './constants';
import { SlotInboxStyledProps } from './styles';

export const sizeSm = css`
  @media screen and (min-width: ${screenMdAbove}) {
    height: ${SLOT_INBOX_SM_HEIGHT_ABOVE_MD_CSS};
  }
`;

export const sizeMd = css`
  @media screen and (min-width: ${screenMdAbove}) {
    height: ${SLOT_INBOX_MD_HEIGHT_ABOVE_MD_CSS};
  }
`;

export const sizeLg = css`
  @media screen and (min-width: ${screenMdAbove}) {
    height: ${SLOT_INBOX_LG_HEIGHT_ABOVE_MD_CSS};
  }
`;

export const slotInboxSizes: Record<AdSize, any> = {
  sm: sizeSm,
  md: sizeMd,
  lg: sizeLg,
};

export const slotInboxSizesFunc = ({
  $size,
}: {
  $size?: SlotInboxStyledProps['$size'];
}) => ($size ? slotInboxSizes[$size] : slotInboxSizes.md);
