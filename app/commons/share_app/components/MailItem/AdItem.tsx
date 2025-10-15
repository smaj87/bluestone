import { GroupItem } from 'commons/ListIntersectionObserver/types';
import SlotRight from 'commons/share_app/components/hooks/useAds/Onet/SlotsMobile/List/SlotRight';
import SlotRight2 from 'commons/share_app/components/hooks/useAds/Onet/SlotsMobile/List/SlotRight2';
import SlotTop from 'commons/share_app/components/hooks/useAds/Onet/SlotsMobile/List/SlotTop';
import { FC, memo } from 'commons/utils/react';

import { AdItemStyled } from './styles';

interface Props {
  slot: GroupItem['slot'];
  pos: GroupItem['pos'];
  size: GroupItem['size'];
}

const AdItem: FC<Props> = ({ pos, size, slot }) => (
  <AdItemStyled $size={size!}>
    {slot === 'top' ? <SlotTop /> : null}
    {slot === 'right' ? <SlotRight /> : null}
    {slot === 'right2' && pos !== undefined ? <SlotRight2 pos={pos} /> : null}
  </AdItemStyled>
);

export default memo(AdItem);
