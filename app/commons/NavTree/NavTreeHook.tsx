import { FC, memo, useCallback, useEffect } from 'commons/utils/react';
import {
  getStateValueBySelector,
  useSelector,
} from 'commons/utils/react-redux';
import { dispatch, injectReducer } from 'commons/utils/store';

import { setCurrentElementId } from './actions';
import {
  focusableSelectors,
  KEY,
  KEYBOARD_NAVIGATION_ELEMENT_DISABLED_CLASS,
} from './constants';
import reducer from './reducer';
import {
  getCurrentElementId,
  getGroup,
  getLastElementOfParentStack,
  isEnabled,
} from './selectors';
import {
  findClosestInDirection,
  nextTabElement,
  pickClosestToTopLeft,
  pickFirstKeyNavElement,
} from './utils';

interface Props {
  isTabNavigation?: boolean;
}

// uzywamy na glownym pliku aplikacji (app.tsx), aby zarejestrowac ten hook
const NavTreeHook: FC<Props> = ({ isTabNavigation = true }) => {
  injectReducer(KEY, reducer);

  const isNavTreeEnabled = useSelector(isEnabled);

  const deleteTabActiveElementFocus = useCallback(() => {
    // Usuwamy focus z elementu, ktory jest aktywny po wcisnieciu tab, aby po przesciu strzalkami odznaczyc TAB element
    const { activeElement } = document;

    if (activeElement && activeElement instanceof HTMLElement) {
      activeElement.blur();
    }
  }, []);

  const focusTabElement = useCallback((id: string) => {
    const elem = document.getElementById(id);

    const focusable = elem?.querySelectorAll(focusableSelectors.join(','));

    // Jezeli element ma focusable dzieci, to ustawiamy focus na pierwszym z nich
    if (focusable && focusable.length > 0) {
      (focusable[0] as HTMLElement).focus();
    }
    // Jezeli element nie ma focusable dzieci, to ustawiamy focus na samym elemencie
    else {
      (elem as HTMLElement).focus();
    }
  }, []);

  // przed wszystkim sprawdzamy, czy nie ma moze modali zewnwtrznych, bo jak sa to musimy wylaczyc navTree, aby móc operowac
  // po jego elementach (nie mamy mozliwosci operowania za pomoca navTree po tych modalach)
  // 1 to modal RODO
  // 2 to modal z adp o adblocku
  const isExternalModalsOpen = useCallback(
    () =>
      Array.from(
        document.querySelectorAll('.cmp-popup_popup, .fc-ab-root'),
      ).filter((el) => getComputedStyle(el).display !== 'none').length > 0,
    [],
  );

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (isExternalModalsOpen()) {
        return;
      }

      switch (event.key) {
        case 'Tab': {
          if (!isTabNavigation) {
            dispatch(setCurrentElementId(''));

            return;
          }

          event.preventDefault();

          const groupIds = getStateValueBySelector(getGroup);
          const currentElementId = getStateValueBySelector(getCurrentElementId);

          if (!groupIds.length) {
            return;
          }

          // Jesli nic nie jest zaznaczone (currentElementId === ''),
          // wybierzmy element pierwszy element.
          if (currentElementId === '') {
            const elemId = pickFirstKeyNavElement(groupIds);

            if (elemId !== '') {
              focusTabElement(elemId);

              dispatch(setCurrentElementId(elemId));
            }
            // Koniec, bo jeszcze raz powtórne "szukanie w kierunku" ma sens dopiero po tym, jak ktoś drugi raz nacisnie strzalke.
            return;
          }

          const nextElemId = nextTabElement(
            groupIds,
            currentElementId,
            event.shiftKey,
          );

          if (nextElemId !== '') {
            focusTabElement(nextElemId);

            dispatch(setCurrentElementId(nextElemId));
          }

          break;
        }
        case 'ArrowUp':
        case 'ArrowDown':
        case 'ArrowLeft':
        case 'ArrowRight': {
          event.preventDefault();

          deleteTabActiveElementFocus();

          const groupIds = getStateValueBySelector(getGroup);
          const currentElementId = getStateValueBySelector(getCurrentElementId);

          if (!groupIds.length) {
            return;
          }

          // Jesli nic nie jest zaznaczone (currentElementId === ''),
          // wybierzmy element najblizszy do lewego gornego rogu.
          if (currentElementId === '') {
            const elemId = pickClosestToTopLeft(groupIds);

            if (elemId !== '') {
              dispatch(setCurrentElementId(elemId));
            }

            // Koniec, bo jeszcze raz powtórne "szukanie w kierunku" ma sens dopiero po tym, jak ktoś drugi raz nacisnie strzalke.
            return;
          }

          const nextElemId = findClosestInDirection(
            event.key,
            currentElementId,
            groupIds,
          );

          if (nextElemId !== '') {
            dispatch(setCurrentElementId(nextElemId));
          }

          break;
        }
        case 'Enter': {
          if (isTabNavigation) {
            event.preventDefault();
          }

          const currentElementId = getStateValueBySelector(getCurrentElementId);

          if (currentElementId) {
            const elem: any = document.getElementById(currentElementId);

            // Jezeli element nie ma klasy disabled to wywolujemy onEnter
            if (
              !elem?.className.includes(
                KEYBOARD_NAVIGATION_ELEMENT_DISABLED_CLASS,
              ) &&
              elem?.onEnter
            ) {
              elem?.onEnter?.(event);
            }
          }

          break;
        }
        case 'Escape': {
          const lastParent = getStateValueBySelector(
            getLastElementOfParentStack,
          );

          if (lastParent?.parentId) {
            const elem: any = document.getElementById(lastParent.parentId);

            elem?.onEscape?.(event);
          } else {
            dispatch(setCurrentElementId(''));
          }

          deleteTabActiveElementFocus();

          break;
        }
        default:
          break;
      }
    },
    [
      isTabNavigation,
      focusTabElement,
      deleteTabActiveElementFocus,
      isExternalModalsOpen,
    ],
  );

  // Dodajemy handler na cala aplikacje
  useEffect(() => {
    if (isNavTreeEnabled) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      // Usuwamy, jezeli bylo wczesniej dodane
      if (isNavTreeEnabled) {
        window.removeEventListener('keydown', handleKeyDown);
      }
    };
  }, [isNavTreeEnabled, handleKeyDown]);

  return null;
};

export default memo(NavTreeHook);
