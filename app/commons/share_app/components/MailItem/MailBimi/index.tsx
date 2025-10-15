import { FC, memo, useCallback, useState } from 'commons/utils/react';

import { MailBimiStyled } from './styles';

interface Props {
  image: string;
}

const MailBimi: FC<Props> = ({ image }) => {
  const [isError, setIsError] = useState(false);

  const onError = useCallback(() => setIsError(true), []);

  return (
    <MailBimiStyled>
      {image && !isError ? (
        <img alt="" loading="lazy" onError={onError} src={image} />
      ) : null}
    </MailBimiStyled>
  );
};

export default memo(MailBimi);
