import useTranslations from 'commons/hooks/useTranslations';
import { LIST_ITEM_IS_MAILING_CLASS } from 'commons/share_app/components/ListElements/List/constants';
import MailBimiMobile from 'commons/share_app/components/MailItem/MailCheckMobile/MailBimiMobile';
import { toggleChecked } from 'commons/share_app/containers/Mails/actions';
import {
  getMailAvatar,
  getMailById,
  isCheckedById as isCheckedByIdSelector,
  isMailing as isMailingSelector,
} from 'commons/share_app/containers/Mails/selectors';
import { getInitials } from 'commons/share_app/utils/initials';
import { VISUALLY_HIDDEN_CLASS } from 'commons/utils/classNames';
import { FC, memo, useCallback, useMemo, useState } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';
import { dispatch } from 'commons/utils/store';

import {
  MailCheckButtonContentStyled,
  MailCheckButtonMobileStyled,
  MailCheckIconMobile,
} from './styles';

interface Props {
  id: number;
}

const MailCheckButtonMobile: FC<Props> = ({ id }) => {
  const t = useTranslations();
  const mail = useSelector(getMailById, id);
  const image = useSelector(getMailAvatar, id);
  const isMailing = useSelector(isMailingSelector, id);
  const isChecked = useSelector(isCheckedByIdSelector, id);
  const initials = getInitials(mail?.from?.name || mail?.from?.email);
  const [isImageLoaded, setImageLoaded] = useState(false);

  const onToggle = useCallback(
    (e) => {
      e.stopPropagation();
      dispatch(toggleChecked(id));
    },
    [id],
  );

  const onImageLoaded = () => {
    setImageLoaded(true);
  };

  const extraClasses = useMemo(() => {
    let classes = '';

    if (isMailing) {
      classes = `${classes} ${LIST_ITEM_IS_MAILING_CLASS}`;
    }

    return classes;
  }, [isMailing]);

  return (
    <MailCheckButtonMobileStyled
      className={extraClasses}
      onClickCapture={onToggle}
      type="button"
    >
      <span className={VISUALLY_HIDDEN_CLASS}>
        {isChecked ? t('ctaMarked') : t('ctaUnmarked')}
      </span>
      <MailCheckButtonContentStyled $isImageLoaded={isImageLoaded}>
        <MailBimiMobile
          id={id}
          image={image}
          initials={initials}
          onImageLoaded={onImageLoaded}
        />
        <MailCheckIconMobile $image="check" />
      </MailCheckButtonContentStyled>
    </MailCheckButtonMobileStyled>
  );
};

export default memo(MailCheckButtonMobile);
