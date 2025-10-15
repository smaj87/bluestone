import { css } from 'commons/Goober';
import { SPECIAL_TEXT_CLASS } from 'commons/share_app/components/hooks/useAds/elements/AdBlock/constants';
import { SLOT_RIGHT_LG } from 'commons/share_app/components/hooks/useAds/Onet/SlotRight/constants';

import { AdBlockStyledProps } from './styles';
import { Placement } from './types';

export const verticalStyles = css`
  display: flex;
  flex-direction: column;
  row-gap: 2.4rem;
  justify-content: center;
  align-items: center;
  padding: 2.4rem 1.2rem;
  height: 100%;
  text-align: center;

  h3 {
    font-size: 2.2rem;
  }

  p {
    font-size: 2rem;

    &.${SPECIAL_TEXT_CLASS} {
      font-size: 2.2rem;
    }
  }

  @media screen and (min-width: ${SLOT_RIGHT_LG}px) {
    padding-inline: 2.4rem;
  }
`;

export const horizontalStyles = css`
  display: grid;
  grid-template-columns: 29.6rem 1fr;
  grid-column-gap: 2.4rem;
  justify-content: flex-start;
  align-items: center;
  padding: 2.4rem;
  text-align: left;

  h3 {
    font-size: 3.2rem;
  }

  p {
    font-size: 2.2rem;

    &.${SPECIAL_TEXT_CLASS} {
      font-size: 2.4rem;
    }
  }
`;

export const adBlockPlacement: Record<Placement, any> = {
  horizontal: horizontalStyles,
  vertical: verticalStyles,
};

export const adBlockPlacementFunc = ({
  $placement,
}: {
  $placement?: AdBlockStyledProps['$placement'];
}) => ($placement ? adBlockPlacement[$placement] : adBlockPlacement.horizontal);

export const verticalDescriptionStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  row-gap: 2.4rem;
  white-space: pre-line;

  @media screen and (min-width: ${SLOT_RIGHT_LG}px) {
    white-space: normal;
  }
`;

export const horizontalDescriptionStyles = css`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  grid-gap: 1.2rem;
  justify-content: flex-start;
`;

export const adBlockDescriptionPlacement: Record<Placement, any> = {
  horizontal: horizontalDescriptionStyles,
  vertical: verticalDescriptionStyles,
};

export const adBlockDescriptionPlacementFunc = ({
  $placement,
}: {
  $placement?: AdBlockStyledProps['$placement'];
}) =>
  $placement
    ? adBlockDescriptionPlacement[$placement]
    : adBlockDescriptionPlacement.horizontal;
