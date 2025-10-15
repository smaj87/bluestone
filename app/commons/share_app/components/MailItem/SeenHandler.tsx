import { LIST_ITEM_IS_UNSEEN_CLASS } from 'commons/share_app/components/ListElements/List/constants';
import { isMailSeen } from 'commons/share_app/containers/Mails/selectors';
import { FC, memo, useContext, useEffect } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

import { ItemRefContext } from './constants';

interface Props {
  id: number;
}

const SeenHandler: FC<Props> = ({ id }) => {
  const isSeen = useSelector(isMailSeen, id);
  const itemRef = useContext(ItemRefContext);

  useEffect(() => {
    itemRef?.current?.classList.toggle(LIST_ITEM_IS_UNSEEN_CLASS, !isSeen);
  }, [isSeen]);

  return null;
};

export default memo(SeenHandler);
