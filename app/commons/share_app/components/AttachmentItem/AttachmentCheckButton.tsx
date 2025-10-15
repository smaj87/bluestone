import useTranslations from 'commons/hooks/useTranslations';
import ListItemCheckButton from 'commons/share_app/components/ListElements/ListItemCheckButton';
import { toggleChecked } from 'commons/share_app/containers/Attachments/actions';
import { isCheckedById as isCheckedByIdSelector } from 'commons/share_app/containers/Attachments/selectors';
import { FC, memo, useCallback } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';
import { dispatch } from 'commons/utils/store';

interface Props {
  id: string;
}

const AttachmentCheckButton: FC<Props> = ({ id }) => {
  const t = useTranslations();
  const isChecked = useSelector(isCheckedByIdSelector, id);

  const onToggle = useCallback(
    (e) => {
      e.stopPropagation();
      dispatch(toggleChecked(id));
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

export default memo(AttachmentCheckButton);
