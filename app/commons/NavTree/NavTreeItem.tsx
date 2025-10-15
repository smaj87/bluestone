import { NavTreeItemStyled } from 'commons/NavTree/styles';
import {
  FC,
  memo,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
} from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';
import { scrollIntoView } from 'commons/utils/scroll';
import { dispatch } from 'commons/utils/store';
import getUniqueId from 'commons/utils/uniqueId';

import { setCurrentElementId } from './actions';
import {
  KEYBOARD_NAVIGATION_DEFAULT_GROUP,
  KEYBOARD_NAVIGATION_ELEMENT_CLASS,
  KEYBOARD_NAVIGATION_ELEMENT_DISABLED_CLASS,
  KEYBOARD_NAVIGATION_ELEMENT_FOCUS_CLASS,
  NavTreeGroupContext,
} from './constants';
import { queueNavBatchChange } from './navBatcher';
import { isSelected as isSelectedSelector } from './selectors';
import { NavTreeDimension, NavTreeOffset } from './types';

export interface NavTreeItemProps {
  children: React.ReactNode;
  isShow?: boolean; // WYMAGANE - jezeli routing na podstawie isShow i display none nie jest zaimplementowany w projekcie to isShow nie dodajemy, bo defaultowo jest true
  onEnter: () => void; // WYMAGANE
  onUnrender?: () => void;
  onRender?: () => void;
  isFocusOnRender?: boolean;
  isDisabled?: boolean;
  width?: NavTreeDimension;
  height?: NavTreeDimension;
  offset?: NavTreeOffset;
  groupId?: string; // !!! IMPORTANT NIGDY NIE DAWAĆ groupId, bo jest dawane jako props w NavTreeGroup i podawane dalej do NavTreeItem, aby elementy tej grupy miały ten sam id
  onEscape?: () => void; // !!! IMPORTANT NIGDY NIE DAWAĆ onEscape, Jedynie w przypadku NavTreeGroup, a nie zwyczajnych elementów NavTreeItem
  role?: string; // !!! IMPORTANT NIGDY NIE DAWAĆ role, bo jest dodawane poprzez NavTreeText ARIA role (default: 'text')
  ariaLabel?: string; // !!! IMPORTANT NIGDY NIE DAWAĆ ariaLabel, bo jest dodawane poprzez NavTreeText ARIA label
  tabIndex?: number; // !!! IMPORTANT NIGDY NIE DAWAĆ tabIndex, bo jest dodawane poprzez NavTreeText
  // onSpace?: () => void;
  // onBackspace?: () => void;
}

const NavTreeItem: FC<NavTreeItemProps> = ({
  ariaLabel,
  children,
  groupId,
  height,
  isDisabled = false,
  isFocusOnRender = false,
  isShow = true,
  offset,
  onEnter,
  onEscape,
  onRender,
  onUnrender,
  role,
  tabIndex,
  width,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const group = useContext(NavTreeGroupContext);

  const id = useMemo(
    () => groupId || getUniqueId(group || 'nav-tree-item'),
    [groupId],
  );

  const isSelected = useSelector(isSelectedSelector, id);

  const navElement = useMemo(
    () => ({
      id,
      group: group || KEYBOARD_NAVIGATION_DEFAULT_GROUP,
    }),
    [id, group],
  );

  // Rejestrujemy/Odrejestrujemy się przy montowaniu/odmontowaniu lub przy zmianie isShow
  useEffect(() => {
    if (isShow) {
      queueNavBatchChange({ add: navElement }).then(() => {
        // wykonujemy to dopiero po dodaniu do stanu redux się elementów UI przez BATCH akcje
        if (onRender) {
          onRender();
        }

        // ustawiamy focus na elemencie dopiero po dodaniu do stanu redux
        if (isFocusOnRender) {
          dispatch(setCurrentElementId(id));
        }
      });
    }

    return () => {
      // tutaj isShow oznacza, ze element był widoczny w momencie montowania
      if (isShow) {
        if (onUnrender) {
          onUnrender();
        }

        queueNavBatchChange({ remove: navElement });
      }
    };
  }, [isShow]);

  const isFullyInView = useCallback((el: HTMLElement) => {
    const rect = el.getBoundingClientRect();
    const viewHeight =
      window.innerHeight || document.documentElement.clientHeight;
    // const viewWidth = window.innerWidth || document.documentElement.clientWidth;

    return (
      rect.top >= 100 &&
      // rect.left >= 100 &&
      rect.bottom <= viewHeight
      // rect.right <= viewWidth
    );
  }, []);

  // Ustawiamy scroll do widocznosci na elemencie, jeśli jest zaznaczony
  useEffect(() => {
    if (ref.current && !isFullyInView(ref.current) && isSelected) {
      scrollIntoView(ref.current);
    }
  }, [isSelected]);

  useEffect(() => {
    const el = ref.current;

    if (!el) {
      return;
    }

    // @ts-ignore
    el.onEnter = onEnter;
  }, [onEnter]);

  useEffect(() => {
    const el = ref.current;

    if (!el) {
      return;
    }

    // @ts-ignore
    el.onEscape = onEscape;
  }, [onEscape]);

  return (
    <NavTreeItemStyled
      ref={ref}
      $height={height}
      $isSelected={isSelected}
      $offset={offset}
      $width={width}
      aria-label={ariaLabel}
      className={`${KEYBOARD_NAVIGATION_ELEMENT_CLASS} ${
        isSelected ? KEYBOARD_NAVIGATION_ELEMENT_FOCUS_CLASS : ''
      } ${isDisabled ? KEYBOARD_NAVIGATION_ELEMENT_DISABLED_CLASS : ''}`}
      id={id}
      role={role}
      tabIndex={tabIndex}
    >
      {children}
    </NavTreeItemStyled>
  );
};

export default memo(NavTreeItem);
