import { ListItemAreaContentStyled } from 'commons/share_app/components/ListElements/List/styles';
import { FC, memo } from 'commons/utils/react';

import HighlightSearchText from './HighlightSearchText';
import { MailSubjectStyled } from './styles';

interface Props {
  subject: string;
}

const MailSubject: FC<Props> = ({ subject }) => (
  <MailSubjectStyled>
    <ListItemAreaContentStyled>
      <HighlightSearchText value={subject} />
    </ListItemAreaContentStyled>
  </MailSubjectStyled>
);

export default memo(MailSubject);
