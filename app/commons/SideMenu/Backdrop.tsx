import { hideSidebar } from 'commons/Sidebar/actions';
import { LAYER_SIDE_MENU_BACKDROP } from 'commons/utils/layers';
import { FC, memo, useCallback } from 'commons/utils/react';
import { dispatch } from 'commons/utils/store';

import { BackdropSideMenuStyled } from './styles';

const Backdrop: FC = () => {
  const onClick = useCallback(() => {
    dispatch(hideSidebar());
  }, []);

  return (
    <BackdropSideMenuStyled
      $zIndex={LAYER_SIDE_MENU_BACKDROP}
      onClick={onClick}
    />
  );
};

export default memo(Backdrop);
