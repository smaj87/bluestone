import { AdPlugStyled } from 'commons/AdPlug/styles';
import styled from 'commons/Goober';

export const SlotTopMobileStyled = styled('div')`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 250px; // px - reklama musi mieć stałe wymiary
  overflow: hidden;
`;

export const AdPlugMobile = styled(AdPlugStyled)`
  max-width: 300px; // px - reklama musi mieć stałe wymiary
  max-height: 230px; // px - reklama musi mieć stałe wymiary
`;
