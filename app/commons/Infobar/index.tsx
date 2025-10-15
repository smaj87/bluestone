import { FC, ReactNode } from 'commons/utils/react';

import {
  InfobarActionItemStyled,
  InfobarActionsStyled,
  InfobarButton,
  InfobarButtonClose,
  InfobarContentStyled,
  InfobarIcon,
  InfobarLabelStyled,
  InfobarStyled,
} from './styles';
import { InfobarPlacement, InfobarType } from './types';

interface InfobarProps {
  children: ReactNode;
  isOpen: boolean;
  type?: InfobarType;
  placement?: InfobarPlacement;
}

type InfobarComponent = FC<InfobarProps> & {
  Icon: typeof InfobarIcon;
  Label: typeof InfobarLabelStyled;
  Content: typeof InfobarContentStyled;
  Actions: typeof InfobarActionsStyled;
  ActionItem: typeof InfobarActionItemStyled;
  Button: typeof InfobarButton;
  ButtonClose: typeof InfobarButtonClose;
};

const Infobar: InfobarComponent = ({
  children,
  isOpen,
  placement = 'default',
  type = 'info',
}) =>
  isOpen ? (
    <InfobarStyled $placement={placement} $type={type}>
      {children}
    </InfobarStyled>
  ) : null;

Infobar.Icon = InfobarIcon;
Infobar.Label = InfobarLabelStyled;
Infobar.Content = InfobarContentStyled;
Infobar.Actions = InfobarActionsStyled;
Infobar.ActionItem = InfobarActionItemStyled;
Infobar.Button = InfobarButton;
Infobar.ButtonClose = InfobarButtonClose;

export default Infobar;
