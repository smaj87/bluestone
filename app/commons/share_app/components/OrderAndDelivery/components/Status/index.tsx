import { IconImage } from 'commons/Icon/iconImage';
import { FC, memo } from 'commons/utils/react';

import StatusBar from './StatusBar';
import StatusName from './StatusName';
import { StatusStyled } from './styles';

interface Props {
  icon?: IconImage;
  label?: string;
  isActiveStep1?: boolean;
  isActiveStep2?: boolean;
  isActiveStep3?: boolean;
}

const Status: FC<Props> = ({
  icon,
  isActiveStep1,
  isActiveStep2,
  isActiveStep3,
  label,
}) => (
  <StatusStyled>
    <StatusName icon={icon} label={label} />
    <StatusBar
      isActiveStep1={isActiveStep1}
      isActiveStep2={isActiveStep2}
      isActiveStep3={isActiveStep3}
    />
  </StatusStyled>
);

export default memo(Status);
