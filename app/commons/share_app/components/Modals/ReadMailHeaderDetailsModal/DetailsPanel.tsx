import Button from 'commons/Button';
import useTranslations from 'commons/hooks/useTranslations';
import { close } from 'commons/Modal/actions';
import { ModalActionsStyled } from 'commons/Modal/styles';
import Details from 'commons/share_app/components/Modals/ReadMailHeaderDetailsModal/Details';
import { TabPanelStyled } from 'commons/Tabs/styles';
import { FC, memo, useCallback } from 'commons/utils/react';
import { dispatch } from 'commons/utils/store';

import { TAB_DETAILS_ID, TAB_PANEL_DETAILS_ID } from './constants';

const DetailsPanel: FC = () => {
  const t = useTranslations();

  const onClose = useCallback(() => {
    dispatch(close());
  }, []);

  return (
    <>
      <TabPanelStyled
        aria-labelledby={TAB_DETAILS_ID}
        id={TAB_PANEL_DETAILS_ID}
        role="tabpanel"
      >
        <Details />
      </TabPanelStyled>
      <ModalActionsStyled>
        <Button
          color="primary"
          cypressId="BUTTON-CLOSE"
          label={t('ctaClose')}
          onClick={onClose}
          size="lg"
        />
      </ModalActionsStyled>
    </>
  );
};

export default memo(DetailsPanel);
