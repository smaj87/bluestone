import { AttachmentSizeStyled } from 'commons/share_app/components/AttachmentItem/styles';
import { ListItemAreaContentStyled } from 'commons/share_app/components/ListElements/List/styles';
import { FC, memo } from 'commons/utils/react';

import Size from 'components/Size';

interface Props {
  size: number;
}

const AttachmentSize: FC<Props> = ({ size }) => (
  <AttachmentSizeStyled>
    <ListItemAreaContentStyled>
      <Size bytes={size} />
    </ListItemAreaContentStyled>
  </AttachmentSizeStyled>
);

export default memo(AttachmentSize);
