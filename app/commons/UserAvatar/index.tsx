import { AriaHasPopup } from 'commons/Aria/types';
import { isMobile as isMobileSelector } from 'commons/hooks/useUserConfig/selectors';
import { FC, memo, useMemo } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

import UserAvatarContent from './UserAvatarContent';
import UserAvatarDesktop from './UserAvatarDesktop';
import UserAvatarMobile from './UserAvatarMobile';

export interface UserAvatarProps {
  ariaControls?: string;
  ariaHasPopup?: AriaHasPopup;
  onClick?: () => void;
}

const UserAvatar: FC<UserAvatarProps> = ({
  ariaControls,
  ariaHasPopup,
  onClick,
}) => {
  const isMobile = useSelector(isMobileSelector);

  const Component: any = useMemo(
    () => (isMobile ? UserAvatarMobile : UserAvatarDesktop),
    [isMobile],
  );

  return Component ? (
    <Component
      ariaControls={ariaControls}
      ariaHasPopup={ariaHasPopup}
      content={UserAvatarContent}
      onClick={onClick}
    />
  ) : null;
};

export default memo(UserAvatar);
