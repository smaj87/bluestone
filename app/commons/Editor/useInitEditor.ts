import {
  addEditor,
  removeEditor,
  setFontInfo,
  setIsDirtyEditor,
} from 'commons/Editor/actions';
import { EDIT_IMAGE_MODAL_ID } from 'commons/Editor/EditorModals/EditImageModal/constants';
import { EDIT_LINK_MODAL_ID } from 'commons/Editor/EditorModals/EditLinkModal/constants';
import { IMAGE_CONVERSION_MODAL_ID } from 'commons/Editor/EditorModals/ImageConversionModal/constants';
import { getEditorById } from 'commons/Editor/selectors';
import Squire from 'commons/Editor/Squire';
import { FontInfo, KeyOfEditors } from 'commons/Editor/types';
import { showEmoji } from 'commons/Emoji/actions';
import { EmojiState } from 'commons/Emoji/types';
import { openModal } from 'commons/Modal/actions';
import t from 'commons/translations/t';
import { RefObject, useEffect, useRef } from 'commons/utils/react';
import { getStateValueBySelector } from 'commons/utils/react-redux';
import { dispatch } from 'commons/utils/store';

import { EXTERNAL_STORAGE_MODAL_ID } from 'components/Modals/ExternalStorageModal/constants';
import {
  setContent,
  updateEmbeddedAttachments,
  uploadFileCancel,
  uploadFiles,
} from 'containers/NewMail/actions';
import {
  UPDATE_NEW_MAIL_STATE,
  UPLOAD_SIZE_LIMIT,
} from 'containers/NewMail/constants';
import {
  getAttachmentsSize,
  getCheckedSign,
  getContent,
} from 'containers/NewMail/selectors';
import { getUniqueId } from 'utils/uniqueId';

import { FONT_SIZES } from './constants';
import { CLIPBOARD_ACCESS_MODAL_ID } from './EditorModals/ClipboardAccessModal/constants';
import {
  convertSquireFontFamilyToFontFamily,
  convertSquireFontSizeToFontSize,
} from './utils';

const useInitEditor = (
  editorId: KeyOfEditors,
  editorRef: RefObject<HTMLDivElement>,
) => {
  const editorIdRef = useRef(editorId);
  editorIdRef.current = editorId;

  // Sprawdzamy czy przy wejsciu na strone mamy juz w reduksie Squire, bo moze sie zdazyc ze np. jak wchodzimy na strone NowaWiadomosc to dwa razy tworzy sie Squire
  useEffect(() => {
    let editor = getStateValueBySelector(getEditorById, editorIdRef.current);

    if (!editor) {
      const checkCurrentlyUsedFormatters = (_: Event, squire: Squire) => {
        const formats = {
          B: false,
          I: false,
          U: false,
          S: false,
          OL: false,
          UL: false,
        };

        // formatowanie tekstu
        Object.keys(formats).forEach((format) => {
          const reg = new RegExp(`>${format}$`);

          formats[format as keyof typeof formats] =
            (!!editor && reg.test(editor.getPath())) ||
            !!editor?.hasFormat(format);
        });

        // kolor i font zbyt czesto się nie zmienia (i jedynie dropdowny sluchaja na tym, ktore nie sa renderowane) wiec mozemy wrzucac do reduxa, a buttony od formatu sa aktualizowane poprzez dodanie do nich klasy

        const { backgroundColor, color, fontFamily, fontSize } =
          squire.getFontInfo() as unknown as FontInfo;

        dispatch(
          setFontInfo(editorIdRef.current, {
            backgroundColor,
            color,
            fontFamily: convertSquireFontFamilyToFontFamily(fontFamily),
            fontSize: convertSquireFontSizeToFontSize(fontSize),
            ...formats,
          }),
        );
      };

      // akcje nie korzystajace z webmaila
      const openImageEditModal = (image: HTMLImageElement) => {
        dispatch(
          openModal(EDIT_IMAGE_MODAL_ID, {
            image,
            editorId: editorIdRef.current,
          }),
        );
      };

      const openClipboardAccessModal = () => {
        dispatch(openModal(CLIPBOARD_ACCESS_MODAL_ID));
      };

      const openLinkEditModal = (link?: HTMLAnchorElement) => {
        dispatch(openModal(EDIT_LINK_MODAL_ID, { link }));
      };

      const openEmojiModal = (onEmoji: EmojiState['emojiCallback']) => {
        dispatch(showEmoji(onEmoji));
      };

      const openImageConversionModal = (files: File[]) => {
        dispatch(openModal(IMAGE_CONVERSION_MODAL_ID, { files }));
      };

      // Robimy to w taki sposob, aby refreshował się size w attachmentach w stanie webmaila 2.5 jedynie gdy jest to potrzebne, czyli gdy dodajemy zdjecie do edytora i wychodzimy z edytora, czyli akcji blur ze względu tego, ze ktos moze dodac sobie potem attachment do listy zalacznikow (nie mozna w squire optymalnie szybko wykryc co jest usuwane i ze wzgledu na performance wywołujemy to tylko wtedy gdy jest to potrzebne)
      const refreshImagesSize = (squire: Squire) => {
        dispatch(updateEmbeddedAttachments(squire.getImagesIds()));
      };

      // potem to mozna przerzucic te funkcję do configa, aby były przekazywane do edytora, a sam edytor był czysty z zewnetrznych elementow webmaila takich jak selectory itp.
      const isImagesSizeExceeded = (size: number) => {
        const attachmentsSize = getStateValueBySelector(getAttachmentsSize);

        return attachmentsSize + size > UPLOAD_SIZE_LIMIT;
      };

      const onImageSizeExceeded = () => {
        dispatch(openModal(EXTERNAL_STORAGE_MODAL_ID));
      };

      // uploadImage to uploadowanie image z Squire zdjec EMBEDDED (zawartych w tresci maila)
      const uploadImage = (
        file: File,
        onSuccess?: () => void,
        onError?: () => void,
      ) => {
        dispatch(uploadFiles([file], true, onSuccess, onError));
      };

      const uploadImageCancel = (id: string) => {
        dispatch(uploadFileCancel(id));
      };

      // @ts-ignore
      editor = new Squire(editorRef.current!, {
        blockAttributes: { style: `font-size: ${FONT_SIZES.md};` },
        openImageEditModal,
        openLinkEditModal,
        openEmojiModal,
        openImageConversionModal,
        openClipboardAccessModal,
        isImagesSizeExceeded,
        onImageSizeExceeded,
        refreshImagesSize,
        uploadImage,
        uploadImageCancel,
        isCustomContextMenu: false,
        isInsertOnlyPlainText: false,
        isShouldRemoveBlockQuouteButtonAfterClick: true,
        // @ts-ignore todo @spiascik
        t,
        getUniqueId,
      });

      editor.addEventListener('cursor', checkCurrentlyUsedFormatters);
      editor.addEventListener('select', checkCurrentlyUsedFormatters);
      editor.addEventListener('blur', (_, squire) => refreshImagesSize(squire));

      // na akcji blur edytora, gdy uzywamy getHtml to jest ten html czyszczony z naszych editables oraz wrzucany do stanu Reduxowego
      editor.addEventListener('blur', (_, squire) =>
        dispatch(setContent(squire.getHTML())),
      );

      // wymuszamy jedynie na początku aby zaktualizowal stan isDirty w store, a to i tak tylko raz sie odpala
      // todo any type
      editor.addEventListener('onDirtyChange', (e: any) => {
        dispatch(setIsDirtyEditor(editorIdRef.current, e.detail.isDirty));
      });

      // set content once on init
      editor.setHTML(getStateValueBySelector(getContent), true);
      editor.changeSign(getStateValueBySelector(getCheckedSign)?.content || '');

      dispatch({
        type: UPDATE_NEW_MAIL_STATE,
        payload: {
          content: editor.getHTML(),
        },
      });

      // Redux devtools nie pokazuje obiektu Squire, dlatego wrzucamy go do reduxa jako obiekt z metoda toJSON, aby ten dodatek się nie crashowal, ze wzgledu na brak pamieci
      // @ts-ignore
      editor.toJSON = () => ({ hidden: 'to help redux devtools :)' });

      dispatch(addEditor(editorIdRef.current, editor));
    }

    return () => {
      if (editor) {
        editor.destroy();
        dispatch(removeEditor(editorIdRef.current));
      }
    };
  }, [editorRef.current]);

  return null;
};

export default useInitEditor;
