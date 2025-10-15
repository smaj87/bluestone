import { isMobile as isMobileSelector } from 'commons/hooks/useUserConfig/selectors';
import { EMPTY_FUNC } from 'commons/utils/constants';
import isTouchDevice from 'commons/utils/detectTouchDevice';
import { FC, useEffect, useRef } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

import Swipe, { EVENT_PASSIVE, Props } from './Swipe';

const useListItemSwipe = (
  isShow: boolean,
  containerId: string,
  itemClass: string,
  SwipeLeftContent: FC<Props>,
  SwipeRightContent: FC<Props>,
  onItemClick: (params?: any) => void = EMPTY_FUNC,
  onItemLongClick: (params?: any) => void = EMPTY_FUNC,
) => {
  const isMobile = useSelector(isMobileSelector);
  const swipe = useRef<Swipe | null>(null);

  useEffect(() => {
    const container = document.getElementById(containerId);
    let isBlockClick = false;

    const getSwipeElement = (target: EventTarget | null) => {
      const t = target as HTMLElement;

      return (
        t?.classList.contains(itemClass) ? t : t.closest(`.${itemClass}`)
      ) as HTMLElement;
    };
    const onBlockClick = () => {
      isBlockClick = true;
    };

    const onClick = (event: Event) => {
      const swipeElement = getSwipeElement(event.target) as HTMLElement;

      if (swipeElement && !isBlockClick) {
        swipe?.current?.smoothDestroy();

        onItemClick(
          swipeElement?.dataset?.params
            ? JSON.parse(swipeElement.dataset.params)
            : {},
        );
      }

      isBlockClick = false;
    };

    const onTouchStart = (event: Event) => {
      if (isTouchDevice() && event.type === 'mousedown') {
        // break for dev reasons
        return;
      }

      isBlockClick = false;
      const position = (event as TouchEvent).targetTouches?.[0] || event;
      const swipeElement = getSwipeElement(event.target);

      if (swipeElement) {
        const isSame = swipe?.current?.item === swipeElement;

        if (!isSame) {
          swipe?.current?.smoothDestroy();
          swipe.current = new Swipe(
            container,
            swipeElement,
            SwipeLeftContent,
            SwipeRightContent,
            onBlockClick,
            onItemLongClick,
          );
        }

        swipe.current?.onDragStart(position.clientX, position.clientY);
      }
    };

    const onTouchEnd = (event: Event) => {
      const swipeElement = getSwipeElement(event.target);

      if (swipeElement) {
        swipe?.current?.onDragEnd(event as TouchEvent);
      }
    };

    const onTouchCancel = () => {
      swipe?.current?.destroy();
    };

    if (isMobile) {
      container?.addEventListener('touchstart', onTouchStart, EVENT_PASSIVE);
      container?.addEventListener('touchend', onTouchEnd);
      container?.addEventListener('touchcancel', onTouchCancel);

      container?.addEventListener('mousedown', onTouchStart);
      container?.addEventListener('mouseup', onTouchEnd, EVENT_PASSIVE);
    } else {
      swipe?.current?.destroy();
    }

    container?.addEventListener('click', onClick);

    return () => {
      container?.removeEventListener('touchstart', onTouchStart, EVENT_PASSIVE);
      container?.removeEventListener('mousedown', onTouchStart);

      container?.removeEventListener('touchend', onTouchEnd);
      container?.removeEventListener('mouseup', onTouchEnd, EVENT_PASSIVE);

      container?.removeEventListener('touchcancel', onTouchCancel);

      container?.removeEventListener('click', onClick);
    };
  }, [containerId, itemClass, isMobile]);

  useEffect(() => {
    if (!isShow) {
      swipe?.current?.destroy();
    }
  }, [isShow]);

  return null;
};

useListItemSwipe.displayName = 'useListItemSwipe';

export default useListItemSwipe;
