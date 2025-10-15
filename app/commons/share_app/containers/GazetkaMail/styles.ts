import styled from 'commons/Goober';
import { mainSectionStyles } from 'commons/share_app/components/MainSection/styles';
import { screenMdAbove } from 'commons/utils/breakpoints';
import { fontApp } from 'commons/utils/variables';

export const GazetkaMailStyled = styled('section')`
  ${mainSectionStyles}
`;

export const GazetkaMailContentStyled = styled('div')`
  position: relative;
  margin-bottom: 0.8rem;
  width: 100%;
  background: var(--neutral-bg);
  overflow: hidden;

  @media screen and (min-width: ${screenMdAbove}) {
    padding: 0.8rem;
  }
`;

export const GazetkaLabelStyled = styled('div')`
  margin: 0.8rem 0;
  padding: 0 0.8rem;
  font-family: ${fontApp};
  font-size: 1rem;
  line-height: 1;
  color: var(--neutral-txt--primary);
  text-align: left;
  text-transform: uppercase;

  @media screen and (min-width: ${screenMdAbove}) {
    margin-top: 0;
    padding-inline: 0;
  }
`;
