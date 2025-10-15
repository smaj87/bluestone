import styled from 'commons/Goober';
import { mainSectionStyles } from 'commons/share_app/components/MainSection/styles';
import { screenMdAbove } from 'commons/utils/breakpoints';
import { corner } from 'commons/utils/variables';

export const ReadMailStyled = styled('section')`
  ${mainSectionStyles}
`;

export const ReadMailContentStyled = styled('div')`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 0.8rem;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  min-width: 0;
`;

export const MailStyled = styled('div')`
  position: relative;
  margin-bottom: 0.8rem;
  width: 100%;
  overflow: hidden;

  @media screen and (min-width: ${screenMdAbove}) {
    margin-bottom: 0;
    padding: 0.8rem;
    border-radius: ${corner};
    background: var(--readmail-bg);
  }
`;

export const MailContentStyled = styled('div')`
  padding: 0.8rem;
  background: var(--neutral-bg);
  font-size: 16px; // TODO do zmiany po przeprojektowaniu html font-size/rem
  img {
    max-width: 100%;
  }
`;
