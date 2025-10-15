import useTranslations from 'commons/hooks/useTranslations';
import {
  getMailField,
  getReceivers,
} from 'commons/share_app/containers/ReadMail/selectors';
import { ReadMailParsed } from 'commons/share_app/containers/ReadMail/types';
import { FC, memo } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

import {
  DETAILED_LABEL_MAILBOX_ID,
  DETAILED_LABEL_RECEIVER_ID,
  DETAILED_LABEL_SENT_ID,
  DETAILED_LABEL_SUBJECT_ID,
} from './constants';
import Date from './Date';
import DetailsItem from './DetailsItem';
import NoPrintContent from './NoPrintContent';
import NoPrintContent2 from './NoPrintContent2';
import PrintContent from './PrintContent';
import Receivers from './Receivers';
import Sender from './Sender';
import { DetailsListStyled } from './styles';

const Details: FC = () => {
  const t = useTranslations();
  const mid = useSelector(getMailField, 'mid') as ReadMailParsed['mid'];
  const receivers = useSelector(getReceivers);

  const subject = useSelector(
    getMailField,
    'subject',
  ) as ReadMailParsed['subject'];

  const sentDate = useSelector(
    getMailField,
    'sent_date',
  ) as ReadMailParsed['sent_date'];

  const receivedDate = useSelector(
    getMailField,
    'received_date',
  ) as ReadMailParsed['received_date'];

  const mailbox = receivers.mainReceiver.email
    ? receivers.mainReceiver
    : receivers.otherReceivers[0];

  return mid > 0 ? (
    <DetailsListStyled>
      <Date
        cypressId="SEND-DATE"
        dateString={sentDate}
        id={DETAILED_LABEL_SENT_ID}
        label={t('ReadMail/labelSent')}
      />
      <Date
        cypressId="RECEIVE-DATE"
        dateString={receivedDate}
        id={DETAILED_LABEL_RECEIVER_ID}
        label={t('ReadMail/labelReceive')}
      />
      <DetailsItem
        cypressId="MAILBOX"
        id={DETAILED_LABEL_MAILBOX_ID}
        label={t('ReadMail/labelMailbox')}
        value={mailbox?.email || mailbox?.name || ''}
      />
      <NoPrintContent />
      <Sender />
      <NoPrintContent2 />
      <Receivers
        mainReceiver={receivers.mainReceiver}
        otherReceivers={receivers.otherReceivers}
      />
      <DetailsItem
        cypressId="SUBJECT"
        id={DETAILED_LABEL_SUBJECT_ID}
        isMultiLine
        label={t('containers/NewMail/labelByField', { field: '_Subject' })}
        value={subject}
      />
      <PrintContent />
    </DetailsListStyled>
  ) : null;
};

export default memo(Details);
