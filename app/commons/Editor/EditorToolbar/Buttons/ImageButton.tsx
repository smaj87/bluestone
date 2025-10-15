import { getEditorById } from 'commons/Editor/selectors';
import useTranslations from 'commons/hooks/useTranslations';
import { FC, memo, useCallback } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

import { ButtonEditor } from '../styles';

interface Props {
  editorId: string;
}

const ImageButton: FC<Props> = ({ editorId }) => {
  const t = useTranslations();
  const editor = useSelector(getEditorById, editorId);

  const addImage = useCallback(() => {
    let el = (window._protected_reference =
      document.createElement('INPUT')) as any;
    el.type = 'file';
    el.accept = 'image/*';
    el.multiple = 'multiple';

    el.addEventListener('change', () => {
      if (el.files.length) {
        editor?.insertImagesAndUpload(el.files);
      }

      el = undefined;
      window._protected_reference = undefined;
    });

    el.click();
  }, [editor]);

  return (
    <ButtonEditor
      color="secondary"
      icon="addPhoto"
      onClick={addImage}
      shape="square"
      size="md"
      title={t('addImage')}
    />
  );
};

export default memo(ImageButton);
