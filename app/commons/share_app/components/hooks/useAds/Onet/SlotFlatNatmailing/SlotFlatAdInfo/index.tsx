import { FC, memo } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

import { getAdInfo } from '../selectors';
import { SlotFlatAdInfoStyled } from './styles';

interface Props {
  showLabel?: boolean;
}

const SlotFlatAdInfo: FC<Props> = ({ showLabel = true }) => {
  const label = useSelector(getAdInfo);

  return (
    <SlotFlatAdInfoStyled data-cypress="SLOT-INBOX-ADINFO">
      {showLabel ? label : ''}
    </SlotFlatAdInfoStyled>
  );
};

export default memo(SlotFlatAdInfo);
