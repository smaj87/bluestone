import { closeDropdown } from 'commons/Dropdown/actions';
import { GroupButton, GroupListItemStyled } from 'commons/GroupActions/styles';
import useTranslations from 'commons/hooks/useTranslations';
import { openModal } from 'commons/Modal/actions';
import { READ_MAIL_HEADER_DETAILS_MODAL_ID } from 'commons/share_app/components/Modals/constants';
import { CONTENT_TYPES } from 'commons/share_app/components/Modals/ReadMailHeaderDetailsModal/TabsList';
import { getMailField } from 'commons/share_app/containers/ReadMail/selectors';
import { close } from 'commons/ToolbarSubmenu/actions';
import { FC, memo, useCallback } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';
import { dispatch } from 'commons/utils/store';

import { DROPDOWN_POPUP_ID } from 'components/Dropdowns/DropdownDetailMore/constants';

const ButtonHeaders: FC = () => {
  const t = useTranslations();

  const isFetched = useSelector(getMailField, 'isFetched');

  const onOpenDetailModal = useCallback((_, type) => {
    dispatch(
      openModal(READ_MAIL_HEADER_DETAILS_MODAL_ID, {
        type,
      }),
    );

    dispatch(close());
    dispatch(closeDropdown(DROPDOWN_POPUP_ID));
  }, []);

  return (
    <>
      <GroupListItemStyled>
        <GroupButton
          $align="left"
          color="secondary"
          cypressId="BUTTON-MAIL-DETAILS"
          icon="infoOutline"
          isDisabled={!isFetched}
          label={t('ctaMailDetails')}
          onClick={onOpenDetailModal}
          params={CONTENT_TYPES.details}
          size="md"
        />
      </GroupListItemStyled>
      <GroupListItemStyled>
        <GroupButton
          $align="left"
          color="secondary"
          cypressId="BUTTON-MAIL-HEADERS"
          icon="drafts"
          isDisabled={!isFetched}
          label={t('ctaMailHeaders')}
          onClick={onOpenDetailModal}
          params={CONTENT_TYPES.headers}
          size="md"
        />
      </GroupListItemStyled>
    </>
  );
};

export default memo(ButtonHeaders);
