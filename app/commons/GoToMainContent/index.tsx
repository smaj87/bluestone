import useTranslations from 'commons/hooks/useTranslations';
import { isMobile as isMobileSelector } from 'commons/hooks/useUserConfig/selectors';
import { setCurrentElementId } from 'commons/NavTree/actions';
import {
  KEYBOARD_NAVIGATION_ELEMENT_CLASS,
  KEYBOARD_NAVIGATION_ELEMENT_DISABLED_CLASS,
} from 'commons/NavTree/constants';
import NavTreeItem from 'commons/NavTree/NavTreeItem';
import { hideSidebar } from 'commons/Sidebar/actions';
import { FC, memo, useCallback } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';
import { dispatch } from 'commons/utils/store';

import { GoToMainContentLinkStyled, GoToMainContentStyled } from './styles';

interface Props {
  id: string;
}

const GoToMainContent: FC<Props> = ({ id }) => {
  const t = useTranslations();
  const isMobile = useSelector(isMobileSelector);

  const onEnter = useCallback(() => {
    const appContentElement = document.getElementById(id) as HTMLElement;

    const firstNavTreeItem = appContentElement.querySelector(
      `.${KEYBOARD_NAVIGATION_ELEMENT_CLASS}:not(.${KEYBOARD_NAVIGATION_ELEMENT_DISABLED_CLASS})`,
    );

    appContentElement?.focus();

    if (firstNavTreeItem) {
      dispatch(setCurrentElementId(firstNavTreeItem?.id));
    }

    if (isMobile) {
      dispatch(hideSidebar());
    }
  }, [isMobile]);

  return (
    <GoToMainContentStyled>
      <NavTreeItem onEnter={onEnter}>
        <GoToMainContentLinkStyled href={`#${id}`}>
          {t('ctaGoToMainContent')}
        </GoToMainContentLinkStyled>
      </NavTreeItem>
    </GoToMainContentStyled>
  );
};

export default memo(GoToMainContent);
