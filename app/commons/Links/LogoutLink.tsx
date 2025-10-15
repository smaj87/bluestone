import useTranslations from 'commons/hooks/useTranslations';
import Link from 'commons/Link';
import MobileLoader from 'commons/MobileLoader';
import NavTreeItem from 'commons/NavTree/NavTreeItem';
import { VISUALLY_HIDDEN_CLASS } from 'commons/utils/classNames';
import { FC, memo, useCallback } from 'commons/utils/react';
import { historyPush } from 'commons/utils/route';

interface LogoutLinkProps {
  logoutUrl: string;
}

const LogoutLink: FC<LogoutLinkProps> = ({ logoutUrl }) => {
  const t = useTranslations();

  const handleLogout = useCallback(() => {
    historyPush(logoutUrl);
  }, [logoutUrl]);

  return (
    <MobileLoader
      desktop={
        <NavTreeItem onEnter={handleLogout}>
          <Link
            color="navbar"
            cypressId="LINK-LOGOUT"
            href={logoutUrl}
            icon="logout"
            size="md"
            title={t('ctaLogout')}
          >
            <span className={VISUALLY_HIDDEN_CLASS}>{t('ctaLogout')}</span>
          </Link>
        </NavTreeItem>
      }
    />
  );
};

LogoutLink.displayName = 'LogoutLink';

export default memo(LogoutLink);
