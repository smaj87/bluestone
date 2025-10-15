import useTranslations from 'commons/hooks/useTranslations';
import { isPremium as isPremiumSelector } from 'commons/hooks/useUserConfig/selectors';
import LogoServices from 'commons/LogoServices';
import onetImg from 'commons/share_app/images/logos/logo_onet_light.svg';
import webmailImg from 'commons/share_app/images/logos/logo_poczta_light.svg';
import webmailPlusImg from 'commons/share_app/images/logos/logo_poczta_plus_light.svg';
import { FC, memo } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

const LogoNavigation: FC = () => {
  const t = useTranslations();
  const isPremium = useSelector(isPremiumSelector);

  return (
    <LogoServices
      alt={t('logoOnetAlt')}
      href={process.env.BRAND_URL!}
      img={onetImg}
      subAlt={t('logoOnetProductAlt')}
      subHref={process.env.HOST!}
      subImg={isPremium ? webmailPlusImg : webmailImg}
      subTitle={t('appOnetProduct')}
      title={t('appOnet')}
    />
  );
};

export default memo(LogoNavigation);
