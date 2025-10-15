import BimiCommon from 'commons/Bimi';
import { BIMI_PLACEMENTS } from 'commons/Bimi/constants';
import { FC, memo } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

import { getAvatarInitials, getValueByField } from '../selectors';

const Bimi: FC = () => {
  const initials = useSelector(getAvatarInitials);
  const avatarUrl = useSelector(getValueByField, 'bimi');

  return (
    <BimiCommon
      image={avatarUrl}
      initials={initials || '?'}
      placement={BIMI_PLACEMENTS.READ_MAIL}
    />
  );
};

export default memo(Bimi);
