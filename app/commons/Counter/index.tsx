import { FC, memo, useMemo } from 'commons/utils/react';

import { CounterStyled } from './styles';

interface Props {
  value: number;
  maxValue?: number;
}

const Counter: FC<Props> = ({ maxValue = 9, value }) => {
  const label = useMemo(() => {
    let number = `${value >= 0 ? value : ''}`;

    if (value > maxValue) {
      number = `${maxValue}+`;
    }

    return number;
  }, [value, maxValue]);

  return <CounterStyled>{label}</CounterStyled>;
};

export default memo(Counter);
