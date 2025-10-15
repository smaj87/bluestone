import { SET_LANG } from 'commons/hooks/useTranslations/constants';
import { showError } from 'commons/Notifications/actions';
import t from 'commons/translations/t';
import { Lang } from 'commons/translations/types';
import { SETTINGS_API_URL } from 'commons/utils/constants';
import { AppThunk } from 'commons/utils/react-redux';
import request from 'commons/utils/request';

export const setLang =
  (lang: Lang, isSave = true): AppThunk =>
  async (dispatch) => {
    dispatch({
      type: SET_LANG,
      lang,
    });

    if (isSave) {
      try {
        await request(`${SETTINGS_API_URL}/userconfig/lang`, {
          method: 'PATCH',
          body: { lang },
        });
      } catch {
        dispatch(showError(t('notificationLangUpdateError')));
      }
    }
  };
