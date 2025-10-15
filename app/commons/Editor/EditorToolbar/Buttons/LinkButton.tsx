import { getEditorById } from 'commons/Editor/selectors';
import useTranslations from 'commons/hooks/useTranslations';
import { FC, memo, useCallback } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

import { ButtonEditor } from '../styles';

interface Props {
  editorId: string;
}

const LinkButton: FC<Props> = ({ editorId }) => {
  const t = useTranslations();
  const editor = useSelector(getEditorById, editorId);

  const addLink = useCallback(() => {
    editor?._config.openLinkEditModal();
  }, [editor]);

  return (
    <ButtonEditor
      color="secondary"
      icon="addLink"
      onClick={addLink}
      shape="square"
      size="md"
      title={t('addLink')}
    />
  );
};

export default memo(LinkButton);
