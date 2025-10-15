import LoaderBouncing from 'commons/LoaderBouncing';
import { LoaderBouncingContainerStyled } from 'commons/LoaderBouncing/styles';
import Details from 'commons/share_app/components/Modals/ReadMailHeaderDetailsModal/Details';
import ReadMailErrorPage from 'commons/share_app/components/ReadMail/ReadMailErrorPage';
import { getMailField } from 'commons/share_app/containers/ReadMail/selectors';
import { ReadMailParsed } from 'commons/share_app/containers/ReadMail/types';
import { FC, memo } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

import PrintingPreview from './PrintingPreview';
import { PrintingContentStyled } from './styles';

const PrintingContent: FC = () => {
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
    return <ReadMailErrorPage />;
  }

  if (isFetched) {
    return (
      <PrintingContentStyled>
        <Details />
        <PrintingPreview />
      </PrintingContentStyled>
    );
  }

  return null;
};

export default memo(PrintingContent);
