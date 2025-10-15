import { FC, memo } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

import { isPrinting as isPrintingSelector } from 'containers/App/selectors';

import AttachmentsList from './AttachmentsList';

const PrintContent: FC = () =>
  useSelector(isPrintingSelector) ? <AttachmentsList /> : null;

PrintContent.displayName = 'PrintContent';

export default memo(PrintContent);
