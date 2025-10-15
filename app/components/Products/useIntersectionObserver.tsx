import { setGroupVisibility } from 'containers/Products/actions';
import { ProductsState } from 'containers/Products/types';
import { createObserver } from 'utils/contentVisibilityObserver';
import { useLayoutEffect, useRef, useState } from 'utils/react';
import { dispatch } from 'utils/store';

const useIntersectionObserver = () => {
  const [observer, setObserver] = useState<IntersectionObserver | null>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const throttlingRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const groupIdsRef = useRef<ProductsState['groupVisibility']>({});

  useLayoutEffect(() => {
    const newObserver = createObserver('', rootRef.current, (entry) => {
      const groupId = parseInt(
        (entry.target as HTMLElement)?.dataset?.groupId as string,
        10,
      );

      groupIdsRef.current[groupId] = entry.isIntersecting;

      if (!throttlingRef.current) {
        throttlingRef.current = setTimeout(() => {
          dispatch(setGroupVisibility(groupIdsRef.current));

          groupIdsRef.current = {};
          throttlingRef.current = null;
        }, 10);
      }
    });

    setObserver(newObserver);

    return () => {
      newObserver.disconnect();
    };
  }, []);

  return { observer, rootRef };
};

export default useIntersectionObserver;
