import { css } from 'commons/Goober';

import { SurveyArticleStyledProps } from './styles';
import { SurveyArticle } from './types';

export const surveyArticle: Record<SurveyArticle, any> = {
  main: css`
    background: var(--survey-article-bg--main);
    color: var(--survey-article-txt--main);

    path {
      fill: var(--survey-article-underline--main);
    }
  `,
  business: css`
    background: var(--survey-article-bg--business);
    color: var(--survey-article-txt--business);

    path {
      fill: var(--survey-article-underline--business);
    }
  `,
};

export const surveyArticleFunc = ({
  $type,
}: {
  $type?: SurveyArticleStyledProps['$type'];
}) => ($type ? surveyArticle[$type] : surveyArticle.main);
