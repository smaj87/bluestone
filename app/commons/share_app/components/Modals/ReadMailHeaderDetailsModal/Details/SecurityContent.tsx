import { FC, memo } from 'commons/utils/react';

import {
  SecurityContentStyled,
  SecurityIcon,
  SecurityLinkStyled,
} from './styles';
import { SecurityType } from './types';

interface Props {
  text?: string;
  type?: SecurityType;
}

const SecurityContent: FC<Props> = ({ text, type }) => (
  <SecurityContentStyled>
    <SecurityIcon $image="padlock" $type={type} />
    <SecurityLinkStyled
      href={process.env.SECURITY_HELP_URL}
      target="_blank"
      title=""
    >
      {text}
    </SecurityLinkStyled>
  </SecurityContentStyled>
);

SecurityContent.displayName = 'SecurityContent';

export default memo(SecurityContent);
