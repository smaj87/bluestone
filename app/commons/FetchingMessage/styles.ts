import styled, { css } from 'commons/Goober';
import { LAYER_FETCHING_MESSAGE } from 'commons/utils/layers';
import { corner } from 'commons/utils/variables';

export const FetchingMessageStyled = styled('div')`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: ${LAYER_FETCHING_MESSAGE};
  @media print {
    display: none;
  }
`;

const loaderMessageMdAboveStyles = css`
  transform: translate3d(-50%, 1.2rem, 0);
  transition: none;
`;

interface FetchingMessageDetailStyledProps {
  $isShow?: boolean;
}

export const FetchingMessageDetailStyled = styled(
  'div',
)<FetchingMessageDetailStyledProps>`
  position: absolute;
  top: 0;
  left: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.4rem;
  padding: 0.4rem 1.6rem;
  width: 100%;
  max-width: 29.6rem;
  height: 3.2rem;
  border-radius: ${corner};
  background: var(--fetching-message-bg);
  font-weight: 500;
  font-size: 1.3rem;
  line-height: 2rem;
  color: var(--fetching-message-txt);
  text-transform: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  box-shadow: 0 0 0.4rem var(--fetching-message-shadow);
  transform: translate3d(-50%, -10rem, 0);
  transition: transform 0.2s linear 0.2s;
  ${({ $isShow }) => ($isShow ? loaderMessageMdAboveStyles : undefined)}
`;

export const FetchingMessageLabelStyled = styled('span')`
  min-width: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
