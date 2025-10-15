import { FC, memo } from 'utils/react';

interface ProductProps {
  name: string;
}

const Product: FC<ProductProps> = ({ name }) => (
  <div>
    <h1 className="text-2xl font-bold mb-4">Product: {name}</h1>
    {/* Widok pojedynczego produktu - do implementacji */}
  </div>
);

export default memo(Product);
