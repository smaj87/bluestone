import { getMainAccount } from 'commons/hooks/useUserConfig/selectors';
import UserAvatarContent from 'commons/UserAvatar/UserAvatarContent';
import UserAvatarDesktop from 'commons/UserAvatar/UserAvatarDesktop';
import { FC, memo, ReactNode } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

import { UserDataMobileStyled, UserNameStyled } from './styles';

interface Props {
  content: ReactNode;
}

const Content: FC<Props> = ({ content }) => {
  const accountName = useSelector(getMainAccount);

  return (
    <>
      <UserDataMobileStyled>
        <UserAvatarDesktop content={UserAvatarContent} />
        <UserNameStyled>{accountName}</UserNameStyled>
      </UserDataMobileStyled>
      <hr aria-hidden="true" />
      {content}
    </>
  );
};

export default memo(Content);
