import { RefObject, useEffect } from 'commons/utils/react';
import { AppThunk } from 'commons/utils/react-redux';
import { dispatch } from 'commons/utils/store';

const margin = 2000;

export const isLoadNext = (container?: HTMLDivElement | null) => {
  const scrollTop = container ? container.scrollTop : window.scrollY;
  const clientHeight = container ? container.clientHeight : window.innerHeight;

  const scrollHeight = container
    ? container.scrollHeight
    : document.documentElement.scrollHeight;

  return scrollTop + clientHeight + margin >= scrollHeight;
};

const useOnLoadNext = (
  isListening: boolean,
  onLoadNext: () => AppThunk,
  containerRef?: RefObject<HTMLDivElement>,
) => {
  useEffect(() => {
    const scrollElement = containerRef?.current || window;

    const onScroll = () => {
      if (isLoadNext(containerRef?.current)) {
        dispatch(onLoadNext());
      }
    };

    if (isListening) {
      scrollElement.addEventListener('scroll', onScroll);
      onScroll();
    }

    return () => {
      scrollElement.removeEventListener('scroll', onScroll);
    };
  }, [isListening]);

  return null;
};

export default useOnLoadNext;
