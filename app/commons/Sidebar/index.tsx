import useTranslations from 'commons/hooks/useTranslations';
import { isMobile as isMobileSelector } from 'commons/hooks/useUserConfig/selectors';
import { SIDEBAR_ID } from 'commons/Sidebar/constants';
import DomUpdaterDaemon from 'commons/Sidebar/DomUpdaterDaemon';
import { FC, memo, useEffect, useRef } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

import { isOpen as isOpenSelector } from './selector';
import SidebarMenu from './SidebarMenu';
import { SidebarStyled } from './styles';

const Sidebar: FC = () => {
  const t = useTranslations();
  const isOpen = useSelector(isOpenSelector);
  const isMobile = useSelector(isMobileSelector);

  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sidebarRef.current && isOpen && isMobile) {
      sidebarRef.current.focus();
    }
  }, [sidebarRef.current, isOpen, isMobile]);

  return (
    <>
      <DomUpdaterDaemon />
      {isOpen ? (
        <SidebarStyled
          ref={sidebarRef}
          aria-label={t('landmarkAriaLabelSidebar')}
          aria-modal={isMobile ? 'true' : undefined}
          id={SIDEBAR_ID}
          role={isMobile ? 'dialog' : undefined}
          tabIndex={isMobile ? 0 : undefined}
        >
          <SidebarMenu />
        </SidebarStyled>
      ) : null}
    </>
  );
};

export default memo(Sidebar);
