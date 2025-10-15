import Content from 'components/Product/Content';
import Hooks from 'containers/Products/Hooks';
import history from 'utils/history';
import { FC, memo, useCallback } from 'utils/react';

interface ProductProps {
  name: string;
}

const Product: FC<ProductProps> = ({ name }) => {
  const onBack = useCallback(() => {
    history.push('/');
  }, []);

  return (
    <div>
      <Hooks />
      <button
        aria-label="Powrót"
        className="mb-4 text-xl"
        onClick={onBack}
        type="button"
      >
        ← Powrót
      </button>
      <h1 className="text-2xl font-bold mb-4">Product: {name}</h1>
      <Content name={name} />
    </div>
  );
};

export default memo(Product);
