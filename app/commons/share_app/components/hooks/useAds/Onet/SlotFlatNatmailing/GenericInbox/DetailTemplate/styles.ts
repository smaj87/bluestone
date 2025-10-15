import styled, { css } from 'commons/Goober';
import {
  screenSmAbove,
  screenSmUnder,
  screenXsAbove,
} from 'commons/utils/breakpoints';
import { animationStyle, corner, fontApp } from 'commons/utils/variables';

import { MAIL_DETAIL_IFRAME_CLASS } from 'components/MailDetailIframe/constants';

import { StylesInterface } from './types';

const scaleImageStyles = css`
  display: block;
  width: 100%;
  height: 100%;
  border-style: none;
  object-fit: contain;
  &[src=''] {
    display: none;
  }
`;

const trimImageAltStyles = css`
  word-break: break-word;
  font-size: 1.4rem;
  line-height: 2rem;
  overflow: hidden;
`;

export const resetStyles = css`
  html {
    font-size: 10px;
  }
  * {
    margin: 0;
    padding: 0;
    font-family: ${fontApp};
    outline: none;
    box-sizing: border-box;
  }
  *:hover,
  *:focus,
  *:active {
    outline: none;
  }
  :before,
  :after {
    box-sizing: border-box;
  }
  img {
    display: inline-flex;
  }
`;

export const typoStyles = css`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
    padding: 0;
    border: 0;
    line-height: 1.43;
    vertical-align: baseline;
    outline: none;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-bottom: 0.8rem;
  }
  h1 {
    font-size: 2.8rem;
  }
  h2 {
    font-size: 2.4rem;
  }
  h3 {
    font-size: 2rem;
  }
  h4 {
    font-size: 1.8rem;
  }
  h5 {
    font-size: 1.6rem;
  }
  h6 {
    font-size: 1.4rem;
  }
  p,
  li {
    font-size: 1.4rem;
  }
  p:not(:last-child),
  li:not(:last-child) {
    margin-bottom: 0.4rem;
  }
  ol,
  ul {
    margin: 0 0 0.8rem;
    border: 0;
    font-family: ${fontApp};
    vertical-align: baseline;
    outline: none;
  }
  a {
    -webkit-text-decoration-skip: objects; /* Remove the gaps in underlines in iOS 8+ and Safari 8+. */
    -ms-touch-action: manipulation; /* Remove the tapping delay in IE 10 */
    touch-action: manipulation;
  }
`;

const AdvertColors = css<StylesInterface>`
  background-color: ${({ $bgColor }) => $bgColor || '#fff'};
`;

export const AdvertStyled = styled('article')<StylesInterface>`
  ${typoStyles};
  padding: 0.8rem;
  ${AdvertColors};
`;

const HeaderColors = css<StylesInterface>`
  background-color: ${({ $bgColor }) => $bgColor || '#fff'};
  color: ${({ $txtColor }) => $txtColor || '#313131'};
`;

export const HeaderStyled = styled('header')<StylesInterface>`
  margin: 0 0 2rem;
  padding: 0.8rem;
  width: 100%;
  ${HeaderColors};
  * {
    ${HeaderColors};
  }
  figure {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 0 2rem;
    padding: 0;
    width: 100%;
    height: 10rem;
    ${trimImageAltStyles};
    img {
      ${scaleImageStyles};
    }
  }
  iframe {
    background-color: transparent;
  }
`;

export const HeaderContentStyled = styled('div')`
  overflow: hidden;
`;

const footerColors = css<StylesInterface>`
  background-color: ${({ $bgColor }) => $bgColor || '#fff'};
  color: ${({ $txtColor }) => $txtColor || '#313131'};
`;

export const FooterStyled = styled('footer')<StylesInterface>`
  display: flex;
  justify-content: center;
  align-items: stretch;
  margin-top: 2rem;
  padding: 0;
  page-break-inside: avoid;
  ${footerColors};
  * {
    ${footerColors};
  }
  figure {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 0 0 12rem;
    padding: 0.8rem;
    width: 12rem;
    height: 10rem;
    ${trimImageAltStyles};
    img {
      ${scaleImageStyles};
    }
  }
  iframe {
    background-color: transparent;
  }
  @media screen and (max-width: ${screenSmUnder}) {
    flex-direction: column;
    figure {
      justify-content: flex-start;
      align-items: center;
      flex: 1;
      padding: 0.8rem 0;
      width: auto;
    }
  }
`;

export const FooterContentStyled = styled('div')`
  flex: 1;
  padding: 0.8rem 0;
  page-break-inside: avoid;
  @media screen and (min-width: ${screenSmAbove}) {
    padding-inline: 0.8rem;
  }
`;

export const TilesRowStyled = styled('div')`
  display: flex;
  justify-content: center;
  align-content: flex-start;
  align-items: stretch;
  flex-wrap: wrap;
  margin: 0 -0.4rem;
  padding: 0;
  &:empty {
    display: none;
  }
`;

export const TileStyled = styled('div')`
  padding: 0.4rem;
  width: 100%;
  page-break-inside: avoid;
  visibility: visible;
  @media screen and (min-width: ${screenXsAbove}) {
    width: 50%;
  }
  @media screen and (min-width: ${screenSmAbove}) {
    width: 25%;
  }
`;

export const TileAnchorStyled = styled('a')<StylesInterface>`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 0.8rem;
  width: 100%;
  height: 100%;
  border-radius: ${corner};
  background-color: ${({ $bgColor }) => $bgColor || '#fff'};
  text-decoration: none;
  box-shadow: 0 0 0.4rem rgba(140, 140, 140, 0.3);
  transition: box-shadow ${animationStyle};
  @media screen and (hover: hover) {
    &:hover {
      box-shadow: 0 0 0.4rem rgba(140, 140, 140, 0.6);
    }
  }
`;

export const TileTopStyled = styled('div')`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0.8rem;
  width: 100%;
  &:empty {
    display: none;
  }
`;

export const DiscountStyled = styled('div')`
  position: absolute;
  top: 0;
  left: 0;
  width: 11.2rem;
  height: 11.2rem;
  overflow: hidden;
`;

export const RibbonStyled = styled('div')<StylesInterface>`
  position: relative;
  transform: rotate(-45deg);
  text-align: center;
  padding: 0.8rem 0;
  left: -3.6rem;
  top: 2.4rem;
  width: 15.2rem;
  background-color: ${({ $bgColor }) => $bgColor || '#ffb400'};
  color: ${({ $txtColor }) => $txtColor || '#313131'};
`;

export const TileLogoStyled = styled('figure')`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  align-self: flex-end;
  margin-left: auto;
  width: 7.2rem;
  height: 3.6rem;
  ${trimImageAltStyles};
  img {
    ${scaleImageStyles};
    object-position: center right;
  }
`;

export const TileButtonStyled = styled('div')<StylesInterface>`
  padding: 0.4rem 0.8rem;
  width: 100%;
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.5rem;
  text-align: center;
  background-color: ${({ $bgColor }) => $bgColor || '#ffb400'};
  color: ${({ $txtColor }) => $txtColor || '#313131'};
`;

export const TileNameStyled = styled('div')<StylesInterface>`
  min-width: 0;
  width: 100%;
  font-weight: 400;
  font-size: 1.3rem;
  line-height: 1.6rem;
  color: ${({ $txtColor }) => $txtColor || '#313131'};
  word-break: break-word;
`;

export const TileDatasStyled = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  align-self: flex-end;
  margin-top: auto;
  width: 100%;
`;

export const TilePricesStyled = styled('div')`
  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  padding: 0.8rem 0;
  min-width: 0;
  width: 100%;
  white-space: nowrap;
`;

export const TilePriceStyled = styled('div')<StylesInterface>`
  display: block;
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 2.4rem;
  background-color: ${({ $bgColor }) => $bgColor || 'inherit'};
  color: ${({ $txtColor }) => $txtColor || '#313131'};
`;

export const TileOldPriceStyled = styled('s')<StylesInterface>`
  display: block;
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.5rem;
  text-decoration: line-through;
  background-color: ${({ $bgColor }) => $bgColor || 'inherit'};
  color: ${({ $txtColor }) => $txtColor || '#313131'};
`;

export const TileOmnibusPriceStyled = styled('div')<StylesInterface>`
  order: -1;
  display: block;
  min-width: 0;
  max-width: 100%;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5rem;
  background-color: ${({ $bgColor }) => $bgColor || 'inherit'};
  color: ${({ $txtColor }) => $txtColor || '#8c8c8c'};
  white-space: normal;
`;

export const TileProductStyled = styled('figure')`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0 0.8rem;
  width: 100%;
  height: 20rem;
  ${trimImageAltStyles};
  img {
    ${scaleImageStyles};
  }
  @media screen and (min-width: ${screenXsAbove}) {
    height: 10rem;
  }
`;

export const BannerStyled = styled('div')`
  margin-bottom: 2rem;
  width: 100%;
  page-break-inside: avoid;
  &:empty {
    display: none;
  }
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    overflow: hidden;
    ${trimImageAltStyles};
  }
  img {
    ${scaleImageStyles};
    max-height: 30rem;
  }
`;

export const AdditionalStyled = styled('div')`
  margin-bottom: 2rem;
  padding: 0;
  .${MAIL_DETAIL_IFRAME_CLASS} {
    background-color: transparent;
  }
  iframe {
    background-color: transparent;
  }
`;
