import useLastScrollPosition from 'commons/hooks/useLastScrollPosition';
import { useCallback, useLayoutEffect, useRef } from 'commons/utils/react';
import { scrollPage } from 'commons/utils/scroll';

const useDisplayContainer = (
  containerId: string,
  isShow = false,
  ignoreLastScrollPosition = false,
  display = 'block',
) => {
  const lastScrollPosition = useRef(0);
  lastScrollPosition.current = useLastScrollPosition(isShow);

  if (ignoreLastScrollPosition) {
    lastScrollPosition.current = 0;
  }

  const set = useCallback((isShowContainer) => {
    const container = document.getElementById(containerId);

    if (container && isShowContainer) {
      container.setAttribute('aria-hidden', 'false');
      container.style.display = display;
    } else if (container) {
      container.setAttribute('aria-hidden', 'true');
      container.style.display = 'none';
    }
  }, []);

  // for performance
  set(isShow);

  useLayoutEffect(() => {
    set(isShow);

    if (isShow) {
      scrollPage(lastScrollPosition.current);
    }
  }, [isShow]);

  return null;
};

export default useDisplayContainer;
