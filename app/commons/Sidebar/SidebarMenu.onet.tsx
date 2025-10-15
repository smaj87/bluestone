import useTranslations from 'commons/hooks/useTranslations';
import { DEFAULT_LANGUAGE } from 'commons/hooks/useTranslations/constants';
import { getLang } from 'commons/hooks/useTranslations/selectors';
import { isPremium as isPremiumSelector } from 'commons/hooks/useUserConfig/selectors';
import SideMenuItemClose from 'commons/Sidebar/SideMenuItemClose';
import SideMenuItemPlus from 'commons/Sidebar/SideMenuItemPlus';
import { FC, memo } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

import SideMenuItem from './SideMenuItem';
import SideMenuItemCalendar from './SideMenuItemCalendar';
import SideMenuItemCourier from './SideMenuItemCourier';
import { SidebarMenuStyled } from './styles';

const SidebarMenu: FC = () => {
  const t = useTranslations();
  const lang = useSelector(getLang);
  const isPremium = useSelector(isPremiumSelector);

  return (
    <SidebarMenuStyled>
      <SideMenuItemClose />
      <SideMenuItem
        href={process.env.WEBMAIL_URL!}
        icon="envelope"
        isActive={process.env.WEBMAIL_URL === process.env.HOST}
        label={t('webmail')}
      />
      <SideMenuItem
        href={process.env.CONTACTS_URL!}
        icon="contacts"
        isActive={process.env.CONTACTS_URL === process.env.HOST}
        label={t('contacts')}
      />
      <SideMenuItemCalendar />
      <SideMenuItemCourier />
      <SideMenuItemPlus />
      <SideMenuItem
        href={process.env.SETTINGS_URL!}
        icon="settings"
        isActive={process.env.SETTINGS_URL === process.env.HOST}
        label={t('settings')}
      />
      {lang === DEFAULT_LANGUAGE && !isPremium ? (
        <SideMenuItem
          href={process.env.NEWSPAPER_URL!}
          icon="menuBook"
          isBadge
          label={t('newspaperAd')}
        />
      ) : null}
      <SideMenuItem
        href={process.env.HELP_URL!}
        icon="help"
        isLast
        label={t('help')}
      />
    </SidebarMenuStyled>
  );
};

export default memo(SidebarMenu);
