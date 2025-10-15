import styled from 'commons/Goober';
import Icon, { IconProps } from 'commons/Icon';
import { slotInboxSizesFunc } from 'commons/share_app/components/hooks/useAds/elements/SlotInbox/sizes';
import { AdSize } from 'commons/share_app/components/hooks/useAds/types';
import { screenMdUnder } from 'commons/utils/breakpoints';

export const SlotFlatIcon = styled(Icon)<IconProps>`
  font-size: 1.4rem;
`;

export interface SlotInboxStyledProps {
  $size?: AdSize;
}

export const SlotInboxStyled = styled('div')<SlotInboxStyledProps>`
  position: relative;
  width: 100%;
  height: 79px; // wartość zależna od listy maili
  overflow: hidden;
  > div:not([id]) {
    height: calc(100% - 1px);
    &:empty {
      display: none;
    }
  }
  iframe {
    max-width: 100%;
  }
  @media screen and (max-width: ${screenMdUnder}) {
    &:before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      display: block;
      width: 100%;
      height: 1px;
      background: var(--list-item-border);
    }
  }

  ${slotInboxSizesFunc};
`;

export const MobileCounterInfoStyled = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  height: 100%;
`;

export const MobileImageStyled = styled('div')`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr auto;
  grid-row-gap: 0.4rem;
  justify-content: flex-end;
  width: max-content;
  height: 100%;
  overflow: hidden;
`;
