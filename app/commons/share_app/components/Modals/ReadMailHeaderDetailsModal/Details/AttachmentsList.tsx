import useTranslations from 'commons/hooks/useTranslations';
import { getMailField } from 'commons/share_app/containers/ReadMail/selectors';
import { AttachmentReadMail } from 'commons/share_app/containers/ReadMail/types';
import { FC, memo, useMemo } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

import Size from 'components/Size';

import { DETAILED_LABEL_ATTACHMENTS_ID } from './constants';
import {
  AttachmentItemStyled,
  DetailItemCellStyled,
  DetailItemLabelStyled,
  DetailItemStyled,
  DetailItemValuesListStyled,
  DetailItemValueStyled,
} from './styles';

const AttachmentsList: FC = () => {
  const t = useTranslations();

  const attachments = useSelector(
    getMailField,
    'attachments',
  ) as AttachmentReadMail[];

  const notEmbedded = useMemo(
    () => attachments.filter((a) => !a.embedded),
    [attachments],
  );

  return notEmbedded.length > 0 ? (
    <DetailItemStyled>
      <DetailItemLabelStyled
        data-cypress="ATTACHMENT-LIST-LABEL"
        htmlFor={DETAILED_LABEL_ATTACHMENTS_ID}
      >
        {t('attachmentsTitle')}:
      </DetailItemLabelStyled>
      <DetailItemValuesListStyled id={DETAILED_LABEL_ATTACHMENTS_ID}>
        <DetailItemValueStyled $grid="row">
          <DetailItemCellStyled role="list">
            {notEmbedded.map((attachment) => (
              <AttachmentItemStyled
                key={attachment.id}
                data-cypress="ATTACHMENT-LIST-ITEM"
                role="listitem"
              >
                {attachment.filename || t('defaultFileName')}{' '}
                {attachment.size ? <Size bytes={attachment.size} /> : null}
              </AttachmentItemStyled>
            ))}
          </DetailItemCellStyled>
        </DetailItemValueStyled>
      </DetailItemValuesListStyled>
    </DetailItemStyled>
  ) : null;
};

export default memo(AttachmentsList);
