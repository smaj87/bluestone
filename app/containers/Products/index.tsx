import AddProduct from 'components/Products/AddProduct';
import Content from 'components/Products/Content';
import { FC, memo } from 'utils/react';

import Hooks from './Hooks';

const Products: FC = () => (
  <div>
    <Hooks />
    <div className="flex items-center justify-between mb-4">
      <h1 className="text-2xl font-bold">Products</h1>
      <AddProduct />
    </div>
    <Content />
  </div>
);

export default memo(Products);
