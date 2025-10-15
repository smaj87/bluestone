import useTranslations from 'commons/hooks/useTranslations';
import { FC, memo } from 'commons/utils/react';

import { SPECIAL_TEXT_CLASS } from './constants';
import image from './images/v2.webp';
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

const ContentSecondary: FC<Props> = ({ color, placement }) => {
  const t = useTranslations();

  return (
    <AdBlockContentStyled $color={color || 'secondary'} $placement={placement}>
      <AdBlockImageStyled>
        <img alt="" src={image} />
      </AdBlockImageStyled>
      <AdBlockDescriptionStyled $placement={placement}>
        <h3>{t('adBlockTitle_v2')}</h3>
        <p>{t('adBlockDescriptionSentence1_v2')}️</p>
        <p className={SPECIAL_TEXT_CLASS}>
          {t('adBlockDescriptionSentence2_v2')}
          <a
            href={`${process.env.PAYMENTS_ANNUALLY_URL}`}
            target="_blank"
            title=""
          >
            {t('adBlockDescriptionSentence2Link_v2')}
          </a>
        </p>
      </AdBlockDescriptionStyled>
    </AdBlockContentStyled>
  );
};

export default memo(ContentSecondary);
