import { createObserver } from 'commons/utils/contentVisibilityObserver';
import { useLayoutEffect, useRef, useState } from 'commons/utils/react';
import { dispatch } from 'commons/utils/store';

import { ListState } from './types';

type dispatchFunc = (groupIds: ListState['groupVisibility']) => {
  type: string;
  groupIds: ListState['groupVisibility'];
};

type simpleFunc = (groupIds: ListState['groupVisibility']) => void;

interface Options {
  setGroupVisibilityTimeout?: number;
  setGroupVisibility?: dispatchFunc | simpleFunc;
  noDispatchMode?: boolean;
}

const useIntersectionObserver = (options?: Options) => {
  const [observer, setObserver] = useState<IntersectionObserver | null>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const throttlingRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const groupIdsRef = useRef<ListState['groupVisibility']>({});

  useLayoutEffect(() => {
    const newObserver = createObserver('', rootRef.current, (entry) => {
      const groupId = parseInt(
        (entry.target as HTMLElement)?.dataset?.groupId as string,
        10,
      );

      groupIdsRef.current[groupId] = entry.isIntersecting;

      if (!throttlingRef.current) {
        throttlingRef.current = setTimeout(() => {
          if (options?.setGroupVisibility) {
            if (!options?.noDispatchMode) {
              dispatch(
                (options.setGroupVisibility as dispatchFunc)(
                  groupIdsRef.current,
                ),
              );
            } else {
              options.setGroupVisibility(groupIdsRef.current);
            }
          }

          groupIdsRef.current = {};
          throttlingRef.current = null;
        }, options?.setGroupVisibilityTimeout || 10);
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
