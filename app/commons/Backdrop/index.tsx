import { FC, memo, MouseEvent } from 'commons/utils/react';

import { BackdropStyled } from './styles';

export interface BackdropProps {
  onClick?: (event: MouseEvent<HTMLElement>) => void;
  zIndex?: number;
}

export const Backdrop: FC<BackdropProps> = ({ onClick, zIndex }) => (
  <BackdropStyled
    $zIndex={zIndex}
    aria-hidden="true"
    onClick={onClick}
    role="button"
  />
);

export default memo(Backdrop);
