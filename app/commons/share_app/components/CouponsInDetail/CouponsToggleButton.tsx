import { FC, memo } from 'commons/utils/react';

import {
  SCREEN_MD_CLASS,
  SCREEN_SM_CLASS,
  SCREEN_XL_CLASS,
  VALUE_MD,
  VALUE_SM,
  VALUE_XL,
} from '../CashbackCards/constants';
import CouponsToggleButtonLabel from './CouponsToggleButtonLabel';
import { CouponsToggleButtonStyled } from './styles';

interface Props {
  label: string;
  volume: number;
  onToggle: () => void;
}

const CouponsToggleButton: FC<Props> = ({ label, onToggle, volume }) =>
  volume > 1 ? (
    <CouponsToggleButtonStyled onClick={onToggle}>
      <CouponsToggleButtonLabel
        classLabel={SCREEN_XL_CLASS}
        label={label}
        size={VALUE_XL}
        volume={volume}
      />
      <CouponsToggleButtonLabel
        classLabel={SCREEN_MD_CLASS}
        label={label}
        size={VALUE_MD}
        volume={volume}
      />
      <CouponsToggleButtonLabel
        classLabel={SCREEN_SM_CLASS}
        label={label}
        size={VALUE_SM}
        volume={volume}
      />
    </CouponsToggleButtonStyled>
  ) : null;

export default memo(CouponsToggleButton);
