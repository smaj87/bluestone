import { IconImage } from 'commons/Icon/iconImage';
import { FC } from 'commons/utils/react';

import { DecorationCardStyled, DecorationIcon } from './styles';

interface Props {
  icon?: IconImage;
}

const DecorationCard: FC<Props> = ({ icon }) => (
  <DecorationCardStyled>
    {!!icon && <DecorationIcon $image={icon} />}
  </DecorationCardStyled>
);

export default DecorationCard;
