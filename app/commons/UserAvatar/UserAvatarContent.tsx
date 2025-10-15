import { getAvatar } from 'commons/hooks/useUserConfig/selectors';
import Icon from 'commons/Icon';
import { FC, memo } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

const UserAvatarContent: FC = () => {
  const avatar = useSelector(getAvatar);

  return avatar ? <img alt="" src={avatar} /> : <Icon $image="user" />;
};

export default memo(UserAvatarContent);
