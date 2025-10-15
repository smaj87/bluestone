import MobileLoader from 'commons/MobileLoader';
import MailsListNavToolbar from 'commons/share_app/components/MailsListNavToolbar';
import { isAnyChecked as isAnyCheckedSelector } from 'commons/share_app/containers/Mails/selectors';
import { memo } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

const MailsListNav = () => {
  const isAnyChecked = useSelector(isAnyCheckedSelector);

  return !isAnyChecked ? (
    <MobileLoader mobile={<MailsListNavToolbar />} />
  ) : null;
};

export default memo(MailsListNav);
