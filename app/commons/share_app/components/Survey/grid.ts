import { css } from 'commons/Goober';
import {
  GRID_ARTICLE_AREA_CSS,
  GRID_CONTENT_AREA_CSS,
} from 'commons/share_app/components/Survey/constants';
import { screenLgAbove, screenMdAbove } from 'commons/utils/breakpoints';

import { SurveyStyledProps } from './styles';
import { SurveyGrid } from './types';

export const surveyGrid: Record<SurveyGrid, any> = {
  single: css`
    grid-template-columns: 1fr;
    grid-template-areas: '${GRID_CONTENT_AREA_CSS}';
  `,
  article: css`
    grid-template-columns: 1fr;
    grid-template-areas: '${GRID_ARTICLE_AREA_CSS}' '${GRID_CONTENT_AREA_CSS}';

    @media screen and (min-width: ${screenMdAbove}) {
      grid-template-columns: 1fr 29.6rem;
      grid-template-areas: '${GRID_CONTENT_AREA_CSS} ${GRID_ARTICLE_AREA_CSS}';
    }

    @media screen and (min-width: ${screenLgAbove}) {
      grid-template-columns: 1fr 39.2rem;
    }
  `,
};

export const surveyGridFunc = ({
  $grid,
}: {
  $grid?: SurveyStyledProps['$grid'];
}) => ($grid ? surveyGrid[$grid] : '');
