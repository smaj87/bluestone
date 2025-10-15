import useTranslations from 'commons/hooks/useTranslations';
import { ModalLogoStyled } from 'commons/Modal/ModalLogo/styles';
import img from 'commons/share_app/images/logos/logo_poczta_dark_full.svg';
import { memo } from 'commons/utils/react';

const ModalLogo = () => {
  const t = useTranslations();

  return (
    <ModalLogoStyled>
      <img alt={`${t('logo')} ${process.env.APP_NAME}`} src={img} />
    </ModalLogoStyled>
  );
};

export default memo(ModalLogo);
