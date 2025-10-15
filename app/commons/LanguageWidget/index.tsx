import Button from 'commons/Button';
import { CtaIcon } from 'commons/CallToAction/styles';
import { CtaColor } from 'commons/CallToAction/types';
import { open } from 'commons/Dropdown/actions';
import { getDropdownById } from 'commons/Dropdown/selectors';
import useTranslations from 'commons/hooks/useTranslations';
import { getLang } from 'commons/hooks/useTranslations/selectors';
import { isMobile as isMobileSelector } from 'commons/hooks/useUserConfig/selectors';
import { hideSidebar } from 'commons/Sidebar/actions';
import { close } from 'commons/SidePanel/actions';
import { open as openSubmenu } from 'commons/ToolbarSubmenu/actions';
import { isOpenBySubmenuId } from 'commons/ToolbarSubmenu/selectors';
import { FC, memo, useCallback, useMemo } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';
import { dispatch } from 'commons/utils/store';

import { DROPDOWN_POPUP_ID, DROPDOWN_TARGET_ID } from './constants';
import pl from './images/flag_pl.svg';
import uk from './images/flag_ua.svg';

const images = { pl, uk };

interface Props {
  isSidePanel?: boolean;
}

const LanguageWidget: FC<Props> = ({ isSidePanel }) => {
  const t = useTranslations();

  const selectorDropdownId = useMemo(() => ({ id: DROPDOWN_POPUP_ID }), []);
  const dropdown = useSelector(getDropdownById, selectorDropdownId);
  const submenu = useSelector(isOpenBySubmenuId, DROPDOWN_POPUP_ID);

  const isMobile = useSelector(isMobileSelector);
  const currentLang = useSelector(getLang);

  const langTranslation = `_${currentLang}`;

  const dropdownButtonId = isSidePanel
    ? `${DROPDOWN_TARGET_ID}-sidepanel`
    : `${DROPDOWN_TARGET_ID}-sidebar`;

  let buttonColor: CtaColor = 'secondary';

  if (isMobile && !isSidePanel) {
    buttonColor = 'sidebar';
  }

  const openContextMenu = useCallback(() => {
    if (isMobile && !isSidePanel) {
      dispatch(hideSidebar());
      dispatch(openSubmenu(DROPDOWN_POPUP_ID));
    } else if (isMobile && isSidePanel) {
      dispatch(close());
      dispatch(openSubmenu(DROPDOWN_POPUP_ID));
    } else {
      dispatch(
        open(DROPDOWN_POPUP_ID, {
          targetId: dropdownButtonId,
          params: {
            menuSize: 'md',
          },
        }),
      );
    }
  }, [dropdownButtonId, isMobile, isSidePanel]);

  return (
    <Button
      ariaControls={DROPDOWN_POPUP_ID}
      ariaExpanded={isMobile ? submenu : dropdown?.isOpen}
      ariaHasPopup="true"
      color={buttonColor}
      cypressId="LANGUAGE-WIDGET"
      id={dropdownButtonId}
      image={images[currentLang]}
      isMobile={!isSidePanel}
      label={t('langLabels', { lang: langTranslation, isShort: true })}
      onClick={openContextMenu}
      size="md"
    >
      {isSidePanel ? (
        <CtaIcon $image="chevronDown" $size="md" aria-hidden />
      ) : null}
    </Button>
  );
};

export default memo(LanguageWidget);
