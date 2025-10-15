import { Group } from 'commons/ListIntersectionObserver/types';
import AttachmentItem from 'commons/share_app/components/AttachmentItem';
import { FC, memo } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

import { isVisibleByGroupId } from './selectors';

interface Props {
  group: Group;
}
const AttachmentItemsIntersectionLoader: FC<Props> = ({ group }) =>
  useSelector(isVisibleByGroupId, group.id) ? (
    <>
      {group.items.map((item) => (
        <AttachmentItem key={item.id} id={item.id as string} />
      ))}
    </>
  ) : null;

export default memo(AttachmentItemsIntersectionLoader);
