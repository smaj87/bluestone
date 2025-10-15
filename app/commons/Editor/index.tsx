import { EditorWrapperStyled } from 'commons/Editor/styles';
import { FC, memo } from 'commons/utils/react';

import EditorContent from './EditorContent';

interface Props {
  editorId: string;
  autoFocus?: boolean;
}

const Editor: FC<Props> = ({ autoFocus, editorId }) => (
  <EditorWrapperStyled>
    <EditorContent autoFocus={autoFocus} editorId={editorId} />
  </EditorWrapperStyled>
);

export default memo(Editor);
