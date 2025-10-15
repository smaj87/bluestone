import useTranslations from 'commons/hooks/useTranslations';
import { UserActionTileStyled } from 'commons/share_app/components/UserActionTile/styles';
import { FC, memo } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

import { MOVE_CONTENT } from '../constants';
import { getSmartFunctionsStatus } from '../selectors';
import Actions from './Actions';
import Description from './Description';
import Info from './Info';

interface Props {
  isEdit: boolean;
}

const SmartFunctions: FC<Props> = ({ isEdit }) => {
  const t = useTranslations();
  const smartFunctionsStatus = useSelector(getSmartFunctionsStatus);

  return (
    <UserActionTileStyled id={MOVE_CONTENT}>
      <Description />
      {isEdit && <Actions />}
      {isEdit && smartFunctionsStatus < 0 && (
        <Info
          text={t('userConfigAgreementsModalSmartFunctionsDisableInfoGazeta')}
        />
      )}
    </UserActionTileStyled>
  );
};

export default memo(SmartFunctions);
