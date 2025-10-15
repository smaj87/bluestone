import { SECURITY_TYPE_ERROR } from 'commons/share_app/containers/ReadMail/constants';
import { isSecurity } from 'commons/share_app/containers/ReadMail/selectors';
import { FC, memo } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

import { SecuritySignStyled } from './styles';

const SecuritySign: FC = () =>
  useSelector(isSecurity, SECURITY_TYPE_ERROR) ? (
    <SecuritySignStyled $image="padlock" $type="error" />
  ) : null;

export default memo(SecuritySign);
