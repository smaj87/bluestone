import Content from 'components/Products/Content';
import { FC, memo } from 'utils/react';

import Hooks from './Hooks';

const Products: FC = () => (
  <div>
    <Hooks />
    <h1 className="text-2xl font-bold mb-4">Products</h1>
    <Content />
  </div>
);

export default memo(Products);
