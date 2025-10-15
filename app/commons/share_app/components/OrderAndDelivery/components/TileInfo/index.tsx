import { IconImage } from 'commons/Icon/iconImage';
import { FC, memo } from 'commons/utils/react';

import {
  TileContentStyled,
  TileIcon,
  TileLabelStyled,
  TileStyled,
  TileValueStyled,
} from '../Tile/styles';

interface TileInfoProps {
  icon?: IconImage;
  label?: string;
  value?: string;
}

const TileInfo: FC<TileInfoProps> = ({ icon, label, value }) => (
  <TileStyled $role="default">
    {!!icon && <TileIcon $image={icon} $role="default" />}
    <TileContentStyled>
      {!!label && <TileLabelStyled>{label}</TileLabelStyled>}
      {!!value && <TileValueStyled $role="default">{value}</TileValueStyled>}
    </TileContentStyled>
  </TileStyled>
);

export default memo(TileInfo);
