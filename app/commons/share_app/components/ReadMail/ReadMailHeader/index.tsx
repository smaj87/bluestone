import { SECURITY_TYPE_ERROR } from 'commons/share_app/containers/ReadMail/constants';
import {
  getMailField,
  isFraud as isFraudSelector,
  isSecurity,
} from 'commons/share_app/containers/ReadMail/selectors';
import { FC, memo } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

import Date from '../Date';
import IconInfo from '../IconInfo';
import Bimi from './Bimi';
import ButtonAttachments from './ButtonAttachments';
import ReadMailFrom from './ReadMailFrom';
import ReadMailTo from './ReadMailTo';
import ReadMailTop from './ReadMailTop';
import {
  ReadMailBottomStyled,
  ReadMailHeaderAdditionalStyled,
  ReadMailHeaderDetailsStyled,
  ReadMailHeaderStyled,
} from './styles';

const ReadMailHeader: FC = () => {
  const isFetched: any = useSelector(getMailField, 'isFetched');
  const isFromMailList: any = useSelector(getMailField, 'isFromMailList');
  const isFraud: boolean = useSelector(isFraudSelector);
  const isSecurityError: boolean = useSelector(isSecurity, SECURITY_TYPE_ERROR);

  return isFetched || isFromMailList ? (
    <ReadMailHeaderStyled data-cypress="READMAIL-HEADER">
      <ReadMailTop />
      <hr />
      <ReadMailBottomStyled data-cypress="READMAIL-BOTTOM">
        {isFraud || isSecurityError ? (
          <IconInfo icon="info" state="error" />
        ) : (
          <Bimi />
        )}
        <ReadMailHeaderDetailsStyled>
          <ReadMailFrom />
          <ReadMailHeaderAdditionalStyled>
            <ButtonAttachments />
            <Date />
          </ReadMailHeaderAdditionalStyled>
          <ReadMailTo />
        </ReadMailHeaderDetailsStyled>
      </ReadMailBottomStyled>
    </ReadMailHeaderStyled>
  ) : null;
};

export default memo(ReadMailHeader);
