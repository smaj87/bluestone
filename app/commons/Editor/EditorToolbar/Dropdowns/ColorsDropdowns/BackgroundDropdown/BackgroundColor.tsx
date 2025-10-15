import {
  ColorPickerButtonStyled,
  ColorPickerStyled,
} from 'commons/ColorPicker/styles';
import { closeDropdown } from 'commons/Dropdown/actions';
import { TEXT_COLORS } from 'commons/Editor/constants';
import { getBackgroundColor, getEditorById } from 'commons/Editor/selectors';
import { TextColorKey } from 'commons/Editor/types';
import useTranslations from 'commons/hooks/useTranslations';
import { isMobile as isMobileSelector } from 'commons/hooks/useUserConfig/selectors';
import { close } from 'commons/ToolbarSubmenu/actions';
import { FC, memo, useCallback } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';
import { dispatch } from 'commons/utils/store';

import { ColorGroupStyled } from '../styles';

interface Props {
  editorId: string;
  popUpId: string;
}

const BackgroundColor: FC<Props> = ({ editorId, popUpId }) => {
  const t = useTranslations();
  const isMobile = useSelector(isMobileSelector);
  const editor = useSelector(getEditorById, editorId);

  const currentColor = useSelector(getBackgroundColor, editorId);

  const changeHighlightColor = useCallback(
    (_, color) => {
      editor?.setHighlightColor(color);

      dispatch(close());
      dispatch(closeDropdown(popUpId));
    },
    [editor, popUpId],
  );

  const isSelectedColor = useCallback(
    (color) => {
      // ddefaultowo jest czarny
      if (!currentColor && color === TEXT_COLORS.white) {
        return true;
      }

      return color === currentColor;
    },
    [currentColor],
  );

  return (
    <ColorGroupStyled>
      <ColorPickerStyled $columns={isMobile ? 8 : 4}>
        {Object.entries(TEXT_COLORS).map(([key, color]) => (
          <ColorPickerButtonStyled
            key={key}
            $bgColor={color}
            onClick={changeHighlightColor}
            params={color}
            selected={isSelectedColor(color)}
            title={t(`_${key as TextColorKey}`)}
          />
        ))}
      </ColorPickerStyled>
    </ColorGroupStyled>
  );
};

export default memo(BackgroundColor);
