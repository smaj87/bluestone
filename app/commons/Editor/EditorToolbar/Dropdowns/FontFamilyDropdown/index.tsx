import Button from 'commons/Button';
import { CtaIcon } from 'commons/CallToAction/styles';
import Dropdown from 'commons/Dropdown';
import { open } from 'commons/Dropdown/actions';
import { getFontFamily } from 'commons/Editor/selectors';
import useTranslations from 'commons/hooks/useTranslations';
import MobileLoader from 'commons/MobileLoader';
import { FC, memo, useCallback, useMemo } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';
import { dispatch } from 'commons/utils/store';

import { DROPDOWN_POPUP_ID, DROPDOWN_TARGET_ID } from './constants';
import FontFamilyDropdownContent from './Content';

interface Props {
  editorId: string;
}

const FontFamilyDropdown: FC<Props> = ({ editorId }) => {
  const t = useTranslations();

  const buttonId = useMemo(
    () => `${DROPDOWN_TARGET_ID}${editorId}`,
    [editorId],
  );
  const popUpId = useMemo(() => `${DROPDOWN_POPUP_ID}${editorId}`, [editorId]);

  const currentFontFamily = useSelector(getFontFamily, editorId);

  const openDropdown = useCallback(() => {
    dispatch(
      open(popUpId, {
        targetId: buttonId,
        params: {
          menuSize: 'md',
        },
      }),
    );
  }, [buttonId, popUpId]);

  return (
    <MobileLoader
      desktop={
        <>
          <Button
            color="secondary"
            id={buttonId}
            label={t(`_font_${currentFontFamily || 'noSerif'}`)}
            onClick={openDropdown}
            size="md"
            title={t('fontFamily', {
              value: t(`_font_${currentFontFamily || 'noSerif'}`),
            })}
          >
            <CtaIcon $image="chevronDown" $size="md" />
          </Button>

          <Dropdown id={popUpId}>
            <FontFamilyDropdownContent editorId={editorId} popUpId={popUpId} />
          </Dropdown>
        </>
      }
    />
  );
};

export default memo(FontFamilyDropdown);
