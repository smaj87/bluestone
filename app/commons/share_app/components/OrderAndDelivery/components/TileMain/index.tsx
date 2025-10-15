import { IconImage } from 'commons/Icon/iconImage';
import MobileLoader from 'commons/MobileLoader';
import { FC, memo } from 'commons/utils/react';

import {
  TileContentStyled,
  TileIcon,
  TileIconBoxStyled,
  TileLabelStyled,
  TileStyled,
  TileValueStyled,
} from '../Tile/styles';

interface TileMainProps {
  icon?: IconImage;
  label?: string;
  value?: string;
}

const TileMain: FC<TileMainProps> = ({ icon, label, value }) => (
  <TileStyled $role="main">
    {!!icon && (
      <MobileLoader
        mobile={
          <TileIconBoxStyled>
            <TileIcon $image={icon} $role="main" />
          </TileIconBoxStyled>
        }
      />
    )}
    <TileContentStyled>
      {!!label && <TileLabelStyled>{label}</TileLabelStyled>}
      {!!value && <TileValueStyled $role="main">{value}</TileValueStyled>}
    </TileContentStyled>
  </TileStyled>
);

export default memo(TileMain);
