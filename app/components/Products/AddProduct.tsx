import AddButton from 'components/AddButton';
import { addProduct } from 'containers/Products/actions';
import { generateUniqueName } from 'containers/Products/utils';
import history from 'utils/history';
import { FC, memo, useCallback, useState } from 'utils/react';
import { dispatch } from 'utils/store';

const AddProduct: FC = () => {
  const [isAdding, setIsAdding] = useState(false);

  const onAddProduct = useCallback(async () => {
    setIsAdding(true);

    try {
      // Generuj unikalny name dla nowego produktu
      const name = await generateUniqueName();

      // Dodaj nowy produkt z pustymi polami
      await dispatch(
        addProduct({
          description: '',
          images: [],
          name,
          number: '',
        }),
      );

      // Przekieruj na stronę edycji produktu
      history.push(`/product/${name}`);
    } catch {}

    setIsAdding(false);
  }, []);

  return (
    <AddButton
      isAdding={isAdding}
      label="Dodaj produkt"
      onClick={onAddProduct}
    />
  );
};

export default memo(AddProduct);
