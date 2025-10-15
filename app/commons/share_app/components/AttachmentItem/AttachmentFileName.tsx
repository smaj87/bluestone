import { ListItemAreaContentStyled } from 'commons/share_app/components/ListElements/List/styles';
import { FC, memo } from 'commons/utils/react';

import { AttachmentFileNameStyled } from './styles';

interface Props {
  fileName: string;
}

const AttachmentFileName: FC<Props> = ({ fileName }) => (
  <AttachmentFileNameStyled>
    <ListItemAreaContentStyled>{fileName}</ListItemAreaContentStyled>
  </AttachmentFileNameStyled>
);

export default memo(AttachmentFileName);
