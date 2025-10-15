import EditImageModal from 'commons/Editor/EditorModals/EditImageModal';
import EditLinkModal from 'commons/Editor/EditorModals/EditLinkModal';
import { EditorStyled } from 'commons/Editor/styles';
import { FC, memo, useRef } from 'commons/utils/react';

import ClipboardAccessModal from './EditorModals/ClipboardAccessModal';
import ImageConversionModal from './EditorModals/ImageConversionModal';
import EditorToolbar from './EditorToolbar';
import { EDITOR_ELEMENT_ID } from './Squire/Constants';
import useInitEditor from './useInitEditor';

interface Props {
  editorId: string;
  autoFocus?: boolean;
}

const EditorContent: FC<Props> = ({ autoFocus, editorId }) => {
  const editorRef = useRef<HTMLDivElement>(null);

  // TODO naprawic autofocus, bo wczesniej narzuca focus na osoby do ktorych piszemy
  useInitEditor(editorId, editorRef);

  return (
    <>
      <EditorToolbar editorId={editorId} />
      <EditorStyled
        ref={editorRef}
        autoFocus={autoFocus}
        id={EDITOR_ELEMENT_ID}
      />
      <EditImageModal />
      <ClipboardAccessModal />
      <EditLinkModal editorId={editorId} />
      <ImageConversionModal editorId={editorId} />
    </>
  );
};

export default memo(EditorContent);
