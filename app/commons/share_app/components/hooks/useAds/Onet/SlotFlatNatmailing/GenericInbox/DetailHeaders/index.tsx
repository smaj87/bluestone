import {
  ReadMailBottomStyled,
  ReadMailHeaderDetailsStyled,
  ReadMailHeaderStyled,
  ReadMailTopStyled,
} from 'commons/share_app/components/ReadMail/ReadMailHeader/styles';
import { FC, memo } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

import { getValueByField } from '../selectors';
import Bimi from './Bimi';
import InboxFrom from './InboxFrom';
import InboxTo from './InboxTo';

const Header: FC = () => {
  const title = useSelector(getValueByField, 'title');

  return (
    <ReadMailHeaderStyled data-cypress="INBOX-DETAIL-HEADER">
      <ReadMailTopStyled>
        {title ? <h2 data-cypress="INBOX-DETAIL-TITLE">{title}</h2> : null}
      </ReadMailTopStyled>
      <hr />
      <ReadMailBottomStyled>
        <Bimi />
        <ReadMailHeaderDetailsStyled>
          <InboxFrom />
          <InboxTo />
        </ReadMailHeaderDetailsStyled>
      </ReadMailBottomStyled>
    </ReadMailHeaderStyled>
  );
};

export default memo(Header);
