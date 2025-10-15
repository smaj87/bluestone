import BackgroundDropdown from 'commons/Editor/EditorToolbar/Dropdowns/ColorsDropdowns/BackgroundDropdown';
import ColorsDropdown from 'commons/Editor/EditorToolbar/Dropdowns/ColorsDropdowns/TextColorsDropdown';
// import FontFamilyDropdown from 'commons/Editor/EditorToolbar/Dropdowns/FontFamilyDropdown';
import FontSizeDropdown from 'commons/Editor/EditorToolbar/Dropdowns/FontSizeDropdown';
import { FC, memo } from 'commons/utils/react';

import EmojiButton from './Buttons/EmojiButton';
// import ImageButton from './Buttons/ImageButton';
import LinkButton from './Buttons/LinkButton';
import ListButtons from './Buttons/ListButtons';
import TextFormatButtons from './Buttons/TextFormatButtons';
import { EditorToolbarGroupStyled, EditorToolbarStyled } from './styles';

interface Props {
  editorId: string;
}

// TODO pomyslec nad owrapowaniem w context
const EditorToolbar: FC<Props> = ({ editorId }) => (
  <EditorToolbarStyled role="toolbar">
    <EditorToolbarGroupStyled role="group">
      {/* <FontFamilyDropdown editorId={editorId} /> */}
      <FontSizeDropdown editorId={editorId} />
      <ColorsDropdown editorId={editorId} />
      <BackgroundDropdown editorId={editorId} />
    </EditorToolbarGroupStyled>
    <EditorToolbarGroupStyled role="group">
      <TextFormatButtons editorId={editorId} />
    </EditorToolbarGroupStyled>
    <ListButtons editorId={editorId} />
    <EditorToolbarGroupStyled role="group">
      <EmojiButton editorId={editorId} />
      <LinkButton editorId={editorId} />
      {/* <ImageButton editorId={editorId} /> */}
    </EditorToolbarGroupStyled>
  </EditorToolbarStyled>
);

export default memo(EditorToolbar);
