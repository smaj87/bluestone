import Button from 'commons/Button';
import { customCommunicationStyles } from 'commons/CustomCommunication/styles';
import { ctaCustomCommunicationStyles } from 'commons/CustomCommunication/stylesCTA';
import styled from 'commons/Goober';
import { screenMdAbove, screenMdUnder } from 'commons/utils/breakpoints';
import { LAYER_BANNERS } from 'commons/utils/layers';
import { corner } from 'commons/utils/variables';

import { BANNER_CLASS } from './constants';

export const BannersStyled = styled('div')`
  .${BANNER_CLASS} {
    width: 100%;

    > div[id],
    > div:not([class='']) {
      width: 100%;
    }

    &:not(:first-child) {
      display: none;
    }
  }
`;

export const BannerStyled = styled('div')`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  margin-bottom: 2rem;
  padding: 2rem;
  width: 100%;
  background: var(--banner-bg);
  border: 0.1rem solid var(--banner-border);
  border-radius: ${corner};
  overflow: hidden;
  box-shadow: 0 0 1.6rem var(--banner-shadow);

  &:not(:first-child) {
    display: none;
  }

  ${customCommunicationStyles};
  ${ctaCustomCommunicationStyles};
`;

export const BannerMobileStyled = styled('div')`
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: ${LAYER_BANNERS};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: flex-start;
  align-items: flex-start;
  width: 100%;
  max-height: 100%;
  background: var(--banner-bg);
  overflow-y: auto;

  > div[id],
  > div:not([class='']) {
    width: 100%;
  }

  ${customCommunicationStyles};
  ${ctaCustomCommunicationStyles};
`;

export const BannerDetailStyled = styled('div')`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: flex-start;
  align-items: flex-start;
  flex: 1;
  margin: 0 auto;
  padding: 2.4rem 1.6rem;
  width: 100%;
  max-width: 36rem;

  @media screen and (min-width: ${screenMdAbove}) {
    padding: 0;
    max-width: none;
  }
`;

export const BannerDescriptionStyled = styled('div')`
  display: grid;
  grid-template-columns: 1fr;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 3.2rem;
  width: 100%;
  min-width: 0;
  white-space: pre-line;

  h3 {
    margin-bottom: 0.8rem;
    width: 100%;
    font-weight: 700;
    font-size: 1.6rem;
    line-height: 1.25;
    color: var(--banner-txt--primary);
    text-align: left;
  }

  p {
    margin: 0;
    width: 100%;
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 1.5;
    color: var(--banner-txt--secondary);
  }

  ul {
    display: grid;
    grid-template-columns: 1fr;
    justify-content: flex-start;
    align-items: flex-start;
    row-gap: 0.8rem;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li {
    position: relative;
    margin: 0;
    padding-left: 3.2rem;
    width: 100%;
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 1.5;
    color: var(--banner-txt--secondary);

    &:before {
      content: '';
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-80%) rotate(-45deg);
      width: 1.5rem;
      height: 0.7rem;
      border-width: 0 0 0.2rem 0.2rem;
      border-style: solid;
      border-color: var(--banner-brand);
    }
  }
`;

export const BannerDescriptionContentStyled = styled('div')`
  display: grid;
  grid-template-columns: 1fr;
  justify-content: flex-start;
  align-items: flex-start;
  row-gap: 0.8rem;
  min-width: 0;
  max-width: 64rem;
`;

export const ButtonCloseStyled = styled(Button)`
  position: absolute;
  top: 0;
  right: 0;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  border-color: var(--banner-close-border);
  background: var(--banner-close-bg);
  color: var(--banner-close-txt);

  @media (hover: hover) {
    &:hover:not(:disabled) {
      border-color: var(--banner-close-border--hover);
      background: var(--banner-close-bg--hover);
      color: var(--banner-close-txt--hover);
    }
  }
`;

export const BannerActionsStyled = styled('div')`
  position: sticky;
  bottom: 0;
  z-index: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  row-gap: 1.6rem;
  column-gap: 1.6rem;
  padding-block: 1.6rem;
  background: var(--banner-bg);
`;

export const BannerActionItemStyled = styled('div')`
  @media screen and (max-width: ${screenMdUnder}) {
    width: 100%;
    text-align: center;
  }
`;

export const BannerImageStyled = styled('figure')`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 0 0 20rem;
  margin: 0;
  padding: 0.8rem;
  width: 100%;
  height: 20rem;
  background: var(--banner-image-bg);
  overflow: hidden;

  img {
    display: block;
    max-width: 100%;
    max-height: 100%;
    object-fit: scale-down;
  }

  @media screen and (min-width: ${screenMdAbove}) {
    margin-right: 3.2rem;
    border-radius: ${corner};
  }
`;
