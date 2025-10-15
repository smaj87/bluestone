import { FC, memo, useRef } from 'commons/utils/react';

import Content from '../Content';
import {
  MainDetailContentStyled,
  NavigationContentStyled,
  SwipeableContentStyled,
  SwipeableStyled,
} from './styles';
import SwipeContent from './SwipeContent';
import useSwipe from './useSwipe';

const Swipeable: FC = () => {
  const prevContentRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const nextContentRef = useRef<HTMLDivElement>(null);

  useSwipe(prevContentRef, contentRef, nextContentRef);

  return (
    <SwipeableStyled tabIndex={-1}>
      <SwipeableContentStyled>
        <NavigationContentStyled ref={prevContentRef} $isNext>
          <SwipeContent isNext />
        </NavigationContentStyled>
        <MainDetailContentStyled ref={contentRef}>
          <Content />
        </MainDetailContentStyled>
        <NavigationContentStyled ref={nextContentRef}>
          <SwipeContent />
        </NavigationContentStyled>
      </SwipeableContentStyled>
    </SwipeableStyled>
  );
};

export default memo(Swipeable);
