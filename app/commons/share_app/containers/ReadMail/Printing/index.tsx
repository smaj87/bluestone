import LogoPrinting from 'commons/LogoPrinting';
import PrintPreviewToolbar from 'commons/share_app/components/Toolbars/PrintPreviewToolbar';
import { FC, memo } from 'commons/utils/react';

import Hooks from '../Hooks';
import PageTitle from '../PageTitle';
import PrintingContent from './PrintingContent';
import { PrintingStyled } from './styles';

const Printing: FC = () => (
  <PrintingStyled>
    <PageTitle />
    <Hooks />
    <PrintPreviewToolbar />
    <LogoPrinting />
    <PrintingContent />
  </PrintingStyled>
);

export default memo(Printing);
