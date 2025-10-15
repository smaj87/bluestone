import styled from 'commons/Goober';
import { PRINT_WIDTH } from 'commons/utils/variables';

export const PrintContentStyled = styled('div')`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  max-width: ${PRINT_WIDTH};
`;
