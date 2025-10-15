import { getMailField } from 'commons/share_app/containers/ReadMail/selectors';
import { ReadMailParsed } from 'commons/share_app/containers/ReadMail/types';
import { FC, memo } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

import MailDetailWithoutIframe from 'components/MailDetailWithoutIframe';

import { PrintingPreviewStyled } from './styles';

const PrintingPreview: FC = () => {
  const content = useSelector(
    getMailField,
    'content',
  ) as ReadMailParsed['content'];

  const isShowImages = useSelector(
    getMailField,
    'isShowImages',
  ) as ReadMailParsed['isShowImages'];

  return (
    <PrintingPreviewStyled>
      <MailDetailWithoutIframe content={content} isShowImages={isShowImages} />
    </PrintingPreviewStyled>
  );
};

export default memo(PrintingPreview);
