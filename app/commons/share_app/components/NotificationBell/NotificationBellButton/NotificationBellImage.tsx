import Icon from 'commons/Icon';
import { IconImage } from 'commons/Icon/iconImage';
import { FC, memo } from 'commons/utils/react';

import { NotificationBellState } from '../types';
import { NotificationBellImageStyled } from './styles';

interface Props {
  icon?: IconImage;
  state?: NotificationBellState;
}

const NotificationBellImage: FC<Props> = ({ icon, state }) => (
  <NotificationBellImageStyled $state={state}>
    {icon ? <Icon $image={icon} /> : null}
  </NotificationBellImageStyled>
);

export default memo(NotificationBellImage);
