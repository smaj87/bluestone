import {
  FC,
  memo,
  useCallback,
  useEffectWithoutMount,
  useState,
} from 'commons/utils/react';

import { BimiStyled } from './styles';
import { BimiPlacement } from './types';

interface Props {
  alt?: string;
  image: string;
  initials: string;
  placement: BimiPlacement;
}

const Bimi: FC<Props> = ({ alt, image, initials, placement }) => {
  const [isError, setIsError] = useState(false);

  const onError = useCallback(() => setIsError(true), []);

  useEffectWithoutMount(() => {
    setIsError(false);
  }, [image]);

  return (
    <BimiStyled $placement={placement}>
      {image && !isError ? (
        <img alt={alt} loading="lazy" onError={onError} src={image} />
      ) : (
        initials
      )}
    </BimiStyled>
  );
};

export default memo(Bimi);
