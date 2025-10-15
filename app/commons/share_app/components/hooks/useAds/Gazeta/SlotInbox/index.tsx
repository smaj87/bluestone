import { getIsMobile } from 'commons/hooks/useUserConfig/utils';
import { SlotInboxStyled } from 'commons/share_app/components/hooks/useAds/elements/SlotInbox/styles';
import SlotInboxAdPlug from 'commons/share_app/components/hooks/useAds/elements/SlotInboxAdPlug';
import {
  destroyById,
  fetchBy,
} from 'commons/share_app/components/hooks/useAds/Gazeta/utils';
import { FC, useEffect } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

import { SLOTS_INBOX } from '../constants';
import { SlotInboxKeys } from '../types';

interface Props {
  pos: SlotInboxKeys;
}

const SlotInbox: FC<Props> = ({ pos }) => {
  const isMobile = useSelector(getIsMobile);

  const slot = SLOTS_INBOX?.[pos]?.[isMobile ? 'mobile' : 'desktop'];

  useEffect(() => {
    fetchBy(slot.id, slot.name);

    return () => {
      destroyById(slot.id);
    };
  }, [pos, slot]);

  return slot ? (
    <SlotInboxStyled>
      <div id={slot.id} />
      <SlotInboxAdPlug />
    </SlotInboxStyled>
  ) : null;
};

export default SlotInbox;
