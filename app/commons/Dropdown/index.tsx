import {
  PopperinoOptions,
  PopperinoPlacement,
} from 'commons/Dropdown/popperino';
import {
  createPortal,
  FC,
  ReactNode,
  RefObject,
  useEffect,
  useMemo,
  useRef,
} from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

import { MOUNT_NODE } from './constants';
import useMakePopper from './hooks/useMakePopper';
import useOutsideDropdownClick from './hooks/useOutsideDropdownClick';
import { getDropdownById } from './selectors';
import {
  DropdownArrowStyled,
  DropdownMenuContentStyled,
  DropdownMenuStyled,
} from './styles';

interface Props {
  ariaLabelledBy?: string;
  children?: ReactNode;
  id: string;
  placement?: PopperinoPlacement;
  positionFlipOrder?: PopperinoOptions['positionFlipOrder'];
  contentRef?: RefObject<HTMLDivElement>;
  onOpen?: () => void;
}

const Dropdown: FC<Props> = ({
  ariaLabelledBy,
  children,
  contentRef,
  id,
  onOpen,
  placement = 'bottom',
  positionFlipOrder,
}) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectorDropdownId = useMemo(() => ({ id }), [id]);
  const maxHeight = useMemo(
    () => Math.round(window.innerHeight / 2),
    [window.innerHeight],
  );
  const dropdown = useSelector(getDropdownById, selectorDropdownId);

  useMakePopper(id, placement, positionFlipOrder);
  useOutsideDropdownClick(id);

  useEffect(() => {
    if (dropdown?.isOpen) {
      onOpen?.();

      if (dropdownRef.current) {
        dropdownRef.current.focus();
      }
    }
  }, [dropdown?.isOpen]);

  return dropdown?.isOpen
    ? createPortal(
        <DropdownMenuStyled
          ref={dropdownRef}
          $menuSize={dropdown.params.menuSize}
          aria-labelledby={ariaLabelledBy}
          id={id}
          role="dialog"
          tabIndex={0}
        >
          <DropdownArrowStyled data-popper-arrow></DropdownArrowStyled>
          <DropdownMenuContentStyled
            ref={contentRef}
            $maxHeight={maxHeight}
            data-cypress="DROPDOWN-CONTENT"
          >
            {children}
          </DropdownMenuContentStyled>
        </DropdownMenuStyled>,
        MOUNT_NODE,
      )
    : null;
};

export default Dropdown;
