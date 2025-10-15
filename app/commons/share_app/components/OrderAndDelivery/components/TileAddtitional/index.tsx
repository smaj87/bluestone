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
  isSingleLine?: boolean;
  label?: string;
  value?: string;
}

const TileAdditional: FC<TileInfoProps> = ({
  icon,
  isSingleLine,
  label,
  value,
}) => (
  <TileStyled $role="default">
    {!!icon && <TileIcon $image={icon} $role="default" />}
    <TileContentStyled $isSingleLine={isSingleLine}>
      {!!label && <TileLabelStyled>{label} </TileLabelStyled>}
      {!!value && <TileValueStyled $role="default">{value}</TileValueStyled>}
    </TileContentStyled>
  </TileStyled>
);

export default memo(TileAdditional);
