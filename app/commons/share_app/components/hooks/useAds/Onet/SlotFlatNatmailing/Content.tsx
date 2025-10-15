import { FC, memo, useMemo } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

import {
  GENERIC_INBOX_TPLCODE,
  INBOX_FEED_TPLCODE,
  INBOX_FEED_TPLCODE_NEW,
  INBOX_TPLCODE,
} from './constants';
import GenericInbox from './GenericInbox';
import InboxTemplate from './Inbox';
import InboxFeed from './InboxFeed';
import { getTemplateCode } from './selectors';

const Content: FC = () => {
  const tplCode = useSelector(getTemplateCode);

  return useMemo(() => {
    switch (tplCode) {
      case INBOX_TPLCODE:
        return <InboxTemplate />;
      case INBOX_FEED_TPLCODE:
      case INBOX_FEED_TPLCODE_NEW:
        return <InboxFeed />;
      case GENERIC_INBOX_TPLCODE:
        return <GenericInbox />;
      default:
    }

    return null;
  }, [tplCode]);
};

export default memo(Content);
