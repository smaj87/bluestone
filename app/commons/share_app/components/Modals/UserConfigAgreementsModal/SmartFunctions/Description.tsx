import useTranslations from 'commons/hooks/useTranslations';
import { FC, memo } from 'commons/utils/react';

const Description: FC = () => {
  const t = useTranslations();

  return (
    <>
      <p>
        <b>{t('userConfigAgreementsModalSmartFunctionsTitle')}</b>
      </p>
      <ul>
        <li>{t('userConfigAgreementsModalSmartFunctionsListItem1')}</li>
        <li>{t('userConfigAgreementsModalSmartFunctionsListItem2')}</li>
        <li>{t('userConfigAgreementsModalSmartFunctionsListItem3')}</li>
        <li>{t('userConfigAgreementsModalSmartFunctionsListItem4')}</li>
        <li>{t('userConfigAgreementsModalSmartFunctionsListItem5')}</li>
      </ul>
      <p>{t('userConfigAgreementsModalSmartFunctionsText')}</p>
    </>
  );
};

export default memo(Description);
