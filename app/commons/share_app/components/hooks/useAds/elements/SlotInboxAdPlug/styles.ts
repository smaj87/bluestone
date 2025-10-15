import { adPlugLabelStyles } from 'commons/AdPlug/styles';
import styled from 'commons/Goober';
import { adPlugInboxSizesFunc } from 'commons/share_app/components/hooks/useAds/elements/SlotInboxAdPlug/sizes';
import { AdSize } from 'commons/share_app/components/hooks/useAds/types';

export interface SlotInboxAdPlugStyledProps {
  $size?: AdSize;
}

export const SlotInboxAdPlugStyled = styled('div')<SlotInboxAdPlugStyledProps>`
  ${adPlugLabelStyles};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1px;
  width: 100%;
  height: 78px;
  border-bottom: 1px solid var(--list-item-border);
  background: var(--ad-plug-bg);

  ${adPlugInboxSizesFunc};
`;
