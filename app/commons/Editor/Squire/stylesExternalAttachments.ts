// px ze względu na wyświetlanie w zewnętrzncyh klientach pocztowych
// wartość w hex - plik z var nie jest dołączany do wiadomości, nie będzie działać w zewnętrznych klientach pocztowych
// brak const - problem w wygenerowanym html

export const editorExternalAttachmentsTitleStyles = `
  margin-block: 0.8rem;
`;

export const editorExternalAttachmentsContainerStyles = `
  margin: 0 -4px 8px;
  overflow: hidden;
  box-sizing: content-box;
`;

export const editorExternalAttachmentItemStyles = `
  float: left;
  overflow: hidden;
`;

export const editorExternalAttachmentLinkStyles = `
  position: relative;
  display: block;
  float: left;
  margin: 4px;
  padding: 8px 24px 8px 8px;
  width: 192px;
  height: 36px;
  background: #fff;
  border-radius: 3px;
  border: 1px solid #ccc;
  text-decoration: none;
  cursor: pointer;
  overflow: hidden;
  box-sizing: content-box;
`;

export const editorExternalAttachmentsFileImageStyles = `
  float: left;
  padding-right: 8px;
  width: 36px;
  height: 36px;
  box-sizing: content-box;
`;

export const editorExternalAttachmentFileNameStyles = `
  float: left;
  display: block;
  width: 144px;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: normal;
  font-family: system-ui, Arial, sans-serif;
  color: #000;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-decoration: none;
  text-shadow: none;
  cursor: pointer;
`;

// Przycisk dostępny tylko w napiszu wersji webowej
export const editorExternalAttachmentRemoveStyles = `
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  cursor: pointer;
`;
