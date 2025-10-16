import { Product as ProductType } from 'db/types';

import { updateProduct } from 'containers/Products/actions';
import { getProductByName } from 'containers/Products/selectors';
import { FC, memo, useCallback } from 'utils/react';
import { useSelector } from 'utils/react-redux';
import { dispatch } from 'utils/store';

import Description from './ProductElements/Description';
import Images from './ProductElements/Images';
import Number from './ProductElements/Number';

interface Props {
  name: string;
}

const Product: FC<Props> = ({ name }) => {
  const product = useSelector(getProductByName, name);

  const onUpdate = useCallback(
    (key: keyof ProductType, value: string | ProductType['images']) => {
      dispatch(updateProduct(name, { [key]: value }));
    },
    [name],
  );

  if (!product) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-8">
        <p className="text-gray-500 text-center">
          Produkt nie został znaleziony
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <Number number={product.number} onUpdate={onUpdate} />
      <Description description={product.description} onUpdate={onUpdate} />
      <Images images={product.images} onUpdate={onUpdate} />
    </div>
  );
};

export default memo(Product);
