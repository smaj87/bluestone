import { FC, memo, ReactNode, useEffect, useRef } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

import { isPrinting as isPrintingSelector } from 'containers/App/selectors';

import { IS_MOVING_CLASS } from '../constants';
import { ToolbarStyled, ToolbarWrapperStyled } from '../styles';

interface Props {
  children: ReactNode;
  noNavbar?: boolean;
  isShow: boolean;
}

const ToolbarTop: FC<Props> = ({ children, isShow, noNavbar }) => {
  const toolbarRef = useRef<HTMLDivElement | null>(null);
  const isPrinting = useSelector(isPrintingSelector);

  useEffect(() => {
    let observer: IntersectionObserver | undefined;

    if (isShow) {
      // todo!!! ObserverFactory, one observer with observe and unobserve
      observer = new IntersectionObserver(
        ([entry]) => {
          entry.target.classList.toggle(
            IS_MOVING_CLASS,
            entry.intersectionRatio < 1,
          );
        },
        {
          threshold: [1],
          rootMargin: !isPrinting ? '-57px 0px 0px 0px' : '0px', // 57px = navbarHeight + 1px - unit only px or %,
        },
      );

      if (toolbarRef.current) {
        observer.observe(toolbarRef.current);
      }
    } else {
      observer?.disconnect?.();
      toolbarRef.current?.classList?.remove?.(IS_MOVING_CLASS);
    }

    return () => {
      // todo remove after cache view all
      observer?.disconnect?.();
      toolbarRef.current?.classList?.remove?.(IS_MOVING_CLASS);
    };
  }, [isPrinting, isShow]);

  return (
    <ToolbarWrapperStyled ref={toolbarRef} $noNavbar={noNavbar}>
      <ToolbarStyled $isPrinting={isPrinting} role="toolbar">
        {children}
      </ToolbarStyled>
    </ToolbarWrapperStyled>
  );
};

export default memo(ToolbarTop);
