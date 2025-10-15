import { LIST_ITEM_IS_HOVER_CLASS } from 'commons/share_app/components/ListElements/List/constants';
import { isHoverById } from 'commons/share_app/containers/Attachments/selectors';
import { FC, memo, RefObject, useEffect } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

interface Props {
  id: string;
  itemRef: RefObject<HTMLLIElement | undefined>;
}

const HoverHandler: FC<Props> = ({ id, itemRef }) => {
  const isHover = useSelector(isHoverById, id);

  useEffect(() => {
    itemRef.current?.classList.toggle(LIST_ITEM_IS_HOVER_CLASS, isHover);
  }, [isHover]);

  return null;
};

export default memo(HoverHandler);
