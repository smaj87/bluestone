import { DotStyled } from 'commons/Dot/styles';
import { DotLocation } from 'commons/Dot/types';
import { FC, memo } from 'commons/utils/react';

interface Props {
  location?: DotLocation;
}

const Dot: FC<Props> = ({ location }) => (
  <DotStyled $location={location || 'default'} />
);

export default memo(Dot);
