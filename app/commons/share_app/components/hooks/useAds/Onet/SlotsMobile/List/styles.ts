import styled from 'commons/Goober';
import { adsCommonStyles } from 'commons/share_app/components/hooks/useAds/styles';
import { screenXxsAbove } from 'commons/utils/breakpoints';
import { navbarHeight } from 'commons/utils/variables';

// px - reklama musi mieć stałe wymiary
export const SlotMobileStyled = styled('div')`
  position: relative;
  z-index: 0;
  display: flex;
  justify-content: flex-start; // TODO przywrócenie center przed wdrożeniem
  align-items: center;
  flex-direction: column;
  padding: 8px 0;
  width: 100%;
  height: 100%;
  background: var(--ad-plug-bg);

  ${adsCommonStyles};
`;

export const SlotMobileContentStyled = styled('div')`
  position: sticky;
  top: calc(${navbarHeight} + 0.8rem);
  margin: 0 auto;
  width: 100%;
  max-width: 360px;
  overflow: hidden;

  @media screen and (min-width: ${screenXxsAbove}) {
    max-width: 456px;
  }
`;
