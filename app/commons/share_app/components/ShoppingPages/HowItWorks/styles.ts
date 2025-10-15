import Button from 'commons/Button';
import styled, { css } from 'commons/Goober';
import {
  screenLgAbove,
  screenLgUnder,
  screenMdAbove,
  screenXlAbove,
  screenXxxsAbove,
} from 'commons/utils/breakpoints';
import { corner } from 'commons/utils/variables';

import { OPTION_2, OPTION_3, OPTION_4 } from '../ShoppingBanner/constants';
import { ImgBgColor } from '../ShoppingBanner/types';

export const HowItWorksTitleStyled = styled('h2')`
  margin: 1.6rem 3.2rem 2.4rem 2.4rem;
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 2.4rem;

  @media screen and (min-width: ${screenMdAbove}) {
    margin: 0 0 1.6rem;
    font-size: 2.6rem;
    line-height: 3rem;
  }
`;

export const HowItWorksTopActionStyled = styled('div')`
  margin: 0 2.4rem 2.4rem;

  @media screen and (min-width: ${screenMdAbove}) {
    margin-inline: 0;
  }
`;

export const HowItWorksButtonStyled = styled(Button)`
  text-transform: uppercase;
`;

export const HowItWorksWrapperStyled = styled('div')`
  margin: 0 1.6rem;

  @media screen and (min-width: ${screenMdAbove}) {
    margin-inline: 0;
  }
`;

const howItWorksGridStyles = css`
  display: grid;
  align-items: start;
  grid-template-columns: 1fr;
  margin: 0 0.8rem;
  gap: 0.8rem;
`;

export const HowItWorksGridStyled = styled('div')`
  ${howItWorksGridStyles}

  @media screen and (min-width: ${screenMdAbove}) {
    grid-template-columns: repeat(3, 1fr);
    margin: 0;
  }
`;

export const HowItWorksGridNoImgStyled = styled('div')`
  ${howItWorksGridStyles}

  @media screen and (min-width: ${screenMdAbove}) {
    grid-template-columns: repeat(2, 1fr);
    margin: 0;
  }

  @media screen and (min-width: ${screenLgAbove}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const howItWorksCellTitleStyles = css`
  text-align: left;
  color: var(--banner-button-txt--primary);
  line-height: 1.6rem;
  font-size: 1.4rem;
  font-weight: 400;

  p {
    display: block;
    margin-bottom: 0.8rem;
    font-size: 1.2rem;
    font-weight: 600;
    text-transform: uppercase;
  }

  @media screen and (min-width: ${screenMdAbove}) {
    line-height: 1.7rem;
    max-width: none;
  }
`;

const howItWorksCellImgWrapperStyles = css`
  display: grid;
  justify-content: center;
  align-items: center;
  width: 10rem;
  height: 10rem;
  background-color: var(--how-it-works-icon-bg);
  position: relative;
  border-radius: ${corner};
`;

interface howItWorksCellProps {
  $or?: boolean;
}

export const HowItWorksCellTitleStyled = styled('div')<howItWorksCellProps>`
  ${howItWorksCellTitleStyles}

  @media screen and (min-width: ${screenMdAbove}) {
    ${({ $or }) => ($or ? 'width: 70%;' : 'width: 80%;')};
  }
`;

export const HowItWorksCellTitleGoodieStyled = styled('div')`
  ${howItWorksCellTitleStyles}
  width: calc(100% - 3.2rem);
  color: var(--shopping-txt--secondary);

  p {
    color: var(--banner-button-txt--primary);
    text-transform: uppercase;
  }
`;

interface HowItWorksImgProps {
  $imgBgColor?: ImgBgColor;
}

const howItWorksBgColor2 = css`
  background-color: var(--how-it-works-icon-bg-2);
`;
const howItWorksBgColor3 = css`
  background-color: var(--how-it-works-icon-bg-3);
`;
const howItWorksBgColor4 = css`
  background-color: var(--how-it-works-icon-bg-4);
`;

export const HowItWorksCellImgWrapperStyled = styled(
  'figure',
)<HowItWorksImgProps>`
  ${howItWorksCellImgWrapperStyles}
  ${({ $imgBgColor }) => $imgBgColor === OPTION_2 && howItWorksBgColor2};
  ${({ $imgBgColor }) => $imgBgColor === OPTION_3 && howItWorksBgColor3};
  ${({ $imgBgColor }) => $imgBgColor === OPTION_4 && howItWorksBgColor4};
`;

export const HowItWorksCellStepWrapperStyled = styled('div')`
  width: 2.4rem;
`;

const howItWorksCellMainStyles = css`
  position: relative;
  display: grid;
  grid-template-columns: auto 1fr;
  justify-content: left;
  gap: 1.6rem;
`;

export const HowItWorksCellStyled = styled('div')`
  ${howItWorksCellMainStyles};

  @media screen and (min-width: ${screenMdAbove}) and (max-width: ${screenLgUnder}) {
    grid-template-columns: auto;
  }
`;

export const HowItWorksCellNoImgStyled = styled('div')`
  ${howItWorksCellMainStyles};
  gap: 0.8rem;
  margin-bottom: 1.6rem;
`;

export const HowItWorksOrStyled = styled('div')`
  position: absolute;
  left: 15%;
  bottom: -1rem;

  @media screen and (min-width: ${screenXxxsAbove}) {
    left: 60%;
    bottom: 0;
  }

  @media screen and (min-width: ${screenMdAbove}) {
    bottom: auto;
    top: 44%;
    left: auto;
    right: 6%;
    font-size: 1.5rem;
    font-weight: 400;
  }

  @media screen and (min-width: ${screenXlAbove}) {
    right: 4.6rem;
    left: auto;
  }
`;

const howItWorksStepMainStyles = css`
  display: inline-block;
  line-height: 2.1rem;
  width: 2rem;
  height: 2rem;
  border-radius: 2rem;
  font-size: 1rem;
  font-weight: 600;
  margin-right: 0.8rem;
  text-align: center;
  vertical-align: bottom;
  background: var(--how-it-works-step-bg);
`;

export const HowItWorksBigStepStyled = styled('span')`
  ${howItWorksStepMainStyles};
  margin-top: -0.4rem;
  margin-right: 0;
  width: 2.4rem;
  height: 2.4rem;
  font-size: 1.2rem;
  line-height: 2.5rem;
`;

export const HowItWorksVisibleButtonStyled = styled(Button)`
  font-weight: 500;
  margin-right: 1.6rem;
`;

export const HowItWorksMobileActionButtonStyled = styled(Button)`
  margin-bottom: 2.4rem;
  margin-left: 2.4rem;
  width: calc(100% - 4.8rem);
  font-weight: 500;
`;
