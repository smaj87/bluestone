import useTranslations from 'commons/hooks/useTranslations';
import ButtonSwitch from 'commons/share_app/components/UserActionTile/ButtonSwitch';
import { UserActionTileActionsStyled } from 'commons/share_app/components/UserActionTile/styles';
import { FC, memo, useCallback } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';
import { dispatch } from 'commons/utils/store';

import { switchOffAgreement, switchOnAgreement } from '../actions';
import { getSmartFunctionsStatus } from '../selectors';

const SmartFunctionsActions: FC = () => {
  const smartFunctionsStatus = useSelector(getSmartFunctionsStatus);
  const t = useTranslations();

  const switchOn = useCallback(() => {
    dispatch(switchOnAgreement('smartFunctions'));
  }, []);

  const switchOff = useCallback(() => {
    dispatch(switchOffAgreement('smartFunctions'));
  }, []);

  return (
    <UserActionTileActionsStyled role="group">
      <ButtonSwitch
        isActive={smartFunctionsStatus > 0}
        label={t('ctaSwitchOn')}
        onClick={switchOn}
      />
      <ButtonSwitch
        isActive={smartFunctionsStatus < 0}
        label={t('ctaSwitchOff')}
        onClick={switchOff}
      />
    </UserActionTileActionsStyled>
  );
};

export default memo(SmartFunctionsActions);
