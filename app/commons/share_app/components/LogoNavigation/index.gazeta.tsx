import useTranslations from 'commons/hooks/useTranslations';
import LogoServices from 'commons/LogoServices';
import gazetaImg from 'commons/share_app/images/logos/logo_gazeta_light.svg';
import webmailImg from 'commons/share_app/images/logos/logo_gazeta_webmail.svg';
import { FC } from 'commons/utils/react';

const LogoNavigation: FC = () => {
  const t = useTranslations();

  return (
    <LogoServices
      alt={t('logoGazetaAlt')}
      href={process.env.BRAND_URL!}
      img={gazetaImg}
      subAlt={t('logoGazetaProductAlt')}
      subHref={process.env.HOST!}
      subImg={webmailImg}
      subTitle={t('appGazetaProduct')}
      title={t('appGazeta')}
    />
  );
};

export default LogoNavigation;
