import PartialListParent from 'commons/ListIntersectionObserver/PartialList';
import { Group } from 'commons/ListIntersectionObserver/types';
import { AttachmentsRouterIsShowContext } from 'commons/share_app/components/RouterHelpers/constants';
import { FC, memo, useContext } from 'commons/utils/react';

import AttachmentItemsIntersectionLoader from './AttachmentItemsIntersectionLoader';

interface Props {
  group: Group;
  observer: IntersectionObserver;
}

const PartialList: FC<Props> = ({ group, observer }) => (
  <PartialListParent
    group={group}
    isShow={useContext(AttachmentsRouterIsShowContext)}
    observer={observer}
  >
    <AttachmentItemsIntersectionLoader group={group} />
  </PartialListParent>
);

export default memo(PartialList);
