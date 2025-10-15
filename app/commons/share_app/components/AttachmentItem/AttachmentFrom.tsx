import { ListItemAreaContentStyled } from 'commons/share_app/components/ListElements/List/styles';
import { FC, memo } from 'commons/utils/react';

import { AttachmentFromStyled } from './styles';

interface Props {
  from: string;
}

const AttachmentFrom: FC<Props> = ({ from }) => (
  <AttachmentFromStyled>
    <ListItemAreaContentStyled>{from}</ListItemAreaContentStyled>
  </AttachmentFromStyled>
);

export default memo(AttachmentFrom);
