import { ListItemAreaContentStyled } from 'commons/share_app/components/ListElements/List/styles';
import { FC, memo } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

import { SlotFlatFromStyled } from './styles';
import { Selector } from './types';

interface Props {
  selector: Selector;
}

const SlotFrom: FC<Props> = ({ selector }) => {
  const sender = useSelector(selector, 'sender');

  return (
    <SlotFlatFromStyled data-cypress="SLOT-INBOX-SENDER">
      <ListItemAreaContentStyled>
        <span>{sender}</span>
      </ListItemAreaContentStyled>
    </SlotFlatFromStyled>
  );
};

export default memo(SlotFrom);
