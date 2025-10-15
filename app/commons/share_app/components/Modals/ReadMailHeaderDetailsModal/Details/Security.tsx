import useTranslations from 'commons/hooks/useTranslations';
import {
  SECURITY_TYPE_NONE,
  SECURITY_TYPE_SPF_SOFT_FAIL_ERROR,
  SECURITY_TYPE_SUCCESS,
  SECURITY_TYPE_WARNING,
} from 'commons/share_app/containers/ReadMail/constants';
import { getSecurityType } from 'commons/share_app/containers/ReadMail/selectors';
import { FC, memo } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

import { DETAILED_LABEL_SECURITY_ID } from './constants';
import SecurityContent from './SecurityContent';
import {
  DetailItemLabelStyled,
  DetailItemStyled,
  DetailItemValuesListStyled,
  DetailItemValueStyled,
} from './styles';

const Security: FC = () => {
  const t = useTranslations();
  const securityType = useSelector(getSecurityType);

  let content = <></>;

  if (securityType === SECURITY_TYPE_SUCCESS) {
    content = (
      <SecurityContent
        text={t('ReadMail/SecurityMessage/securitySuccess')}
        type="success"
      />
    );
  } else if (securityType === SECURITY_TYPE_WARNING) {
    content = (
      <SecurityContent
        text={t('ReadMail/SecurityMessage/securityWarning')}
        type="warning"
      />
    );
  } else if (securityType === SECURITY_TYPE_SPF_SOFT_FAIL_ERROR) {
    content = (
      <SecurityContent
        text={t('ReadMail/SecurityMessage/securitySoftWarning')}
        type="warning"
      />
    );
  } else {
    content = (
      <SecurityContent
        text={t('ReadMail/SecurityMessage/securityError')}
        type="error"
      />
    );
  }

  return securityType !== SECURITY_TYPE_NONE ? (
    <DetailItemStyled $isMultiLine>
      <DetailItemLabelStyled
        data-cypress="SECURITY-LABEL"
        htmlFor={DETAILED_LABEL_SECURITY_ID}
      >
        {t('securities')}:
      </DetailItemLabelStyled>
      <DetailItemValuesListStyled id={DETAILED_LABEL_SECURITY_ID}>
        <DetailItemValueStyled $grid="row" data-cypress="SECURITY-VALUE">
          {content}
        </DetailItemValueStyled>
      </DetailItemValuesListStyled>
    </DetailItemStyled>
  ) : null;
};

Security.displayName = 'Security';

export default memo(Security);
