import {
  ReadMailFromBasicStyled,
  ReadMailFromNameStyled,
  ReadMailFromStyled,
} from 'commons/share_app/components/ReadMail/ReadMailHeader/styles';
import { FC, memo } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

import { getValueByField } from '../selectors';

const InboxFrom: FC = () => {
  const from = useSelector(getValueByField, 'sender');

  return (
    <ReadMailFromStyled data-cypress="INBOX-DETAIL-AUTHOR">
      <ReadMailFromBasicStyled>
        <ReadMailFromNameStyled>{from}</ReadMailFromNameStyled>
      </ReadMailFromBasicStyled>
    </ReadMailFromStyled>
  );
};

export default memo(InboxFrom);
