// eslint-disable-next-line
import { createRoot, Root } from 'react-dom/client';
// TODO @smaj

import { FC } from 'commons/utils/react';

export const EVENT_PASSIVE = { passive: true, capture: true };

export interface Props {
  itemParams: Record<string, any>;
  onSwipeBinder: (onSwipeCallback: () => void) => void;
}

export default class Swipe {
  _private_animationMs = 400;

  _private_swipeShift = 10;

  _private_swipeDestroyShift = 100;

  _private_threshold = 0.3;

  _private_transitionAnimation = `${this._private_animationMs}ms ease`;

  _private_last_left = 0;

  _private_left = 0;

  _private_top = 0;

  _private_dragStartX = 0;

  _private_dragStartY = 0;

  _private_dragged = false;

  _private_swipeBlocked = false;

  _private_removeSwipeNodesTimeout: ReturnType<typeof setTimeout> | undefined;

  _private_onSwipeLeftCallback = () => {};

  _private_onSwipeRightCallback = () => {};

  _private_onBlockClick = () => {};

  _private_onLongClick: (params: Props['itemParams']) => void;

  _private_longClickTimeout: ReturnType<typeof setTimeout> | undefined;

  _private_container;

  _private_SwipeLeftContainer: HTMLElement | null = null;

  _private_SwipeRightContainer: HTMLElement | null = null;

  item;

  _private_SwipeLeftRoot: Root | undefined;

  _private_SwipeRightRoot: Root | undefined;

  _private_SwipeLeftContent;

  _private_SwipeRightContent;

  constructor(
    container: HTMLElement | null,
    item: HTMLElement | null,
    SwipeLeftContent: FC<Props>,
    SwipeRightContent: FC<Props>,
    onBlockClick = () => {},
    onLongClick = () => {},
  ) {
    this._private_container = container;
    this.item = item;
    this._private_SwipeLeftContent = SwipeLeftContent;
    this._private_SwipeRightContent = SwipeRightContent;

    this._private_onBlockClick = onBlockClick;
    this._private_onLongClick = onLongClick;
  }

  _private_getItemParams = () =>
    this.item?.dataset?.params ? JSON.parse(this.item.dataset.params) : {};

  // eslint-disable-next-line camelcase
  _private_addSwipeNodes = () => {
    const swipeLeftContainerClass = 'js_swipeLeftContainerClass';
    const swipeRightContainerClass = 'js_swipeRightContainerClass';

    const swipeCommonStyles =
      'position:absolute;z-index:1;top:0;width:0;height:100%;overflow:hidden;';

    this._private_SwipeLeftContainer =
      this.item?.parentNode?.querySelector?.(`.${swipeLeftContainerClass}`) ||
      null;

    if (!this._private_SwipeLeftContainer) {
      this._private_SwipeLeftContainer = document.createElement('div');
      this._private_SwipeLeftContainer.classList.add(swipeLeftContainerClass);
      this._private_SwipeLeftContainer.style.cssText = `${swipeCommonStyles}left:0;`;
      this.item?.parentNode?.prepend?.(this._private_SwipeLeftContainer);

      this._private_SwipeLeftRoot = createRoot(
        this._private_SwipeLeftContainer,
      );

      this._private_SwipeLeftRoot.render(
        <this._private_SwipeLeftContent
          itemParams={this._private_getItemParams()}
          onSwipeBinder={(fun) => {
            this._private_onSwipeLeftCallback = fun;
          }}
        />,
      );
    }

    this._private_SwipeRightContainer =
      this.item?.parentNode?.querySelector?.(`.${swipeRightContainerClass}`) ||
      null;

    if (!this._private_SwipeRightContainer) {
      this._private_SwipeRightContainer = document.createElement('div');
      this._private_SwipeRightContainer.classList.add(swipeRightContainerClass);
      this._private_SwipeRightContainer.style.cssText = `${swipeCommonStyles}right:0;`;
      this.item?.parentNode?.append?.(this._private_SwipeRightContainer);

      this._private_SwipeRightRoot = createRoot(
        this._private_SwipeRightContainer,
      );

      this._private_SwipeRightRoot.render(
        <this._private_SwipeRightContent
          itemParams={this._private_getItemParams()}
          onSwipeBinder={(fun) => {
            this._private_onSwipeRightCallback = fun;
          }}
        />,
      );
    }
  };

  // eslint-disable-next-line camelcase
  _private_removeSwipeNodes = () => {
    if (this._private_SwipeLeftContainer) {
      // setTimeout because unmount while rendering
      setTimeout(() => this._private_SwipeLeftRoot?.unmount?.(), 0);
      this._private_SwipeLeftContainer.remove();
    }

    if (this._private_SwipeRightContainer) {
      // setTimeout because unmount while rendering
      setTimeout(() => this._private_SwipeRightRoot?.unmount?.(), 0);
      this._private_SwipeRightContainer.remove();
    }
  };

  onDragStart = (x: number, y: number) => {
    const left = this._private_left;
    this._private_reset();
    this._private_last_left = 0;
    this._private_left = left;
    this._private_setLeft();

    this._private_dragStartX = -(this._private_left - x);
    this._private_dragStartY = -(this._private_top - y);

    this._private_container?.addEventListener?.(
      'touchmove',
      this._private_onTouchMove,
      EVENT_PASSIVE,
    );

    this._private_container?.addEventListener?.(
      'mousemove',
      this._private_onTouchMove,
    );

    this._private_longClickTimeout = setTimeout(() => {
      this.smoothDestroy();
      this._private_onBlockClick();
      this._private_onLongClick(this._private_getItemParams());
    }, 500);
  };

  _private_isSwipeLeft = () =>
    Math.abs(this._private_left) >= this._private_swipeShift;

  _private_isSwipeTop = () =>
    Math.abs(this._private_top) >= this._private_swipeShift;

  // eslint-disable-next-line camelcase
  _private_onTouchMove = (event: TouchEvent | MouseEvent) => {
    const clientX =
      'targetTouches' in event ? event.targetTouches[0].clientX : event.clientX;

    const clientY =
      'targetTouches' in event ? event.targetTouches[0].clientY : event.clientY;

    this._private_left = clientX - this._private_dragStartX;
    this._private_top = clientY - this._private_dragStartY;

    const isSwipeLeft = this._private_isSwipeLeft();
    const isSwipeTop = this._private_isSwipeTop();

    if (isSwipeLeft || isSwipeTop) {
      this._private_onBlockClick();
      clearTimeout(this._private_longClickTimeout);
    }

    if (!this._private_swipeBlocked && !this._private_dragged && isSwipeLeft) {
      this._private_dragged = true;

      this._private_addSwipeNodes();
      requestAnimationFrame(this._private_updatePosition);
    }

    if (!this._private_dragged && isSwipeTop) {
      this._private_swipeBlocked = true;
    }

    if (Math.abs(this._private_top) >= this._private_swipeDestroyShift) {
      this.smoothDestroy();
    }
  };

  // eslint-disable-next-line camelcase
  _private_updatePosition = () => {
    if (this._private_dragged) {
      this._private_setLeft();
      requestAnimationFrame(this._private_updatePosition);
    }
  };

  // eslint-disable-next-line camelcase
  _private_setLeft = () => {
    if (this._private_left !== this._private_last_left) {
      if (this.item) {
        this.item.style.transform = `translate3d(${this._private_left}px, 0, 0)`;
      }

      this._private_last_left = this._private_left;

      if (this._private_SwipeLeftContainer) {
        this._private_SwipeLeftContainer.style.width = `${
          this._private_left > 0 ? this._private_left : 0
        }px`;
      }

      if (this._private_SwipeRightContainer) {
        this._private_SwipeRightContainer.style.width = `${
          this._private_left < 0 ? -this._private_left : 0
        }px`;
      }
    }
  };

  // eslint-disable-next-line camelcase
  _private_onSwipe = () => {
    let left = 0;

    if (
      this._private_left <
      -(this.item?.offsetWidth || 0) * this._private_threshold
    ) {
      this._private_onSwipeRightCallback();

      const content: HTMLElement | null =
        this._private_SwipeRightContainer?.querySelector?.(':scope > div') ||
        null;

      if (content?.dataset?.width) {
        left = -content.dataset.width;
      }
    } else if (
      this._private_left >
      (this.item?.offsetWidth || 0) * this._private_threshold
    ) {
      this._private_onSwipeLeftCallback();

      const content: HTMLElement | null =
        this._private_SwipeLeftContainer?.querySelector?.(':scope > div') ||
        null;

      if (content?.dataset?.width) {
        left = parseInt(content.dataset.width, 10);
      }
    }

    return left;
  };

  onDragEnd = (event: Event) => {
    if (this._private_dragged) {
      event.stopPropagation();
    }

    this.smoothDestroy(this._private_onSwipe());
  };

  // eslint-disable-next-line camelcase
  _private_reset = () => {
    clearTimeout(this._private_removeSwipeNodesTimeout);
    clearTimeout(this._private_longClickTimeout);

    this._private_setTransitions('');

    if (this.item) {
      this.item.style.transform = '';
    }

    this._private_dragged = false;
    this._private_swipeBlocked = false;

    this._private_left = 0;
    this._private_top = 0;
    this._private_dragStartX = 0;
    this._private_dragStartY = 0;

    this._private_container?.removeEventListener?.(
      'touchmove',
      this._private_onTouchMove,
      EVENT_PASSIVE,
    );

    this._private_container?.removeEventListener?.(
      'mousemove',
      this._private_onTouchMove,
    );
  };

  // eslint-disable-next-line camelcase
  _private_setTransitions = (transitionAnimation = '') => {
    if (this._private_SwipeLeftContainer) {
      this._private_SwipeLeftContainer.style.transition = transitionAnimation
        ? `width ${transitionAnimation}`
        : '';
    }

    if (this._private_SwipeRightContainer) {
      this._private_SwipeRightContainer.style.transition = transitionAnimation
        ? `width ${transitionAnimation}`
        : '';
    }

    const transition = transitionAnimation
      ? `transform ${transitionAnimation}`
      : '';

    if (this.item && this.item?.style?.transition !== transition) {
      this.item.style.transition = transition;
    }
  };

  smoothDestroy = (left = 0) => {
    this._private_reset();

    this._private_setTransitions(this._private_transitionAnimation);
    this._private_setLeft();

    if (left) {
      this._private_left = left;
      this._private_setLeft();
    } else {
      this._private_removeSwipeNodesTimeout = setTimeout(() => {
        this._private_reset();
        this._private_removeSwipeNodes();
      }, this._private_animationMs);
    }
  };

  destroy = () => {
    this._private_reset();
    this._private_removeSwipeNodes();
  };
}
