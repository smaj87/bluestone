import Button from 'commons/Button';
import styled, { css } from 'commons/Goober';
import { ctaBottomNavStyles } from 'commons/share_app/components/BottomNavigation/styles';
import { animationStyle } from 'commons/utils/variables';

const hiddenStyles = css`
  transform: translateY(250%);
`;
const visibleStyles = css`
  transform: translateY(0);
`;

export const ButtonGoTopStyled = styled(Button)<{ $isVisible: boolean }>`
  ${ctaBottomNavStyles};
  transition: transform ${animationStyle};
  will-change: transform;
  ${({ $isVisible }) => ($isVisible ? visibleStyles : hiddenStyles)}
`;
