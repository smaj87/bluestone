import { isMobile } from 'commons/hooks/useUserConfig/selectors';
import { getMailField } from 'commons/share_app/containers/ReadMail/selectors';
import { ReadMailParsed } from 'commons/share_app/containers/ReadMail/types';
import { FC, memo } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

import MailDetailIframe from 'components/MailDetailIframe';

const Preview: FC = () => {
  const content = useSelector(
    getMailField,
    'content',
  ) as ReadMailParsed['content'];

  const isShowImages = useSelector(
    getMailField,
    'isShowImages',
  ) as ReadMailParsed['isShowImages'];

  return (
    <MailDetailIframe
      content={content}
      isSandbox={false}
      isShowImages={isShowImages}
      isSwipeEnabled={useSelector(isMobile)}
    />
  );
};

export default memo(Preview);
