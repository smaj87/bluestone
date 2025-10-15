import Button from 'commons/Button';
import useTranslations from 'commons/hooks/useTranslations';
import { openModal } from 'commons/Modal/actions';
import { READ_MAIL_HEADER_DETAILS_MODAL_ID } from 'commons/share_app/components/Modals/constants';
import { CONTENT_TYPES } from 'commons/share_app/components/Modals/ReadMailHeaderDetailsModal/TabsList';
import { FC, memo, useCallback } from 'commons/utils/react';
import { dispatch } from 'commons/utils/store';

const ButtonDetails: FC = () => {
  const t = useTranslations();

  const onClick = useCallback(() => {
    dispatch(
      openModal(READ_MAIL_HEADER_DETAILS_MODAL_ID, {
        type: CONTENT_TYPES.details,
      }),
    );
  }, []);

  return (
    <Button
      color="secondary"
      cypressId="BUTTON-DETAILS"
      icon="chevronDown"
      onClick={onClick}
      shape="square"
      size="sm"
      title={t('ctaMailDetails')}
    />
  );
};

ButtonDetails.displayName = 'ButtonDetails';

export default memo(ButtonDetails);
