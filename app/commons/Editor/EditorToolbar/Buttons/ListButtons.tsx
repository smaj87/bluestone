import {
  getEditorById,
  isOrderedList as isOrderedListSelector,
  isUnorderedList as isUnorderedListSelector,
} from 'commons/Editor/selectors';
import useTranslations from 'commons/hooks/useTranslations';
import MobileLoader from 'commons/MobileLoader';
import { FC, memo, useCallback } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

import { ButtonEditor, EditorToolbarGroupStyled } from '../styles';

interface Props {
  editorId: string;
}

const ListButtons: FC<Props> = ({ editorId }) => {
  const t = useTranslations();
  const editor = useSelector(getEditorById, editorId);

  const isOrderedList = useSelector(isOrderedListSelector, editorId);
  const isUnorderedList = useSelector(isUnorderedListSelector, editorId);

  const switchList = useCallback(
    (_, listType: 'Ordered' | 'Unordered') => {
      // When we want to create the same type of list that is currently selected, remove it
      if (
        editor?.hasFormat('li') &&
        ((editor?.hasFormat('ul') && listType === 'Unordered') ||
          (editor?.hasFormat('ol') && listType === 'Ordered'))
      ) {
        editor?.removeList();
      } else {
        editor?.[`make${listType}List`]();
      }
    },
    [editor],
  );

  return (
    <MobileLoader
      desktop={
        <EditorToolbarGroupStyled role="group">
          <ButtonEditor
            $isActive={isUnorderedList}
            color="secondary"
            icon="formatList"
            onClick={switchList}
            params="Unordered"
            shape="square"
            size="md"
            title={t('insertList')}
          />
          <ButtonEditor
            $isActive={isOrderedList}
            color="secondary"
            icon="formatListOrdered"
            onClick={switchList}
            params="Ordered"
            shape="square"
            size="md"
            title={t('insertOrderedList')}
          />
        </EditorToolbarGroupStyled>
      }
    />
  );
};

export default memo(ListButtons);
