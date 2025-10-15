import { FC, memo, useCallback, useState } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

import { Selector } from '../types';
import { SlotFlatBimiStyled } from './styles';

interface Props {
  selector: Selector;
}

const SlotFlatBimi: FC<Props> = ({ selector }) => {
  const image = useSelector(selector, 'bimi');
  const [isError, setIsError] = useState(false);

  const onError = useCallback(() => setIsError(true), []);

  return (
    <SlotFlatBimiStyled>
      {image && !isError ? (
        <img alt="" loading="lazy" onError={onError} src={image} />
      ) : null}
    </SlotFlatBimiStyled>
  );
};

export default memo(SlotFlatBimi);
