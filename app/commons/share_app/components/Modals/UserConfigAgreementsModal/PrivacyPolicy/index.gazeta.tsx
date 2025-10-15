import useTranslations from 'commons/hooks/useTranslations';
import { FC, memo, useState } from 'commons/utils/react';

import { GAZETA_PRIVACY_POLICY_URL } from './constants';
import ExpandButton from './ExpandButton';
import HideButton from './HideButton';
import PrivacyLink from './PrivacyLink';
import { PrivacyPolicyStyled } from './styles';

const PrivacyPolicy: FC = () => {
  const t = useTranslations();
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <PrivacyPolicyStyled>
      <p>{t('userConfigAgreementsModalPrivacyPolicyText1Gazeta')}</p>
      <p>{t('userConfigAgreementsModalPrivacyPolicyText2Gazeta')}</p>
      <p>
        {isExpanded ? (
          t('userConfigAgreementsModalPrivacyPolicyText3Expanded')
        ) : (
          <>
            {t('userConfigAgreementsModalPrivacyPolicyText3')}
            <ExpandButton setIsExpanded={setIsExpanded} />
          </>
        )}
      </p>
      {isExpanded && (
        <>
          <p>{t('userConfigAgreementsModalPrivacyPolicyText4')}</p>
          <p>
            {t('userConfigAgreementsModalPrivacyPolicyText5')}{' '}
            <PrivacyLink href={GAZETA_PRIVACY_POLICY_URL} />{' '}
            <HideButton setIsExpanded={setIsExpanded} />
          </p>
        </>
      )}
    </PrivacyPolicyStyled>
  );
};

export default memo(PrivacyPolicy);
