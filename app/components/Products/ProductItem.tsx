import DeleteIcon from 'components/DeleteIcon';
import { deleteProduct } from 'containers/Products/actions';
import { ITEM_HEIGHT } from 'containers/Products/constants';
import { getProductByName } from 'containers/Products/selectors';
import history from 'utils/history';
import { FC, memo, useCallback } from 'utils/react';
import { useSelector } from 'utils/react-redux';
import { dispatch } from 'utils/store';

interface Props {
  name: string;
}

const style = { height: ITEM_HEIGHT };

const ProductItem: FC<Props> = ({ name }) => {
  const product = useSelector(getProductByName, name);

  const onClick = useCallback(() => {
    history.push(`/product/${name}`);
  }, [name]);

  const onDelete = useCallback(
    async (e: MouseEvent) => {
      e.stopPropagation();

      // eslint-disable-next-line no-alert
      // if (window.confirm(`Czy na pewno chcesz usunąć produkt "${name}"?`)) {
      dispatch(deleteProduct(name));
      // }
    },
    [name],
  );

  return (
    <div
      className="hidden group-[.visible]:flex items-center gap-6 px-4 border-b border-gray-200 hover:bg-gray-50 transition-colors cursor-pointer"
      onClick={onClick}
      role="button"
      style={style}
      tabIndex={0}
    >
      <div className="w-42 py-2 flex-shrink-0">
        <span className="text-gray-900 font-medium">{product.name}</span>
      </div>
      <div className="flex-1 py-2 min-w-0">
        <span className="text-gray-700 block truncate" title={product.number}>
          {product.number}
        </span>
      </div>
      <div className="w-30 py-2 flex-shrink-0">
        <span className="text-gray-700">
          Ilość zdjęć: {product.images.length}
        </span>
      </div>
      <div className="w-22 py-2 text-right flex-shrink-0">
        <button
          className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition-colors text-sm"
          onClick={onDelete}
          type="button"
        >
          <DeleteIcon className="w-4 h-4 mr-1 inline" />
          Usuń
        </button>
      </div>
    </div>
  );
};

export default memo(ProductItem);
