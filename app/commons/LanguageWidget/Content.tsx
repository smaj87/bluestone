import { closeDropdown } from 'commons/Dropdown/actions';
import {
  GroupButtonLang,
  GroupListItemStyled,
  GroupListStyled,
} from 'commons/GroupActions/styles';
import useTranslations from 'commons/hooks/useTranslations';
import { setLang } from 'commons/hooks/useTranslations/actions';
import { getLang } from 'commons/hooks/useTranslations/selectors';
import { isMobile as isMobileSelector } from 'commons/hooks/useUserConfig/selectors';
import { close } from 'commons/ToolbarSubmenu/actions';
import { FC, useCallback } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';
import { dispatch } from 'commons/utils/store';

import { DROPDOWN_POPUP_ID } from './constants';
import flagPL from './images/flag_pl.svg';
import flagUA from './images/flag_ua.svg';

const LanguageSwitcherContent: FC = () => {
  const t = useTranslations();
  const isMobile = useSelector(isMobileSelector);
  const currentLang = useSelector(getLang);

  const onClick = useCallback((_, lang) => {
    dispatch(setLang(lang));
    if (isMobile) {
      dispatch(close());
    } else {
      dispatch(closeDropdown(DROPDOWN_POPUP_ID));
    }
  }, []);

  return (
    <GroupListStyled>
      <GroupListItemStyled>
        <GroupButtonLang
          $align="left"
          $isActive={currentLang === 'pl'}
          color="secondary"
          image={flagPL}
          label={`(${t('langLabels', {
            lang: '_pl',
            isShort: true,
          })}) ${t('langLabels', { lang: '_pl' })}`}
          onClick={onClick}
          params="pl"
          size="md"
        />
      </GroupListItemStyled>
      <GroupListItemStyled>
        <GroupButtonLang
          $align="left"
          $isActive={currentLang === 'uk'}
          color="secondary"
          image={flagUA}
          label={`(${t('langLabels', {
            lang: '_uk',
            isShort: true,
          })}) ${t('langLabels', { lang: '_uk' })}`}
          onClick={onClick}
          params="uk"
          size="md"
        />
      </GroupListItemStyled>
    </GroupListStyled>
  );
};

export default LanguageSwitcherContent;
