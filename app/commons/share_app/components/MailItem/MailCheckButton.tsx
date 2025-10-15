import useTranslations from 'commons/hooks/useTranslations';
import { CHECKED_MODE } from 'commons/ListIntersectionObserver/constants';
import ListItemCheckButton from 'commons/share_app/components/ListElements/ListItemCheckButton';
import { toggleChecked } from 'commons/share_app/containers/Mails/actions';
import { isCheckedById as isCheckedByIdSelector } from 'commons/share_app/containers/Mails/selectors';
import { FC, memo, useCallback } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';
import { dispatch } from 'commons/utils/store';

interface Props {
  id: number;
}

const MailCheckButton: FC<Props> = ({ id }) => {
  const t = useTranslations();
  const isChecked = useSelector(isCheckedByIdSelector, id);

  const onToggle = useCallback(
    (e) => {
      e.stopPropagation();
      dispatch(toggleChecked(id, undefined, CHECKED_MODE.SINGLE, e.shiftKey));
    },
    [id],
  );

  return (
    <ListItemCheckButton
      label={isChecked ? t('ctaMarked') : t('ctaUnmarked')}
      onClickFunc={onToggle}
    />
  );
};

export default memo(MailCheckButton);
