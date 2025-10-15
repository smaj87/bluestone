import { isVisibleByGroupId } from 'containers/Products/selectors';
import { Group } from 'containers/Products/types';
import { FC, memo } from 'utils/react';
import { useSelector } from 'utils/react-redux';

import ProductItem from './ProductItem';

interface Props {
  group: Group;
}

const ProductItemsIntersectionLoader: FC<Props> = ({ group }) =>
  useSelector(isVisibleByGroupId, group.id) ? (
    <>
      {group.items.map((name) => (
        <ProductItem key={name} name={name} />
      ))}
    </>
  ) : null;

export default memo(ProductItemsIntersectionLoader);
