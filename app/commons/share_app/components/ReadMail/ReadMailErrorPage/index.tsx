import { fetchReadMail } from 'commons/share_app/containers/ReadMail/actions';
import { getMailField } from 'commons/share_app/containers/ReadMail/selectors';
import { ReadMailParsed } from 'commons/share_app/containers/ReadMail/types';
import { FC, memo, useCallback } from 'commons/utils/react';
import { getStateValueBySelector } from 'commons/utils/react-redux';
import { dispatch } from 'commons/utils/store';

import Content from './Content';

const ReadMailErrorPage: FC = () => {
  const onRetry = useCallback(() => {
    const mid = getStateValueBySelector(
      getMailField,
      'mid',
    ) as ReadMailParsed['mid'];

    if (mid > 0) {
      dispatch(fetchReadMail(mid));
    }
  }, []);

  return <Content onRetry={onRetry} />;
};

export default memo(ReadMailErrorPage);
