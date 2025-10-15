import { FC, memo } from 'commons/utils/react';

import { SurveyArticleHeaderStyled } from './styles';
import SurveyArticleTitleUnderline from './SurveyArticleTitleUnderline';

interface Props {
  isUnderline?: boolean;
  title: string;
}

const SurveyArticleHeader: FC<Props> = ({ isUnderline, title }) => (
  <SurveyArticleHeaderStyled>
    <h3>{title}</h3>
    {isUnderline ? <SurveyArticleTitleUnderline /> : null}
  </SurveyArticleHeaderStyled>
);

export default memo(SurveyArticleHeader);
