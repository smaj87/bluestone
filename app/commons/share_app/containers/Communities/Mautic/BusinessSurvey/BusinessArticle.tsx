import useTranslations from 'commons/hooks/useTranslations';
import {
  SurveyArticleContentStyled,
  SurveyArticleStyled,
} from 'commons/share_app/components/Survey/styles';
import SurveyArticleHeader from 'commons/share_app/components/Survey/SurveyArticleHeader';
import { FC, memo } from 'commons/utils/react';

const BusinessArticle: FC = () => {
  const t = useTranslations();

  return (
    <SurveyArticleStyled $type="business">
      <SurveyArticleContentStyled>
        <SurveyArticleHeader
          isUnderline
          title={t('surveyBusinessArticleTitle')}
        />
        <ul>
          <li>{t('surveyBusinessArticleListItem1', { value: '' })}</li>
          <li>{t('surveyBusinessArticleListItem2')}</li>
          <li>{t('surveyBusinessArticleListItem3')}</li>
          <li>{t('surveyBusinessArticleListItem4')}</li>
          <li>{t('surveyBusinessArticleListItem5')}</li>
          <li>{t('surveyBusinessArticleListItem6')}</li>
        </ul>
      </SurveyArticleContentStyled>
    </SurveyArticleStyled>
  );
};

export default memo(BusinessArticle);
