import useTranslations from 'commons/hooks/useTranslations';
import { changeWhiteList } from 'commons/share_app/containers/ReadMail/actions';
import {
  getMailField,
  isWhiteListed as isWhiteListedSelector,
  isWhiteListedGlobals as isWhiteListedGlobalsSelector,
} from 'commons/share_app/containers/ReadMail/selectors';
import { ReadMailParsed } from 'commons/share_app/containers/ReadMail/types';
import { FC, memo, useCallback } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';
import { dispatch } from 'commons/utils/store';

import { DETAILED_LABEL_IMAGES_ID } from './constants';
import {
  ButtonToggle,
  DetailItemCellStyled,
  DetailItemLabelStyled,
  DetailItemStyled,
  DetailItemValuesListStyled,
  DetailItemValueStyled,
} from './styles';

const Images: FC = () => {
  const t = useTranslations();

  const isMailing = useSelector(
    getMailField,
    'isMailing',
  ) as ReadMailParsed['isMailing'];

  const isWhiteListed = useSelector(isWhiteListedSelector);
  const isWhiteListedGlobals = useSelector(isWhiteListedGlobalsSelector);

  const onClick = useCallback(() => {
    dispatch(changeWhiteList(false));
  }, []);

  return !isMailing && isWhiteListed && !isWhiteListedGlobals ? (
    <DetailItemStyled $isMultiLine>
      <DetailItemLabelStyled
        data-cypress="IMAGES-LABEL"
        htmlFor={DETAILED_LABEL_IMAGES_ID}
      >
        {t('images')}:
      </DetailItemLabelStyled>
      <DetailItemValuesListStyled id={DETAILED_LABEL_IMAGES_ID} role="list">
        <DetailItemValueStyled $grid="row" role="listitem">
          <DetailItemCellStyled data-cypress="IMAGES-ALWAYS-VISIBLE">
            {t('ReadMail/labelImagesFromSenderAlwaysVisible')}
          </DetailItemCellStyled>
          <DetailItemCellStyled>
            <ButtonToggle
              cypressId="BUTTON-ALWAYS-HIDE-IMAGES"
              label={t('ReadMail/ctaHideImagesNow')}
              onClick={onClick}
            />
          </DetailItemCellStyled>
        </DetailItemValueStyled>
      </DetailItemValuesListStyled>
    </DetailItemStyled>
  ) : null;
};

export default memo(Images);
