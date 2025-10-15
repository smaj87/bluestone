import Button from 'commons/Button';
import useTranslations from 'commons/hooks/useTranslations';
import { toggleIsShowImages } from 'commons/share_app/containers/ReadMail/actions';
import {
  getMailField,
  isWhiteListed as isWhiteListedSelector,
} from 'commons/share_app/containers/ReadMail/selectors';
import { ReadMailParsed } from 'commons/share_app/containers/ReadMail/types';
import { FC, memo, useCallback } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';
import { dispatch } from 'commons/utils/store';

const ButtonToggleImages: FC = () => {
  const t = useTranslations();

  const isWhiteListed = useSelector(isWhiteListedSelector);

  const isShowImages = useSelector(
    getMailField,
    'isShowImages',
  ) as ReadMailParsed['isShowImages'];

  const content = useSelector(
    getMailField,
    'content',
  ) as ReadMailParsed['content'];

  const ctaShowImageLabel = !isShowImages
    ? t('ReadMail/ctaShowImages')
    : t('ReadMail/ctaHideImages');

  const onClick = useCallback(() => {
    dispatch(toggleIsShowImages());
  }, []);

  return content.isAnyBlockedImages && !isWhiteListed ? (
    <Button
      color="secondaryNeutral"
      icon="image"
      label={ctaShowImageLabel}
      onClick={onClick}
      size="md"
    />
  ) : null;
};

export default memo(ButtonToggleImages);
