import { AdPlugStyled } from 'commons/AdPlug/styles';
import styled from 'commons/Goober';

export const SlotTopContainer = styled('div')`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: -0.8rem;
  padding: 8px 0; // px - reklama musi mieć stałe wymiary
  height: 320px; // px - reklama musi mieć stałe wymiary
  width: 100%;
  overflow: hidden;
`;

export const AdPlugTop = styled(AdPlugStyled)`
  max-width: 1170px; // px - reklama musi mieć stałe wymiary
  max-height: 300px; // px - reklama musi mieć stałe wymiary
`;
