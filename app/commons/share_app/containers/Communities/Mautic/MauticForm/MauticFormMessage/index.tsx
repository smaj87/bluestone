import useTranslations from 'commons/hooks/useTranslations';
import { FC, memo } from 'commons/utils/react';

import {
  MauticResponseHeadingStyled,
  MauticResponseIconStyled,
  MauticResponseTextStyled,
} from './styles';

interface Props {
  responseMessage: string;
}

const MauticFormMessage: FC<Props> = ({ responseMessage }) => {
  const t = useTranslations();

  return (
    <>
      <MauticResponseIconStyled $image="check" color="success" />
      <MauticResponseHeadingStyled>{t('thankYou')}</MauticResponseHeadingStyled>
      <MauticResponseTextStyled>{responseMessage}</MauticResponseTextStyled>
    </>
  );
};

export default memo(MauticFormMessage);
