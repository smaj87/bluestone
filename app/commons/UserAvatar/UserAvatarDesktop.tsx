import { FC, memo } from 'commons/utils/react';

import { UserAvatarStyled } from './styles';

export interface UserAvatarDesktopProps {
  content: any;
}

const UserAvatarDesktop: FC<UserAvatarDesktopProps> = ({
  content: Content,
}) => (
  <UserAvatarStyled data-cypress="USER-AVATAR" role="presentation">
    <Content />
  </UserAvatarStyled>
);

export default memo(UserAvatarDesktop);
