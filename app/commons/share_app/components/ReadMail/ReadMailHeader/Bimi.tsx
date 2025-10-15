import BimiCommon from 'commons/Bimi';
import { BIMI_PLACEMENTS } from 'commons/Bimi/constants';
import { getMailField } from 'commons/share_app/containers/ReadMail/selectors';
import { ReadMailParsed } from 'commons/share_app/containers/ReadMail/types';
import { getInitials } from 'commons/share_app/utils/initials';
import { FC, memo } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

const Bimi: FC = () => {
  const from = useSelector(getMailField, 'from') as ReadMailParsed['from'];
  const avatar = useSelector(
    getMailField,
    'avatar',
  ) as ReadMailParsed['avatar'];

  return (
    <BimiCommon
      image={avatar}
      initials={getInitials(from.name || from.email)}
      placement={BIMI_PLACEMENTS.READ_MAIL}
    />
  );
};

export default memo(Bimi);
