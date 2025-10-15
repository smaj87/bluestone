import { IconImage } from 'commons/Icon/iconImage';
import { FC, memo } from 'commons/utils/react';

import { StatusIcon, StatusLabelStyled, StatusNameStyled } from './styles';

interface Props {
  icon?: IconImage;
  label?: string;
}

const StatusName: FC<Props> = ({ icon, label }) => (
  <StatusNameStyled>
    {!!icon && <StatusIcon $image={icon} />}
    {!!label && <StatusLabelStyled>{label}</StatusLabelStyled>}
  </StatusNameStyled>
);

export default memo(StatusName);
