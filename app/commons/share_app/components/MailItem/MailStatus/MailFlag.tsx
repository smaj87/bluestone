import { IconImage } from 'commons/Icon/iconImage';
import { VISUALLY_HIDDEN_CLASS } from 'commons/utils/classNames';
import { FC, memo } from 'commons/utils/react';

import { MailFlagStyled } from './styles';
import { MailFlagType } from './types';

interface Props {
  icon: IconImage;
  flag: MailFlagType;
  screenReaderLabel?: string;
}

const MailFlag: FC<Props> = ({ flag, icon, screenReaderLabel }) => (
  <>
    <MailFlagStyled $flag={flag} $image={icon} />
    <span className={VISUALLY_HIDDEN_CLASS}>{screenReaderLabel}</span>
  </>
);

export default memo(MailFlag);
