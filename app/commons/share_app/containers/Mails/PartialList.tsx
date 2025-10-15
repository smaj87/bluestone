import PartialListParent from 'commons/ListIntersectionObserver/PartialList';
import { Group } from 'commons/ListIntersectionObserver/types';
import { MailsRouterIsShowContext } from 'commons/share_app/components/RouterHelpers/constants';
import { FC, memo, useContext } from 'commons/utils/react';

import MailItemsIntersectionLoader from './MailItemsIntersectionLoader';

interface Props {
  group: Group;
  observer: IntersectionObserver;
}

const PartialList: FC<Props> = ({ group, observer }) => (
  <PartialListParent
    group={group}
    isShow={useContext(MailsRouterIsShowContext)}
    observer={observer}
  >
    <MailItemsIntersectionLoader group={group} />
  </PartialListParent>
);

export default memo(PartialList);
