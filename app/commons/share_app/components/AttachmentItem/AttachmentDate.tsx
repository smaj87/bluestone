import { ListItemAreaContentStyled } from 'commons/share_app/components/ListElements/List/styles';
import { FC, memo } from 'commons/utils/react';

import DateTime from 'components/DateTime';

import { AttachmentDateStyled } from './styles';

interface Props {
  date: string;
}

const AttachmentDate: FC<Props> = ({ date }) => (
  <AttachmentDateStyled>
    <ListItemAreaContentStyled>
      <DateTime dateTime={date} />
    </ListItemAreaContentStyled>
  </AttachmentDateStyled>
);

export default memo(AttachmentDate);
