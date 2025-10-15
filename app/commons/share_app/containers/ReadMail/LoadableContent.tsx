import LoaderBouncing from 'commons/LoaderBouncing';
import { LoaderBouncingContainerStyled } from 'commons/LoaderBouncing/styles';
import Attachments from 'commons/share_app/components/ReadMail/Attachments';
import Infobars from 'commons/share_app/components/ReadMail/Infobars';
import ErrorPage from 'commons/share_app/components/ReadMail/ReadMailErrorPage';
import { FC, memo } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

import Preview from './Preview';
import { getMailField } from './selectors';
import { MailContentStyled, MailStyled } from './styles';
import { ReadMailParsed } from './types';

const LoadableContent: FC = () => {
  const isFetching = useSelector(
    getMailField,
    'isFetching',
  ) as ReadMailParsed['isFetching'];

  const isFetched = useSelector(
    getMailField,
    'isFetched',
  ) as ReadMailParsed['isFetched'];

  const isFetchedError = useSelector(
    getMailField,
    'isFetchedError',
  ) as ReadMailParsed['isFetchedError'];

  if (isFetching) {
    return (
      <LoaderBouncingContainerStyled>
        <LoaderBouncing />
      </LoaderBouncingContainerStyled>
    );
  }

  if (isFetchedError) {
    return <ErrorPage />;
  }

  if (isFetched) {
    return (
      <>
        <Infobars />
        <MailStyled>
          <MailContentStyled>
            <Preview />
          </MailContentStyled>
        </MailStyled>
        <Attachments />
      </>
    );
  }

  return null;
};

export default memo(LoadableContent);
