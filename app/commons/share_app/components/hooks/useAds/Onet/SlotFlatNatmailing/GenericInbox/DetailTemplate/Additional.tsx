import { ReadMailParsed } from 'commons/share_app/containers/ReadMail/types';
import { FC, memo } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

import MailDetailIframe from 'components/MailDetailIframe';

import { getAdditionalData } from './selectors';
import { AdditionalStyled } from './styles';

const Additional: FC = () => {
  const data = useSelector(getAdditionalData);

  return data.content.body ? (
    <AdditionalStyled data-cypress="INBOX-DETAIL-ADDITIONAL">
      <MailDetailIframe
        content={data.content as ReadMailParsed['content']}
        isSandbox={false}
        isShowImages
        isSwipeEnabled={false}
      />
    </AdditionalStyled>
  ) : null;
};

export default memo(Additional);
