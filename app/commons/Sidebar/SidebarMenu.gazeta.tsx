import useTranslations from 'commons/hooks/useTranslations';
import { FC, memo } from 'commons/utils/react';

import SideMenuItem from './SideMenuItem';
import SideMenuItemClose from './SideMenuItemClose';
import { SidebarMenuStyled } from './styles';

const SidebarMenu: FC = () => {
  const t = useTranslations();

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
      <SideMenuItem
        href={process.env.CALENDAR_URL!}
        icon="calendar"
        isActive={process.env.CALENDAR_URL === process.env.HOST}
        label={t('calendar')}
      />
      <SideMenuItem
        href={process.env.WEATHER_URL!}
        icon="sun"
        label={t('weather')}
      />
      <SideMenuItem
        href={process.env.SETTINGS_URL!}
        icon="settings"
        isActive={process.env.SETTINGS_URL === process.env.HOST}
        label={t('settings')}
      />
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
