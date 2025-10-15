import {
  getEditorById,
  isBold as isBoldSelector,
  isItalic as isItalicSelector,
  isStrikethrough as isStrikethroughSelector,
  isUnderline as isUnderlineSelector,
} from 'commons/Editor/selectors';
import useTranslations from 'commons/hooks/useTranslations';
import MobileLoader from 'commons/MobileLoader';
import { FC, memo, useCallback } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

import { ButtonEditor } from '../styles';

interface Props {
  editorId: string;
}

const TextFormatButtons: FC<Props> = ({ editorId }) => {
  const t = useTranslations();
  const editor = useSelector(getEditorById, editorId);

  const isBold = useSelector(isBoldSelector, editorId);
  const isItalic = useSelector(isItalicSelector, editorId);
  const isUnderline = useSelector(isUnderlineSelector, editorId);
  const isStrikethrough = useSelector(isStrikethroughSelector, editorId);

  const formatText = useCallback(
    (
      _,
      {
        isActive,
        remove,
        set,
      }: {
        isActive: boolean;
        set: 'bold' | 'italic' | 'underline' | 'strikethrough';
        remove:
          | 'removeBold'
          | 'removeItalic'
          | 'removeUnderline'
          | 'removeStrikethrough';
      },
    ) => {
      if (!editor) {
        return;
      }

      if (isActive) {
        if (remove) {
          editor[remove]();
        }
      } else {
        editor[set]();
      }
    },
    [editor],
  );

  return (
    <>
      <ButtonEditor
        $isActive={isBold}
        color="secondary"
        icon="formatBold"
        id="B"
        onClick={formatText}
        params={{ isActive: isBold, set: 'bold', remove: 'removeBold' }}
        shape="square"
        size="md"
        title={t('bold')}
      />
      <ButtonEditor
        $isActive={isItalic}
        color="secondary"
        icon="formatItalic"
        id="I"
        onClick={formatText}
        params={{ isActive: isItalic, set: 'italic', remove: 'removeItalic' }}
        shape="square"
        size="md"
        title={t('italic')}
      />
      <ButtonEditor
        $isActive={isUnderline}
        color="secondary"
        icon="formatUnderline"
        id="U"
        onClick={formatText}
        params={{
          isActive: isUnderline,
          set: 'underline',
          remove: 'removeUnderline',
        }}
        shape="square"
        size="md"
        title={t('underline')}
      />
      <MobileLoader
        desktop={
          <ButtonEditor
            $isActive={isStrikethrough}
            color="secondary"
            icon="formatStrikethrough"
            id="S"
            onClick={formatText}
            params={{
              isActive: isStrikethrough,
              set: 'strikethrough',
              remove: 'removeStrikethrough',
            }}
            shape="square"
            size="md"
            title={t('strikethrough')}
          />
        }
      />
    </>
  );
};

export default memo(TextFormatButtons);
