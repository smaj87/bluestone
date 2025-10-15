import { IconImage } from 'commons/Icon/iconImage';
import { FC, memo } from 'commons/utils/react';

import { IconInfoStyled } from './styles';
import { InfoState } from './types';

interface Props {
  icon: IconImage;
  state?: InfoState;
}

const IconInfo: FC<Props> = ({ icon, state }) => (
  <IconInfoStyled $image={icon} $state={state} />
);

export default memo(IconInfo);
