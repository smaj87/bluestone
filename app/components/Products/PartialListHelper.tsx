import { Group } from 'containers/Products/types';
import {
  FC,
  memo,
  ReactNode,
  useLayoutEffect,
  useMemo,
  useRef,
} from 'utils/react';

interface Props {
  group: Group;
  observer: IntersectionObserver;
  children: ReactNode;
}

const PartialListHelper: FC<Props> = ({ children, group, observer }) => {
  const ulRef = useRef<HTMLUListElement | null>(null);

  useLayoutEffect(() => {
    if (ulRef.current && observer) {
      observer.observe(ulRef.current);
    }

    return () => {
      if (ulRef.current && observer) {
        observer.unobserve(ulRef.current);
      }
    };
  }, []);

  return (
    <ul
      ref={ulRef}
      className="group"
      data-group-id={group.id}
      style={useMemo(
        () => ({
          height: `${group.height}px`,
        }),
        [group.height],
      )}
    >
      {children}
    </ul>
  );
};

export default memo(PartialListHelper);
