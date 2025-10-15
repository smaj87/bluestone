import { LIST_ITEM_IS_HOVER_CLASS } from 'commons/share_app/components/ListElements/List/constants';
import { isHoverById } from 'commons/share_app/containers/Mails/selectors';
import { FC, memo, useContext, useEffect } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

import { ItemRefContext } from './constants';

interface Props {
  id: number;
}

const HoverHandler: FC<Props> = ({ id }) => {
  const isHover = useSelector(isHoverById, id);
  const itemRef = useContext(ItemRefContext);

  useEffect(() => {
    itemRef?.current?.classList.toggle(LIST_ITEM_IS_HOVER_CLASS, isHover);
  }, [isHover]);

  return null;
};

export default memo(HoverHandler);
