import { ListItemAreaContentStyled } from 'commons/share_app/components/ListElements/List/styles';
import { FC, memo } from 'commons/utils/react';

import { AttachmentSubjectStyled } from './styles';

interface Props {
  subject: string;
}

const AttachmentSubject: FC<Props> = ({ subject }) => (
  <AttachmentSubjectStyled>
    <ListItemAreaContentStyled>{subject}</ListItemAreaContentStyled>
  </AttachmentSubjectStyled>
);

export default memo(AttachmentSubject);
