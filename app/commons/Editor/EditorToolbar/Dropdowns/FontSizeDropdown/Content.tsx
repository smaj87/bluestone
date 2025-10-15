import { closeDropdown } from 'commons/Dropdown/actions';
import { FONT_SIZES } from 'commons/Editor/constants';
import { getEditorById, getFontSize } from 'commons/Editor/selectors';
import { FontSizeLabel } from 'commons/Editor/types';
import { GroupListStyled } from 'commons/GroupActions/styles';
import useTranslations from 'commons/hooks/useTranslations';
import { isMobile as isMobileSelector } from 'commons/hooks/useUserConfig/selectors';
import { close } from 'commons/ToolbarSubmenu/actions';
import { FC, useCallback } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';
import { dispatch } from 'commons/utils/store';

import { GroupButtonFontSize } from './styles';

interface Props {
  editorId: string;
  popUpId: string;
}

const FontSizeDropdownContent: FC<Props> = ({ editorId, popUpId }) => {
  const t = useTranslations();
  const editor = useSelector(getEditorById, editorId);
  const isMobile = useSelector(isMobileSelector);

  const currentFontSize = useSelector(getFontSize, editorId);

  const onClick = useCallback(
    (_, fontSizePx) => {
      editor?.setFontSize(fontSizePx);

      if (isMobile) {
        dispatch(close());
      } else {
        dispatch(closeDropdown(popUpId));
      }
    },
    [editor, popUpId, isMobile],
  );

  // TODO - struktura do weryfikacji z nowymi dropdownami, brakuje elementu li
  return (
    <GroupListStyled>
      {Object.entries(FONT_SIZES).map(([fontLabel, fontSize]) => (
        <GroupButtonFontSize
          key={fontSize}
          $isActive={currentFontSize === fontLabel}
          fontSize={fontSize}
          label={t(`_fontSize_${fontLabel as FontSizeLabel}`)}
          onClick={onClick}
          params={fontSize}
        />
      ))}
    </GroupListStyled>
  );
};

export default FontSizeDropdownContent;
