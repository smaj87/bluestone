import { AppBrand } from 'commons/AppContainer/types';
import { css } from 'commons/Goober';
import { SlotRightStyledProps } from 'commons/share_app/components/hooks/useAds/elements/SlotRight/styles';
import {
  SLOT_RIGHT_LG,
  SLOT_RIGHT_WIDTH_CSS,
  SLOT_RIGHT_WIDTH_LG_CSS,
} from 'commons/share_app/components/hooks/useAds/Onet/SlotRight/constants';

// px - reklama musi mieć stałe wymiary

export const slotRightOnetStyles = css`
  width: ${SLOT_RIGHT_WIDTH_CSS}px;

  @media screen and (min-width: ${SLOT_RIGHT_LG}px) {
    width: ${SLOT_RIGHT_WIDTH_LG_CSS}px;
  }
`;

export const slotRightGazetaStyles = css`
  width: 300px;
`;

export const slotRightBrands: Record<AppBrand, any> = {
  onet: css`
    ${slotRightOnetStyles}
  `,
  gazeta: css`
    ${slotRightGazetaStyles}
  `,
};

export const slotRightBrandsFunc = ({
  $brand,
}: {
  $brand?: SlotRightStyledProps['$brand'];
}) => ($brand ? slotRightBrands[$brand] : slotRightBrands.onet);
