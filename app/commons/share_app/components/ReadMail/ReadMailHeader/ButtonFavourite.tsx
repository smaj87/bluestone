import useTranslations from 'commons/hooks/useTranslations';
import { toggleFlag } from 'commons/share_app/containers/Mails/actions';
import { MAIL_FLAG_FLAGGED } from 'commons/share_app/containers/Mails/constants';
import { getMailField } from 'commons/share_app/containers/ReadMail/selectors';
import { ReadMailParsed } from 'commons/share_app/containers/ReadMail/types';
import { checkFlag } from 'commons/share_app/utils/mailFlags';
import { FC, memo, useCallback } from 'commons/utils/react';
import {
  getStateValueBySelector,
  useSelector,
} from 'commons/utils/react-redux';
import { dispatch } from 'commons/utils/store';

import { getReadMailUrlProps } from 'containers/App/selectors';

import { ButtonFavouriteStyled } from './styles';

const ButtonFavourite: FC = () => {
  const t = useTranslations();

  const flags = useSelector(getMailField, 'flags') as ReadMailParsed['flags'];
  const isFavourite = checkFlag(flags, MAIL_FLAG_FLAGGED);

  const onClick = useCallback(() => {
    const mid = getStateValueBySelector(getReadMailUrlProps, 'mid');
    dispatch(toggleFlag(MAIL_FLAG_FLAGGED, [mid]));
  }, []);

  return (
    <ButtonFavouriteStyled
      $isActive={isFavourite}
      color="secondary"
      cypressId="BUTTON-FAVOURITE"
      icon={isFavourite ? 'starFill' : 'star'}
      onClick={onClick}
      size="md"
      title={isFavourite ? t('ctaUncheckFavourite') : t('ctaCheckFavourite')}
    />
  );
};

export default memo(ButtonFavourite);
