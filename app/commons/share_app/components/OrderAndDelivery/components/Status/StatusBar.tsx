import { FC, memo } from 'commons/utils/react';

import { StatusBarItemStyled, StatusBarStyled } from './styles';

interface Props {
  isActiveStep1?: boolean;
  isActiveStep2?: boolean;
  isActiveStep3?: boolean;
}

const StatusBar: FC<Props> = ({
  isActiveStep1,
  isActiveStep2,
  isActiveStep3,
}) => (
  <StatusBarStyled>
    <StatusBarItemStyled $isActive={isActiveStep1} />
    <StatusBarItemStyled $isActive={isActiveStep2} />
    <StatusBarItemStyled $isActive={isActiveStep3} />
  </StatusBarStyled>
);

export default memo(StatusBar);
