import { Group } from 'commons/ListIntersectionObserver/types';
import {
  FC,
  memo,
  ReactNode,
  useLayoutEffect,
  useMemo,
  useRef,
} from 'commons/utils/react';

import { PartialListStyled } from './styles';

interface Props {
  group: Group;
  observer: IntersectionObserver;
  children: ReactNode;
  isShow?: boolean;
}

const PartialList: FC<Props> = ({
  children,
  group,
  isShow = true,
  observer,
}) => {
  const ulRef = useRef<HTMLUListElement | null>(null);

  useLayoutEffect(() => {
    if (isShow && ulRef.current && observer) {
      observer.observe(ulRef.current);
    }

    return () => {
      if (ulRef.current && observer) {
        observer.unobserve(ulRef.current);
      }
    };
  }, [isShow]);

  return (
    <PartialListStyled
      ref={ulRef}
      data-group-id={group.id}
      style={useMemo(
        () => ({
          height: `${group.height / 10}rem`,
        }),
        [group.height],
      )}
    >
      {children}
    </PartialListStyled>
  );
};

export default memo(PartialList);
