import { SurveyImageStyled } from 'commons/share_app/components/Survey/styles';
import { FC, memo } from 'commons/utils/react';

interface Props {
  img?: string;
}

const SurveyImage: FC<Props> = ({ img }) => (
  <SurveyImageStyled aria-hidden="true">
    <img alt="" src={img} />
  </SurveyImageStyled>
);

export default memo(SurveyImage);
