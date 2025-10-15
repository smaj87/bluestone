import styled, { css } from 'commons/Goober';

export const adPlugLabelStyles = css`
  font-weight: 300;
  font-size: 1.2rem;
  line-height: 1.4rem;
  color: var(--ad-plug-txt);
  text-align: center;
  text-transform: uppercase;
`;

export const AdPlugStyled = styled('div')`
  ${adPlugLabelStyles};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
