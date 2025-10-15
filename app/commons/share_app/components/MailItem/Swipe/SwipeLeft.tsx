import Badge from 'commons/Badge';
import { Props } from 'commons/hooks/useListItemSwipe/Swipe';
import useTranslations from 'commons/hooks/useTranslations';
import { SwipeLeftStyled } from 'commons/share_app/components/Swipe/styles';
import { toggleFlag } from 'commons/share_app/containers/Mails/actions';
import { MAIL_FLAG_SEEN } from 'commons/share_app/containers/Mails/constants';
import { isMailSeen as isMailSeenSelector } from 'commons/share_app/containers/Mails/selectors';
import { FC, memo, useEffect } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';
import { dispatch } from 'commons/utils/store';

const SwipeLeft: FC<Props> = ({ itemParams, onSwipeBinder }) => {
  const t = useTranslations();
  const isMailSeen = useSelector(isMailSeenSelector, itemParams.id);

  useEffect(() => {
    onSwipeBinder(() => {
      dispatch(toggleFlag(MAIL_FLAG_SEEN, [itemParams.id]));
    });
  }, [itemParams.id, onSwipeBinder]);

  return (
    <SwipeLeftStyled $bg="primary">
      <Badge
        color="primary"
        icon={isMailSeen ? 'emailUnread' : 'emailRead'}
        isMobile
        label={isMailSeen ? t('ctaUnseen') : t('ctaSeen')}
        size="md"
      />
    </SwipeLeftStyled>
  );
};

export default memo(SwipeLeft);
