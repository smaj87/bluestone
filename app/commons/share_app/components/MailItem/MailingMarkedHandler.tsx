import { LIST_ITEM_IS_MAILING_MARKED_CLASS } from 'commons/share_app/components/ListElements/List/constants';
import { isMailingMarked as isMailingMarkedSelector } from 'commons/share_app/containers/Mails/selectors';
import { FC, memo, useContext, useEffect } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

import { ItemRefContext } from './constants';

interface Props {
  id: number;
}

const MailingMarkedHandler: FC<Props> = ({ id }) => {
  const isMailingMarked = useSelector(isMailingMarkedSelector, id);
  const itemRef = useContext(ItemRefContext);

  useEffect(() => {
    itemRef?.current?.classList.toggle(
      LIST_ITEM_IS_MAILING_MARKED_CLASS,
      isMailingMarked,
    );
  }, [isMailingMarked]);

  return null;
};

export default memo(MailingMarkedHandler);
