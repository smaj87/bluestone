import { Group } from 'containers/Products/types';
import { FC, memo } from 'utils/react';

import PartialListHelper from './PartialListHelper';
import ProductItemsIntersectionLoader from './ProductItemsIntersectionLoader';

interface Props {
  group: Group;
  observer: IntersectionObserver;
}

const PartialList: FC<Props> = ({ group, observer }) => (
  <PartialListHelper group={group} observer={observer}>
    <ProductItemsIntersectionLoader group={group} />
  </PartialListHelper>
);

export default memo(PartialList);
