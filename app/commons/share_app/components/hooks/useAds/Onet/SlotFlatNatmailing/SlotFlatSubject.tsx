import { ListItemAreaContentStyled } from 'commons/share_app/components/ListElements/List/styles';
import { FC, memo } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

import { SlotFlatSubjectStyled } from './styles';
import { Selector } from './types';

interface Props {
  selector: Selector;
}

const SlotFlatSubjectColumn: FC<Props> = ({ selector }) => {
  const title = useSelector(selector, 'title');

  return (
    <SlotFlatSubjectStyled data-cypress="SLOT-INBOX-SUBJECT">
      <ListItemAreaContentStyled title={title}>
        <span>{title}</span>
      </ListItemAreaContentStyled>
    </SlotFlatSubjectStyled>
  );
};

export default memo(SlotFlatSubjectColumn);
