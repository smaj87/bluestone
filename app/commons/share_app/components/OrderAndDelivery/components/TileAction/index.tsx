import { IconImage } from 'commons/Icon/iconImage';
import { FC, memo, ReactNode } from 'commons/utils/react';

import { TileContentStyled, TileIcon, TileStyled } from '../Tile/styles';

interface TileActionProps {
  icon?: IconImage;
  children?: ReactNode;
}

const TileAction: FC<TileActionProps> = ({ children, icon }) => (
  <TileStyled $role="default">
    {!!icon && <TileIcon $image={icon} $role="default" />}
    {!!children && <TileContentStyled>{children}</TileContentStyled>}
  </TileStyled>
);

export default memo(TileAction);
