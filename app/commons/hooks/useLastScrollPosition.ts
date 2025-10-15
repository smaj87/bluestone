import { useLayoutEffect, useRef, useState } from 'commons/utils/react';

const useLastScrollPosition = (isShow = false) => {
  const [lastScrollPosition, setLastScrollPosition] = useState(window.scrollY);
  const lastScrollRef = useRef(window.scrollY);

  useLayoutEffect(() => {
    const onScroll = () => {
      lastScrollRef.current = window.scrollY;
    };

    if (isShow) {
      document.addEventListener('scroll', onScroll);
      onScroll();
    } else {
      document.removeEventListener('scroll', onScroll);
      setLastScrollPosition(lastScrollRef.current);
    }
  }, [isShow]);

  return lastScrollPosition;
};

export default useLastScrollPosition;
