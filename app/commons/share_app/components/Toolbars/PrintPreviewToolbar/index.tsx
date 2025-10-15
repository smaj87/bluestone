import { ToolbarTop } from 'commons/Toolbar';
import { ToolbarButtonsStyled } from 'commons/Toolbar/styles';
import { FC, memo } from 'commons/utils/react';

import ButtonPrint from './ButtonPrint';
import ButtonToggleImages from './ButtonShowImages';
import { PrintContentStyled } from './styles';

const PrintPreviewToolbar: FC = () => (
  <ToolbarTop isShow noNavbar>
    <PrintContentStyled>
      <ToolbarButtonsStyled $toLeft>
        <ButtonToggleImages />
      </ToolbarButtonsStyled>
      <ToolbarButtonsStyled $toRight>
        <ButtonPrint />
      </ToolbarButtonsStyled>
    </PrintContentStyled>
  </ToolbarTop>
);

export default memo(PrintPreviewToolbar);
