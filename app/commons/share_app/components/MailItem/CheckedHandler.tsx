import { LIST_ITEM_IS_CHECKED_CLASS } from 'commons/share_app/components/ListElements/List/constants';
import { isCheckedById } from 'commons/share_app/containers/Mails/selectors';
import { FC, memo, useContext, useEffect } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

import { ItemRefContext } from './constants';

interface Props {
  id: number;
}

const CheckedHandler: FC<Props> = ({ id }) => {
  const isChecked = useSelector(isCheckedById, id);
  const itemRef = useContext(ItemRefContext);

  useEffect(() => {
    itemRef?.current?.classList.toggle(LIST_ITEM_IS_CHECKED_CLASS, isChecked);
  }, [isChecked]);

  return null;
};

export default memo(CheckedHandler);
