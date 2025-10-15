import { getKid } from 'commons/hooks/useUserConfig/selectors';
import { ReadMailRouterIsShowContext } from 'commons/share_app/components/RouterHelpers/constants';
import { dataLayerPush } from 'commons/utils/ads';
import {
  MutableRefObject,
  useCallback,
  useContext,
  useEffect,
  useRef,
} from 'commons/utils/react';
import { getStateValueBySelector } from 'commons/utils/react-redux';
import { historyPush } from 'commons/utils/route';

import {
  TYPE_ON_END_EVENT,
  TYPE_ON_MOVE_EVENT,
  TYPE_ON_START_EVENT,
} from 'components/MailDetailIframe/constants';
import { READ_MAIL_URL } from 'utils/constants';

import { getMidByType } from '../selectors';
import {
  BLOCK_SHIFT,
  BOUNCING_CLASS,
  SCROLL_SHIFT,
  THRESHOLD,
} from './constants';

const useSwipe = (
  prevContentRef: MutableRefObject<HTMLDivElement | null>,
  contentRef: MutableRefObject<HTMLDivElement | null>,
  nextContentRef: MutableRefObject<HTMLDivElement | null>,
) => {
  const isShow = useContext(ReadMailRouterIsShowContext);

  const animationFrameRef = useRef<ReturnType<typeof requestAnimationFrame>>();

  const isDraggingRef = useRef(false);
  const isSwipeBlockRef = useRef(false);
  const isSwipingRef = useRef(false);

  const leftRef = useRef(0);
  const xRef = useRef(0);
  const yRef = useRef(0);

  const changeBouncingClass = useCallback((isRemove = false) => {
    if (isRemove) {
      nextContentRef.current?.classList.remove(BOUNCING_CLASS);
      prevContentRef.current?.classList.remove(BOUNCING_CLASS);
    } else {
      nextContentRef.current?.classList.add(BOUNCING_CLASS);
      prevContentRef.current?.classList.add(BOUNCING_CLASS);
    }
  }, []);

  const checkSwipeBlock = useCallback((shift: number) => {
    if (isDraggingRef.current) {
      const scrollShift = isSwipingRef.current ? SCROLL_SHIFT : BLOCK_SHIFT;

      if (Math.abs(shift) > scrollShift) {
        isSwipeBlockRef.current = true;
        isSwipingRef.current = false;
        isDraggingRef.current = false;
        leftRef.current = 0;

        changeBouncingClass();
        updateTransform(prevContentRef.current);
        updateTransform(nextContentRef.current);
      }
    }
  }, []);

  const updateTransform = useCallback((content, forceLeft = undefined) => {
    if (content) {
      // eslint-disable-next-line no-param-reassign
      content.style.transform = `translate3d(${
        forceLeft !== undefined ? forceLeft : leftRef.current
      }px, 0, 0)`;
    }
  }, []);

  const updatePosition = useCallback(() => {
    updateTransform(
      leftRef.current > 0 ? prevContentRef.current : nextContentRef.current,
    );

    // reset
    updateTransform(
      leftRef.current > 0 ? nextContentRef.current : prevContentRef.current,
      0,
    );

    if (isDraggingRef.current) {
      animationFrameRef.current = requestAnimationFrame(updatePosition);
    }
  }, []);

  const onStart = useCallback((x, y) => {
    if ((window?.visualViewport?.scale || 1) <= 1) {
      window.addEventListener('touchmove', onTouchMove);

      isDraggingRef.current = true;
      xRef.current = -(leftRef.current - x);
      yRef.current = y;

      changeBouncingClass(true);

      cancelAnimationFrame(animationFrameRef.current!);
      animationFrameRef.current = requestAnimationFrame(updatePosition);
    }
  }, []);

  const onMove = useCallback((left: number, top: number) => {
    checkSwipeBlock(top);

    if (isSwipeBlockRef.current) {
      leftRef.current = 0;
    } else if (isSwipingRef.current || Math.abs(left) > BLOCK_SHIFT) {
      const maxWidth = (contentRef.current?.offsetWidth || 0) * THRESHOLD;

      leftRef.current =
        Math.min(maxWidth, Math.abs(left)) * (left > 0 ? 1 : -1);
      isSwipingRef.current = true;
    }
  }, []);

  const onEnd = useCallback(() => {
    window.removeEventListener('touchmove', onTouchMove);
    cancelAnimationFrame(animationFrameRef.current!);

    if (isDraggingRef.current) {
      const prevMid = getStateValueBySelector(getMidByType, 'prev');
      const nextMid = getStateValueBySelector(getMidByType, 'next');
      const offsetWidth = contentRef.current?.offsetWidth || 0;

      if (prevMid > 0 && leftRef.current <= -offsetWidth * THRESHOLD) {
        historyPush(`/${READ_MAIL_URL}/_mid/${prevMid}`);

        dataLayerPush({
          event: 'b_previous_message',
          ekid: getStateValueBySelector(getKid),
          event_type: 'mobile_swipe',
        });
      } else if (nextMid > 0 && leftRef.current >= offsetWidth * THRESHOLD) {
        historyPush(`/${READ_MAIL_URL}/_mid/${nextMid}`);

        dataLayerPush({
          event: 'b_next_message',
          ekid: getStateValueBySelector(getKid),
          event_type: 'mobile_swipe',
        });
      }

      changeBouncingClass();
      leftRef.current = 0;

      updateTransform(nextContentRef.current);
      updateTransform(prevContentRef.current);
    }

    isSwipeBlockRef.current = false;
  }, []);

  const onMessage = useCallback((e) => {
    switch (e.data.type) {
      case TYPE_ON_START_EVENT:
        onStart(e.data.x, e.data.y);
        break;
      case TYPE_ON_END_EVENT:
        onEnd();
        break;
      case TYPE_ON_MOVE_EVENT:
        if (isDraggingRef.current) {
          onMove(e.data.x - xRef.current, e.data.y - yRef.current);
        }

        break;
      default:
        break;
    }
  }, []);

  const onTouchStart = useCallback((e) => {
    onStart(e.targetTouches[0].clientX, e.targetTouches[0].clientY);
  }, []);

  const onTouchMove = useCallback((e) => {
    onMove(
      e.targetTouches[0].clientX - xRef.current,
      e.targetTouches[0].clientY - yRef.current,
    );
  }, []);

  useEffect(() => {
    if (isShow) {
      window.addEventListener('touchstart', onTouchStart);
      window.addEventListener('touchend', onEnd);
      window.addEventListener('touchcancel', onEnd);
      window.addEventListener('message', onMessage, false);
    } else {
      cancelAnimationFrame(animationFrameRef.current!);

      window.removeEventListener('touchStart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onEnd);
      window.removeEventListener('touchcancel', onEnd);
      window.removeEventListener('message', onMessage, false);
    }
  }, [isShow]);

  return null;
};

export default useSwipe;
