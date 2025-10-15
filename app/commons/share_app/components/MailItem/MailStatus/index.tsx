import useTranslations from 'commons/hooks/useTranslations';
import { LIST_ITEM_IS_MAILING_CLASS } from 'commons/share_app/components/ListElements/List/constants';
import {
  MailStatusDotStyled,
  MailStatusStyled,
} from 'commons/share_app/components/MailItem/MailStatus/styles';
import { toggleFlag } from 'commons/share_app/containers/Mails/actions';
import { MAIL_FLAG_SEEN } from 'commons/share_app/containers/Mails/constants';
import {
  isMailFraud as isMailFraudSelector,
  isMailing as isMailingSelector,
  isMailSeen as isMailSeenSelector,
  isMailSendFail as isMailSendFailSelector,
  isMailTrusted as isMailTrustedSelector,
} from 'commons/share_app/containers/Mails/selectors';
import { VISUALLY_HIDDEN_CLASS } from 'commons/utils/classNames';
import { FC, memo, useCallback, useMemo } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';
import { dispatch } from 'commons/utils/store';

import TooltipFraudSuspicion from 'components/Tooltips/TooltipFraudSuspicion';
import TooltipSendError from 'components/Tooltips/TooltipSendError';
import TooltipTrustedSender from 'components/Tooltips/TooltipTrustedSender';

interface Props {
  id: number;
}

const MailStatus: FC<Props> = ({ id }) => {
  const t = useTranslations();
  const isMailTrusted = useSelector(isMailTrustedSelector, id);
  const isMailSendFail = useSelector(isMailSendFailSelector, id);
  const isMailFraud = useSelector(isMailFraudSelector, id);
  const isMailSeen = useSelector(isMailSeenSelector, id);
  const isMailing = useSelector(isMailingSelector, id);

  const onToggle = useCallback(
    (e) => {
      e.stopPropagation();
      dispatch(toggleFlag(MAIL_FLAG_SEEN, [id]));
    },
    [id],
  );

  const extraClasses = useMemo(() => {
    let classes = '';

    if (isMailing) {
      classes = `${classes} ${LIST_ITEM_IS_MAILING_CLASS}`;
    }

    return classes;
  }, [isMailing]);

  const status = useMemo(() => {
    let result = <MailStatusDotStyled />;

    if (isMailFraud) {
      result = <TooltipFraudSuspicion />;
    } else if (isMailSendFail) {
      result = <TooltipSendError />;
    } else if (isMailTrusted) {
      result = <TooltipTrustedSender />;
    }

    return result;
  }, [isMailTrusted, isMailSendFail, isMailFraud]);

  return (
    <MailStatusStyled
      className={extraClasses}
      onClickCapture={onToggle}
      type="button"
    >
      {status}
      <span className={VISUALLY_HIDDEN_CLASS}>
        {t('labelMarkMailAs')}: {isMailSeen ? t('ctaUnseen') : t('ctaSeen')}
      </span>
    </MailStatusStyled>
  );
};

export default memo(MailStatus);
