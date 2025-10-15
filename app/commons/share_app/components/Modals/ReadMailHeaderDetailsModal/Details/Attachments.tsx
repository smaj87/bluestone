import useTranslations from 'commons/hooks/useTranslations';
import { getMailField } from 'commons/share_app/containers/ReadMail/selectors';
import {
  Attachment,
  AttachmentReadMail,
} from 'commons/share_app/containers/ReadMail/types';
import { FC, memo, useMemo } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

import Size from 'components/Size';

import { DETAILED_LABEL_ATTACHMENTS_ID } from './constants';
import DetailsItem from './DetailsItem';

const getSize = (attachments: Attachment[]) => {
  let size = 0;

  attachments.forEach((a) => {
    size += a.size;
  });

  return size;
};

const Attachments: FC = () => {
  const t = useTranslations();

  const attachments = useSelector(
    getMailField,
    'attachments',
  ) as AttachmentReadMail[];

  const [embedded, embeddedSize, notEmbedded, notEmbeddedSize] = useMemo(() => {
    const e = attachments.filter((a) => a.embedded);
    const notE = attachments.filter((a) => !a.embedded);

    return [e, getSize(e), notE, getSize(notE)];
  }, [attachments]);

  const notEmbeddedValue = useMemo(
    () => (
      <>
        {notEmbedded.length} (
        <Size bytes={notEmbeddedSize} />)
      </>
    ),
    [notEmbeddedSize, notEmbedded.length],
  );

  const embeddedValue = useMemo(
    () => (
      <>
        {embedded.length} (
        <Size bytes={embeddedSize} />)
      </>
    ),
    [embeddedSize, embedded.length],
  );

  return (
    <>
      {notEmbeddedSize ? (
        <DetailsItem
          cypressId="ATTACHMENTS"
          id={DETAILED_LABEL_ATTACHMENTS_ID}
          label={t('attachmentsTitle')}
          value={notEmbeddedValue}
        />
      ) : null}
      {embeddedSize ? (
        <DetailsItem
          cypressId="EMBEDDED-IMAGES"
          id={DETAILED_LABEL_ATTACHMENTS_ID}
          label={t('embeddedImages')}
          value={embeddedValue}
        />
      ) : null}
    </>
  );
};

export default memo(Attachments);
