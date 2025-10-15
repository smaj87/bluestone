import { FC } from 'commons/utils/react';

import { VolumeStyled } from './styles';

interface Props {
  label: string;
  volume: number;
  size: number;
  classLabel: string;
}

const CouponsToggleButtonLabel: FC<Props> = ({
  classLabel,
  label,
  size,
  volume,
}) => (
  <>
    {volume > size ? (
      <VolumeStyled className={classLabel}>
        {`${label} ${volume - size}`}
      </VolumeStyled>
    ) : null}
  </>
);

export default CouponsToggleButtonLabel;
