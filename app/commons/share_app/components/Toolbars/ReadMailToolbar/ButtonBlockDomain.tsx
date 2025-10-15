import { isPremiumAccount } from 'commons/hooks/useUserConfig/selectors';
import { getMail } from 'commons/share_app/containers/ReadMail/selectors';
import { FC, memo } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

import BlockBySenderOrDomain from 'components/Buttons/BlockBySenderOrDomain';

const ButtonBlockDomain: FC = () => {
  const { from, to } = useSelector(getMail);
  const isPremium = useSelector(isPremiumAccount);

  return isPremium ? (
    <BlockBySenderOrDomain isDetails isDomain mail={{ to: to[0], from }} />
  ) : null;
};

export default memo(ButtonBlockDomain);
