import {
  SurveyContentStyled,
  SurveyDetailsStyled,
  SurveyStyled,
} from 'commons/share_app/components/Survey/styles';
import SurveyImage from 'commons/share_app/components/Survey/SurveyImage';
import { FC, memo, useEffect } from 'commons/utils/react';
import { scrollPage } from 'commons/utils/scroll';

import MauticForm from '../MauticForm';
import BusinessArticle from './BusinessArticle';
import image from './images/img.webp';

interface Props {
  id: number;
}

const BusinessSurvey: FC<Props> = ({ id }) => {
  useEffect(() => {
    scrollPage();
  }, []);

  return (
    <SurveyStyled $grid="article">
      <BusinessArticle />
      <SurveyContentStyled>
        <SurveyDetailsStyled>
          <SurveyImage img={image} />
          <MauticForm formId={id} />
        </SurveyDetailsStyled>
      </SurveyContentStyled>
    </SurveyStyled>
  );
};

export default memo(BusinessSurvey);
