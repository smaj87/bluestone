import Backdrop from 'commons/Backdrop';
import useTranslations from 'commons/hooks/useTranslations';
import NavTreeItem from 'commons/NavTree/NavTreeItem';
import {
  createPortal,
  FC,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
} from 'commons/utils/react';
import { dispatch } from 'commons/utils/store';

import { close } from './actions';
import { MOUNT_NODE } from './constants';
import {
  SidePanelButtonClose,
  SidePanelCloseStyled,
  SidePanelContentStyled,
  SidePanelHeaderStyled,
  SidePanelStyled,
} from './styles';

export interface SidePanelProps {
  children?: ReactNode;
  headerAriaLabel?: string;
  preventClosing?: boolean;
  title?: string;
}

const SidePanel: FC<SidePanelProps> = ({
  children,
  headerAriaLabel,
  preventClosing,
  title,
}) => {
  const t = useTranslations();

  const sidePanelRef = useRef<HTMLDivElement>(null);

  const onClose = useCallback(() => {
    dispatch(close());
  }, []);

  useEffect(() => {
    if (sidePanelRef.current) {
      sidePanelRef.current.focus();
    }
  }, []);

  return createPortal(
    <>
      <SidePanelStyled
        ref={sidePanelRef}
        aria-modal="true"
        role="dialog"
        tabIndex={0}
      >
        {!preventClosing && (
          <SidePanelCloseStyled>
            <NavTreeItem onEnter={onClose}>
              <SidePanelButtonClose
                color="secondary"
                icon="close"
                onClick={onClose}
                size="md"
                title={t('ctaClose')}
              />
            </NavTreeItem>
          </SidePanelCloseStyled>
        )}
        <SidePanelContentStyled>
          {title ? (
            <SidePanelHeaderStyled aria-label={headerAriaLabel}>
              <h2>{title || ''}</h2>
            </SidePanelHeaderStyled>
          ) : undefined}
          {children || null}
        </SidePanelContentStyled>
      </SidePanelStyled>
      <Backdrop onClick={onClose} />
    </>,
    MOUNT_NODE,
  );
};

SidePanel.displayName = 'SidePanel';

export default SidePanel;
