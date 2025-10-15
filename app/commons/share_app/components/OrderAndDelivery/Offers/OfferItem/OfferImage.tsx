import LoaderBouncingDots from 'commons/LoaderBouncing';
import { FC, memo, useCallback, useState } from 'commons/utils/react';

import { Offer } from '../../types';
import { OfferIcon, OfferImageStyled } from './styles';

interface Props {
  image: Offer['itemOffered']['image'];
}

const OfferImage: FC<Props> = ({ image }) => {
  const [isError, setIsError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const onError = useCallback(() => setIsError(true), []);

  const onLoad = useCallback(() => setIsLoaded(true), []);

  return (
    <OfferImageStyled>
      {image && !isError ? (
        <>
          <img
            alt=""
            loading="lazy"
            onError={onError}
            onLoad={onLoad}
            src={image}
          />
          {!isLoaded && <LoaderBouncingDots position="absolute" size="sm" />}
        </>
      ) : (
        <OfferIcon $image="image" />
      )}
    </OfferImageStyled>
  );
};

export default memo(OfferImage);
