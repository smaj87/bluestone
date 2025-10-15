import { Group, GroupItem } from 'commons/ListIntersectionObserver/types';
import MailItem from 'commons/share_app/components/MailItem';
import AdItem from 'commons/share_app/components/MailItem/AdItem';
import { FC, memo } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

import { isVisibleByGroupId } from './selectors';

interface Props {
  group: Group;
}

const getComponent = (groupItem: GroupItem) => {
  switch (groupItem.type) {
    case 'item':
      return <MailItem key={groupItem.id} id={groupItem.id as number} />;
    case 'ad':
      return (
        <AdItem
          key={groupItem.id}
          pos={groupItem.pos}
          size={groupItem.size}
          slot={groupItem.slot}
        />
      );
    default:
      return null;
  }
};

const MailItemsIntersectionLoader: FC<Props> = ({ group }) =>
  useSelector(isVisibleByGroupId, group.id) ? (
    <>{group.items.map((groupItem) => getComponent(groupItem))}</>
  ) : null;

export default memo(MailItemsIntersectionLoader);
