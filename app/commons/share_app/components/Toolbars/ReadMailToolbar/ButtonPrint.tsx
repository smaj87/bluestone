import { closeDropdown } from 'commons/Dropdown/actions';
import { GroupButton } from 'commons/GroupActions/styles';
import useTranslations from 'commons/hooks/useTranslations';
import { getMailField } from 'commons/share_app/containers/ReadMail/selectors';
import { close } from 'commons/ToolbarSubmenu/actions';
import { FC, memo, useCallback } from 'commons/utils/react';
import {
  getStateValueBySelector,
  useSelector,
} from 'commons/utils/react-redux';
import { dispatch } from 'commons/utils/store';

import { DROPDOWN_POPUP_ID } from 'components/Dropdowns/DropdownDetailMore/constants';
import { PRINTING_URL_NAME } from 'containers/App/constants';
import { READ_MAIL_URL } from 'utils/constants';

const ButtonPrint: FC = () => {
  const t = useTranslations();

  const isFetched = useSelector(getMailField, 'isFetched');

  const openPrinting = useCallback(() => {
    dispatch(close());
    dispatch(closeDropdown(DROPDOWN_POPUP_ID));

    window
      .open(
        `/${PRINTING_URL_NAME}/${READ_MAIL_URL}/_mid/${getStateValueBySelector(
          getMailField,
          'mid',
        )}`,
        '_blank',
        ' ',
      )
      ?.focus?.();
  }, []);

  return (
    <GroupButton
      $align="left"
      color="secondary"
      cypressId="BUTTON-PRINT"
      icon="print"
      isDisabled={!isFetched}
      label={t('ctaPrint')}
      onClick={openPrinting}
      size="md"
    />
  );
};

export default memo(ButtonPrint);
