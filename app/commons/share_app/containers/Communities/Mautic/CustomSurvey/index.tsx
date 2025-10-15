import { FC, memo, useEffect } from 'commons/utils/react';
import { scrollPage } from 'commons/utils/scroll';

import MauticForm from '../MauticForm';
import { MauticAreaStyled, MauticSurveyStyled } from '../styles';

interface Props {
  id: number;
}

const CustomSurvey: FC<Props> = ({ id }) => {
  useEffect(() => {
    scrollPage();
  }, []);

  return (
    <MauticAreaStyled>
      <MauticSurveyStyled>
        <MauticForm formId={id} />
      </MauticSurveyStyled>
    </MauticAreaStyled>
  );
};

export default memo(CustomSurvey);
