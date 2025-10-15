import { FC, memo } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

import { Selector } from '../types';
import { SlotFlatImageStyled } from './styles';

interface Props {
  fieldKey: string;
  selector: Selector;
}

const SlotFlatImage: FC<Props> = ({ fieldKey, selector }) => {
  const image = useSelector(selector, fieldKey);

  return image ? (
    <SlotFlatImageStyled>
      <img alt="" src={image} />
    </SlotFlatImageStyled>
  ) : null;
};

export default memo(SlotFlatImage);
