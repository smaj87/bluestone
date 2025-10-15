import styled from 'commons/Goober';
import {
  GRID_ARTICLE_AREA_CSS,
  GRID_CONTENT_AREA_CSS,
} from 'commons/share_app/components/Survey/constants';
import { surveyGridFunc } from 'commons/share_app/components/Survey/grid';
import { screenLgAbove, screenMdAbove } from 'commons/utils/breakpoints';

import { surveyArticleFunc } from './article';
import { SurveyArticle, SurveyGrid } from './types';

export interface SurveyStyledProps {
  $grid?: SurveyGrid;
}

export const SurveyStyled = styled(`div`)<SurveyStyledProps>`
  position: relative;
  display: grid;
  justify-content: flex-start;
  align-content: flex-start;
  width: 100%;
  border-radius: 0.8rem;
  overflow: hidden;
  ${surveyGridFunc};
`;

export const SurveyContentStyled = styled('div')`
  grid-area: ${GRID_CONTENT_AREA_CSS};
  padding: 1.6rem;
  background: var(--survey-content-bg);

  @media screen and (min-width: ${screenMdAbove}) {
    padding: 2.4rem;
  }

  @media screen and (min-width: ${screenLgAbove}) {
    padding: 4.8rem;
  }
`;

export const SurveyDetailsStyled = styled(`div`)`
  display: grid;
  grid-template-columns: 1fr;
  justify-content: flex-start;
  align-items: flex-start;
  margin-inline: auto;
  width: 100%;
  max-width: 56rem;
  min-height: 20rem;

  form {
    text-align: center;

    h2 {
      margin-bottom: 1.6rem;
      font-weight: 700;
      font-size: 2.8rem;
      line-height: 1;
      color: var(--survey-content-txt--primary);
    }

    p,
    li {
      font-weight: 400;
      font-size: 1.6rem;
      line-height: 1.25;
      color: var(--survey-content-txt--secondary);
    }
  }

  label[for] {
    margin-bottom: 0.8rem;
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 1.25;
  }
`;

export const SurveyImageStyled = styled(`figure`)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-inline: auto;
  padding: 0.8rem;
  border-radius: 0.8rem;
  width: fit-content;
  max-width: 100%;
  height: 14.4rem;
  background: var(--survey-image-bg);

  img {
    display: block;
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
`;

export interface SurveyArticleStyledProps {
  $type?: SurveyArticle;
}

export const SurveyArticleStyled = styled('div')<SurveyArticleStyledProps>`
  grid-area: ${GRID_ARTICLE_AREA_CSS};
  padding: 1.6rem;
  ${surveyArticleFunc};

  @media screen and (min-width: ${screenMdAbove}) {
    padding: 2.4rem;
  }

  @media screen and (min-width: ${screenLgAbove}) {
    padding: 4.8rem;
  }
`;

export const SurveyArticleHeaderStyled = styled('div')`
  position: relative;
  margin-bottom: 1.6rem;
  padding-bottom: 0.8rem;

  svg {
    position: absolute;
    bottom: 0;
    left: 0;
  }
`;

export const SurveyArticleContentStyled = styled('div')`
  margin-inline: auto;
  width: 100%;
  max-width: 56rem;

  h3 {
    font-weight: 700;
    font-size: 1.8rem;
    line-height: 1;
    text-align: left;
  }

  p {
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 1.25;
    text-align: left;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li {
    position: relative;
    padding-left: 2.4rem;
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 1.25;
    text-align: left;

    &:before {
      content: '\\e94f';
      position: absolute;
      top: 0;
      left: 0;
      font-family: 'webmail';
      font-size: 1.6rem;
      line-height: 1;
    }

    &:not(:last-child) {
      margin-bottom: 1.6rem;
    }
  }
`;
