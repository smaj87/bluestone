import { LIST_ITEM_IS_CHECKED_CLASS } from 'commons/share_app/components/ListElements/List/constants';
import { isCheckedById } from 'commons/share_app/containers/Attachments/selectors';
import { FC, memo, RefObject, useEffect } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

interface Props {
  id: string;
  itemRef: RefObject<HTMLLIElement | undefined>;
}

const CheckedHandler: FC<Props> = ({ id, itemRef }) => {
  const isChecked = useSelector(isCheckedById, id);

  useEffect(() => {
    itemRef.current?.classList.toggle(LIST_ITEM_IS_CHECKED_CLASS, isChecked);
  }, [isChecked]);

  return null;
};

export default memo(CheckedHandler);
