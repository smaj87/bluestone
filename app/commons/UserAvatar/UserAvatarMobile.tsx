import { AriaHasPopup } from 'commons/Aria/types';
import useTranslations from 'commons/hooks/useTranslations';
import { VISUALLY_HIDDEN_CLASS } from 'commons/utils/classNames';
import { FC, memo } from 'commons/utils/react';

import { UserAvatarButtonStyled } from './styles';

export interface UserAvatarMobileProps {
  ariaControls?: string;
  ariaExpanded?: boolean;
  ariaHasPopup?: AriaHasPopup;
  content: any;
  onClick: () => void;
}

const UserAvatarMobile: FC<UserAvatarMobileProps> = ({
  ariaControls,
  ariaHasPopup,
  content: Content,
  onClick,
}) => {
  const t = useTranslations();

  return (
    <UserAvatarButtonStyled
      aria-controls={ariaControls}
      aria-haspopup={ariaHasPopup}
      data-cypress="USER-AVATAR"
      onClick={onClick}
      type="button"
    >
      <span className={VISUALLY_HIDDEN_CLASS}>{t('ctaUserMenu')}</span>
      <Content />
    </UserAvatarButtonStyled>
  );
};

export default memo(UserAvatarMobile);
