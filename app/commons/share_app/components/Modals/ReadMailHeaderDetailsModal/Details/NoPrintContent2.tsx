import { getMailField } from 'commons/share_app/containers/ReadMail/selectors';
import { ReadMailParsed } from 'commons/share_app/containers/ReadMail/types';
import { FC, memo } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

import { isPrinting as isPrintingSelector } from 'containers/App/selectors';

import ReplyTo from './ReplyTo';

const NoPrintContent2: FC = () => {
  const isPrinting = useSelector(isPrintingSelector);
  const from = useSelector(getMailField, 'from') as ReadMailParsed['from'];

  const replyTo = useSelector(
    getMailField,
    'reply_to',
  ) as ReadMailParsed['reply_to'];

  return !isPrinting && from.email !== replyTo.email ? (
    <ReplyTo replyTo={replyTo} />
  ) : null;
};

export default memo(NoPrintContent2);
