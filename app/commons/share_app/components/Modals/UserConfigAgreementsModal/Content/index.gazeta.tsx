import useTranslations from 'commons/hooks/useTranslations';
import ModalLogo from 'commons/Modal/ModalLogo';
import { FC, memo } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

import AgreementsActions from '../AgreementsActions';
import PrivacyPolicy from '../PrivacyPolicy';
import { isEdit as isEditSelector } from '../selectors';
import SmartFunctions from '../SmartFunctions';
import { TitleStyled } from '../styles';

const Content: FC = () => {
  const t = useTranslations();
  const isEdit = useSelector(isEditSelector);
  const title = t('userConfigAgreementsModalTitleGazeta');

  return (
    <>
      <ModalLogo />
      <TitleStyled>{title}</TitleStyled>
      <SmartFunctions isEdit={isEdit} />
      <PrivacyPolicy />
      <AgreementsActions isEdit={isEdit} />
    </>
  );
};

export default memo(Content);
