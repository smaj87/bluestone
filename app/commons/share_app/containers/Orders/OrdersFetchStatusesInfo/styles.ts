import styled, { css } from 'commons/Goober';
import Icon from 'commons/Icon';
import { corner } from 'commons/utils/variables';

interface StatusesInfoProps {
  isError?: boolean;
}

const isErrorStyles = css`
  background-color: var(--order-status-bg--error);
  color: var(--order-status-txt--default);
`;

const isProcessingStateStyles = css`
  background-color: var(--order-status-bg--processing);
  color: var(--order-status-txt--processing);
`;

export const StatusesInfoStyled = styled('div')<StatusesInfoProps>`
  position: sticky;
  top: 5.6rem;
  z-index: 100;
  display: flex;
  flex-direction: row;
  gap: 1.6rem;
  justify-content: center;
  align-items: center;
  padding: 1.6rem;
  margin-bottom: 1.6rem;
  border-radius: ${corner};
  font-size: 1.6rem;
  font-weight: 500;

  max-width: 90rem;
  ${({ isError }) => (isError ? isErrorStyles : isProcessingStateStyles)};
`;

export const StatusesInfoIconStyled = styled(Icon)`
  font-size: 2.4rem;
`;
