import { FC, memo } from 'commons/utils/react';

import AdjustButton from './AdjustButton';
import BackButton from './BackButton';
import ConfirmAllButton from './ConfirmAllButton';
import ConfirmSelectedButton from './ConfirmSelectedButton';
import { AgreementsActionsStyled } from './styles';

interface Props {
  isEdit: boolean;
}

const AgreementsActions: FC<Props> = ({ isEdit }) => (
  <AgreementsActionsStyled>
    {isEdit && <BackButton />}
    {isEdit ? <ConfirmSelectedButton /> : <AdjustButton />}
    <ConfirmAllButton />
  </AgreementsActionsStyled>
);

export default memo(AgreementsActions);
