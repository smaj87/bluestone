import styled from 'commons/Goober';
import { adsCommonStyles } from 'commons/share_app/components/hooks/useAds/styles';

export const BoxLeftFolderListStyled = styled('div')`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0.8rem 0;
  width: 100%;
  max-width: 215px; // px - reklama musi mieć stałe wymiary

  ${adsCommonStyles};
`;

export const BoxLeftFolderListContentStyled = styled('div')`
  width: 100%;
  max-width: 215px; // px - reklama musi mieć stałe wymiary
  overflow: hidden;
`;
