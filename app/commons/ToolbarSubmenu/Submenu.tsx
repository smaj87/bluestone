import Backdrop from 'commons/Backdrop';
import useTranslations from 'commons/hooks/useTranslations';
import {
  createPortal,
  FC,
  ReactNode,
  useEffect,
  useRef,
} from 'commons/utils/react';

import { MOUNT_NODE } from './constants';
import {
  SubmenuClose,
  SubmenuContentStyled,
  ToolbarSubmenuContentStyled,
} from './styles';

interface Props {
  ariaLabelledBy?: string;
  content: ReactNode;
  hide: () => void;
  label?: string;
  isFullScreen?: boolean;
}

const Submenu: FC<Props> = ({
  ariaLabelledBy,
  content,
  hide,
  isFullScreen,
  label,
}) => {
  const t = useTranslations();

  const submenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (submenuRef.current) {
      submenuRef.current.focus();
    }
  }, []);

  return createPortal(
    <>
      <Backdrop onClick={hide} />
      <ToolbarSubmenuContentStyled
        $isFullScreen={isFullScreen}
        aria-labelledby={ariaLabelledBy}
        aria-modal="true"
        data-cypress="TOOLBAR-SUBMENU-CONTENT"
        role="dialog"
        tabIndex={0}
      >
        <SubmenuContentStyled>{content}</SubmenuContentStyled>
        <SubmenuClose
          cypressId="BUTTON-SUBMENU-CLOSE"
          label={label || t('ctaCancel')}
          onClick={hide}
          shape="full"
          size="md"
        />
      </ToolbarSubmenuContentStyled>
    </>,
    MOUNT_NODE as Element,
  );
};

export default Submenu;
