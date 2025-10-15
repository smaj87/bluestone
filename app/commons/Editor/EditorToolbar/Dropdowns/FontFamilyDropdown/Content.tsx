import { closeDropdown } from 'commons/Dropdown/actions';
import { FONTS } from 'commons/Editor/constants';
import { getEditorById, getFontFamily } from 'commons/Editor/selectors';
import { FontName } from 'commons/Editor/types';
import { GroupListStyled } from 'commons/GroupActions/styles';
import useTranslations from 'commons/hooks/useTranslations';
import { isMobile as isMobileSelector } from 'commons/hooks/useUserConfig/selectors';
import { close } from 'commons/ToolbarSubmenu/actions';
import { FC, useCallback } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';
import { dispatch } from 'commons/utils/store';

import { GroupButtonFontFamily } from './styles';

interface Props {
  editorId: string;
  popUpId: string;
}

const FontFamilyDropdownContent: FC<Props> = ({ editorId, popUpId }) => {
  const t = useTranslations();
  const editor = useSelector(getEditorById, editorId);
  const isMobile = useSelector(isMobileSelector);

  const currentFont = useSelector(getFontFamily, editorId);

  const onClick = useCallback(
    (_, font) => {
      editor?.setFontFace(font);

      if (isMobile) {
        dispatch(close());
      } else {
        dispatch(closeDropdown(popUpId));
      }
    },
    [editor, popUpId, isMobile],
  );

  return (
    // TODO - struktura do weryfikacji z nowymi dropdownami, brakuje elementu li
    <GroupListStyled>
      {Object.entries(FONTS).map(([fontName, fontFamily]) => (
        <GroupButtonFontFamily
          key={`${fontName} ${fontFamily}`}
          $isActive={currentFont === fontName}
          fontFamily={fontFamily}
          label={t(`_font_${fontName as FontName}`)}
          onClick={onClick}
          params={fontFamily}
        />
      ))}
    </GroupListStyled>
  );
};

export default FontFamilyDropdownContent;
