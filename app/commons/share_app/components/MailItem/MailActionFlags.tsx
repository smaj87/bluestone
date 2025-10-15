import Badge from 'commons/Badge';
import useTranslations from 'commons/hooks/useTranslations';
import {
  isMailAnswered as isMailAnsweredSelector,
  isMailForwarded as isMailForwardedSelector,
} from 'commons/share_app/containers/Mails/selectors';
import { FC, memo } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

interface Props {
  id: number;
}

const MailActionFlags: FC<Props> = ({ id }) => {
  const t = useTranslations();

  const isMailAnswered = useSelector(isMailAnsweredSelector, id);
  const isMailForwarded = useSelector(isMailForwardedSelector, id);

  return (
    <>
      {isMailAnswered ? (
        <Badge
          color="primary"
          icon="answer"
          shape="square"
          size="sm"
          title={t('components/Rows/MailListRow/mailAnswered')}
        />
      ) : null}
      {isMailForwarded ? (
        <Badge
          color="primary"
          icon="forward"
          shape="square"
          size="sm"
          title={t('components/Rows/MailListRow/mailForwarded')}
        />
      ) : null}
    </>
  );
};

export default memo(MailActionFlags);
