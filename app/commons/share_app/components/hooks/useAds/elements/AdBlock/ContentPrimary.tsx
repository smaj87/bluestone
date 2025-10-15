import useTranslations from 'commons/hooks/useTranslations';
import { FC, memo } from 'commons/utils/react';

import { SPECIAL_TEXT_CLASS } from './constants';
import image from './images/v1.webp';
import {
  AdBlockContentStyled,
  AdBlockDescriptionStyled,
  AdBlockImageStyled,
} from './styles';
import { Color, Placement } from './types';

interface Props {
  color?: Color;
  placement?: Placement;
}

const ContentPrimary: FC<Props> = ({ color, placement }) => {
  const t = useTranslations();

  return (
    <AdBlockContentStyled $color={color || 'primary'} $placement={placement}>
      <AdBlockImageStyled>
        <img alt="" src={image} />
      </AdBlockImageStyled>
      <AdBlockDescriptionStyled $placement={placement}>
        <h3>{t('adBlockTitle_v1')}</h3>
        <p>{t('adBlockDescriptionSentence1_v1')}️</p>
        <p className={SPECIAL_TEXT_CLASS}>
          {t('adBlockDescriptionSentence2_v1')}
        </p>
      </AdBlockDescriptionStyled>
    </AdBlockContentStyled>
  );
};

export default memo(ContentPrimary);
