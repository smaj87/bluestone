import useTranslations from 'commons/hooks/useTranslations';
import { isMobile as isMobileSelector } from 'commons/hooks/useUserConfig/selectors';
import { toggleFlag } from 'commons/share_app/containers/Mails/actions';
import { MAIL_FLAG_FLAGGED } from 'commons/share_app/containers/Mails/constants';
import { isMailFavourite as isMailFavouriteSelector } from 'commons/share_app/containers/Mails/selectors';
import { FC, memo, useCallback } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';
import { dispatch } from 'commons/utils/store';

import { ButtonFavouriteStyled } from './styles';

interface Props {
  id: number;
}

const ButtonFavourite: FC<Props> = ({ id }) => {
  const t = useTranslations();
  const isMobile = useSelector(isMobileSelector);
  const isMailFavourite = useSelector(isMailFavouriteSelector, id);

  const onToggle = useCallback(
    (e) => {
      e.stopPropagation();
      // @ts-ignore
      dispatch(toggleFlag(MAIL_FLAG_FLAGGED, [id]));
    },
    [id],
  );

  return (
    <ButtonFavouriteStyled
      $isActive={isMailFavourite}
      color="secondary"
      icon={isMailFavourite ? 'starFill' : 'star'}
      onClickCapture={onToggle}
      shape={isMobile ? 'square' : undefined}
      size="md"
      title={isMailFavourite ? t('ctaUnMarkFavourite') : t('ctaMarkFavourite')}
    />
  );
};

export default memo(ButtonFavourite);
