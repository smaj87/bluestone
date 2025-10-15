import Button from 'commons/Button';
import useTranslations from 'commons/hooks/useTranslations';
import LanguageWidget from 'commons/LanguageWidget';
import { NavTreeGroupContext } from 'commons/NavTree/constants';
import SidePanel from 'commons/SidePanel';
import { close } from 'commons/SidePanel/actions';
import { isOpenBySidePanelId } from 'commons/SidePanel/selectors';
import {
  SidePanelActionsStyled,
  SidePanelHeaderStyled,
} from 'commons/SidePanel/styles';
import ThemeSettings from 'commons/ThemesSettings';
import { FC, memo, useCallback } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';
import { dispatch } from 'commons/utils/store';

import { APP_SETTINGS_SIDE_PANEL_ID } from '../constants';

const sidePanelProp = { sidePanelId: APP_SETTINGS_SIDE_PANEL_ID };

interface AppSettingsSidePanelProps {
  isIntegration?: boolean;
}

const AppSettingsSidePanel: FC<AppSettingsSidePanelProps> = ({
  isIntegration,
}) => {
  const t = useTranslations();
  const isOpen = useSelector(isOpenBySidePanelId, sidePanelProp);

  const onClose = useCallback(() => {
    dispatch(close());
  }, []);

  return isOpen ? (
    <NavTreeGroupContext.Provider value={sidePanelProp.sidePanelId}>
      <SidePanel>
        <SidePanelHeaderStyled
          aria-label={t('landmarkAriaLabelSettingsPanelHeader')}
        >
          <h2>{t('appSettings')}</h2>
          <LanguageWidget isSidePanel />
        </SidePanelHeaderStyled>
        <hr aria-hidden="true" />
        <ThemeSettings isIntegration={isIntegration} />
        <SidePanelActionsStyled>
          <Button
            color="primary"
            label={t('ctaClose')}
            onClick={onClose}
            size="lg"
          />
        </SidePanelActionsStyled>
      </SidePanel>
    </NavTreeGroupContext.Provider>
  ) : null;
};

export default memo(AppSettingsSidePanel);
