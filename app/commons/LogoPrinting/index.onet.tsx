import Logo from 'commons/share_app/images/logos/logo_poczta_dark_full.svg';
import { FC, memo } from 'commons/utils/react';

import { LogoPrintingStyled } from './styles';

const LogoPrinting: FC = () => (
  <LogoPrintingStyled>
    <img alt="" loading="lazy" src={Logo} />
  </LogoPrintingStyled>
);

LogoPrinting.displayName = 'LogoPrinting';

export default memo(LogoPrinting);
