import Button from 'commons/Button';
import useTranslations from 'commons/hooks/useTranslations';
import Infobar from 'commons/Infobar';
import { InfobarStyled } from 'commons/Infobar/styles';
import {
  changeWhiteList,
  toggleIsShowImages,
} from 'commons/share_app/containers/ReadMail/actions';
import {
  getMailField,
  isWhiteListed as isWhiteListedSelector,
} from 'commons/share_app/containers/ReadMail/selectors';
import { ReadMailParsed } from 'commons/share_app/containers/ReadMail/types';
import { FC, memo, useCallback } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';
import { dispatch } from 'commons/utils/store';

const InfobarShowImages: FC = () => {
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

  const toggleAlwaysShowImages = useCallback(() => {
    dispatch(changeWhiteList());
  }, []);

  const toggleShowImages = useCallback(() => {
    dispatch(toggleIsShowImages());
  }, []);

  const ctaShowImageLabel = !isShowImages
    ? t('ctaShow')
    : t('ReadMail/ctaHideImages');

  return content.isAnyBlockedImages && !isWhiteListed ? (
    <InfobarStyled>
      <Infobar.Icon $image="image" />
      <Infobar.Content>
        <Infobar.Label>
          {isShowImages
            ? t('ReadMail/labelImagesAreShown')
            : t('ReadMail/labelImagesAreHidden')}
        </Infobar.Label>
        <Infobar.Actions>
          <Infobar.ActionItem>
            <Button
              color="infobar"
              label={ctaShowImageLabel}
              onClick={toggleShowImages}
              size="sm"
              title={ctaShowImageLabel}
            />
          </Infobar.ActionItem>
          <Infobar.ActionItem>
            <Button
              color="infobar"
              label={t('ReadMail/ctaAlwaysShowImages')}
              onClick={toggleAlwaysShowImages}
              size="sm"
            />
          </Infobar.ActionItem>
        </Infobar.Actions>
      </Infobar.Content>
    </InfobarStyled>
  ) : null;
};

export default memo(InfobarShowImages);
