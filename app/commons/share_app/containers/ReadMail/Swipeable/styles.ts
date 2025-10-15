import styled, { css } from 'commons/Goober';
import Icon from 'commons/Icon';
import { TOOLBAR_HEIGHT_MOBILE } from 'commons/Toolbar/constants';
import { animationStyle, corner, navbarHeight } from 'commons/utils/variables';

import { BLOCK_SHIFT, BOUNCING_CLASS, NAVIGATION_WIDTH } from './constants';

export const SwipeableStyled = styled('div')`
  width: 100%;
  min-height: 100%;
  overflow: hidden;
`;

export const SwipeableContentStyled = styled('div')`
  position: relative;
  display: flex;
  justify-content: center;
  align-content: flex-start;
  width: 100%;
  min-height: 100%;
`;

export const SwipeLabelStyled = styled('div')`
  font-size: 1.4rem;
  line-height: 2rem;
  writing-mode: vertical-rl;
  text-orientation: mixed;
`;

export const MainDetailContentStyled = styled('div')`
  display: grid;
  grid-template-columns: 1fr;
  justify-content: flex-start;
  align-items: flex-start;
  row-gap: 0.8rem;
  width: 100%;
`;

interface NavigationContentStyledProps {
  $isNext?: boolean;
}

const navigationContentNextStyles = css`
  justify-content: flex-start;
  left: calc(-${NAVIGATION_WIDTH}% - ${BLOCK_SHIFT}px);
`;

const navigationContentPrevStyles = css`
  justify-content: flex-end;
  right: calc(-${NAVIGATION_WIDTH}% - ${BLOCK_SHIFT}px);
`;

export const NavigationContentStyled = styled(
  'div',
)<NavigationContentStyledProps>`
  ${({ $isNext }) =>
    $isNext ? navigationContentNextStyles : navigationContentPrevStyles};
  position: fixed;
  top: ${navbarHeight};
  bottom: ${TOOLBAR_HEIGHT_MOBILE};
  z-index: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: ${NAVIGATION_WIDTH}%;
  text-align: center;
  pointer-events: none;
  &.${BOUNCING_CLASS} {
    transition: transform ${animationStyle};
  }
`;

interface SwipeContentStyledProps {
  $isNext?: boolean;
}

const swipeContentNextStyles = css`
  margin-left: ${BLOCK_SHIFT}px; /* px jednostka zgodna z ...ContentPrevStyles */
  border-radius: 0 ${corner} ${corner} 0;
  box-shadow: 0.2rem 0 0.8rem 0 var(--readmail-swipe-shadow);
`;

const swipeContentPrevStyles = css`
  margin-right: ${BLOCK_SHIFT}px; /* px jednostka zgodna z ...ContentPrevStyles */
  border-radius: ${corner} 0 0 ${corner};
  box-shadow: -0.2rem 0 0.8rem 0 var(--readmail-swipe-shadow);
`;

export const SwipeContentStyled = styled('div')<SwipeContentStyledProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  padding: 0.8rem;
  width: 4.4rem;
  height: 25vh;
  background: var(--readmail-swipe-bg);
  color: var(--readmail-swipe-txt);
  ${({ $isNext }) =>
    $isNext ? swipeContentNextStyles : swipeContentPrevStyles}
`;

export const IconSwipeDetail = styled(Icon)`
  font-size: 2rem;
  animation: swipeArrowMove 2s linear infinite;
  transform: translate3d(0, 0, 0);

  @keyframes swipeArrowMove {
    0% {
      transform: translate3d(0, 0, 0);
    }
    25% {
      transform: translate3d(25%, 0, 0);
    }
    50% {
      transform: translate3d(0, 0, 0);
    }
    75% {
      transform: translate3d(-25%, 0, 0);
    }
    100% {
      transform: translate3d(0, 0, 0);
    }
  }
`;
