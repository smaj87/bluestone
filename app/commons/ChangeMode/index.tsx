import {
  CHANGE_MODE_ID,
  CHANGE_MODE_STATE_CLASS,
} from 'commons/ChangeMode/constants';
import useTranslations from 'commons/hooks/useTranslations';
import { setTheme } from 'commons/hooks/useUserConfig/actions';
import { getThemeMode } from 'commons/hooks/useUserConfig/selectors';
import NavTreeItem from 'commons/NavTree/NavTreeItem';
import { memo, useCallback } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';
import { dispatch } from 'commons/utils/store';

import {
  ChangeModeStyled,
  ChangeModeSwitcherStyled,
  StateIconStyled,
} from './styles';

const ChangeMode = () => {
  const themeMode = useSelector(getThemeMode);
  const t = useTranslations();

  const isDarkMode = themeMode === 'dark';

  const onChange = useCallback(() => {
    dispatch(setTheme({ mode: themeMode === 'light' ? 'dark' : 'light' }));
  }, [themeMode]);

  return (
    <ChangeModeStyled data-cypress="CHANGE-MODE" htmlFor={CHANGE_MODE_ID}>
      <NavTreeItem onEnter={onChange}>
        <input
          aria-checked={isDarkMode}
          aria-label={t('ctaChangeMode', { isDarkMode })}
          checked={isDarkMode}
          data-cypress={isDarkMode ? 'MODE:DARK' : 'MODE:LIGHT'}
          id={CHANGE_MODE_ID}
          onChange={onChange}
          type="checkbox"
        />
        <ChangeModeSwitcherStyled
          aria-hidden
          className={CHANGE_MODE_STATE_CLASS}
          tabIndex={-1}
        >
          <StateIconStyled $image="day" $isChecked={isDarkMode} aria-hidden />
          <StateIconStyled
            $image="night"
            $isChecked={!isDarkMode}
            aria-hidden
          />
        </ChangeModeSwitcherStyled>
      </NavTreeItem>
    </ChangeModeStyled>
  );
};

export default memo(ChangeMode);
