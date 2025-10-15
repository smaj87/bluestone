import styled from 'commons/Goober';
import { PRINT_WIDTH } from 'commons/utils/variables';

interface LogoPrintingStyledProps {
  $isShow?: boolean;
}

export const LogoPrintingStyled = styled('figure')<LogoPrintingStyledProps>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0 auto;
  padding: 1.6rem;
  border-bottom: 0.1rem solid var(--neutral-border);
  width: 100%;
  height: 6rem;
  max-width: ${PRINT_WIDTH};
  overflow: hidden;
  img {
    display: block;
    max-width: 100%;
    max-height: 100%;
    object-fit: scale-down;
    object-position: 0 center;
  }
`;
