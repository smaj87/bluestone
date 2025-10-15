import Icon from 'commons/Icon';
import LoaderBouncingDots from 'commons/LoaderBouncing';
import { PromoCard } from 'commons/share_app/containers/Coupons/types';
import { FC, memo, useCallback, useState } from 'commons/utils/react';

import { PromoCardImageStyled } from './styles';

interface Props {
  image: PromoCard['image'];
}

const PromoCardImage: FC<Props> = ({ image }) => {
  const [isError, setIsError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const onError = useCallback(() => setIsError(true), []);

  const onLoad = useCallback(() => setIsLoaded(true), []);

  return (
    <PromoCardImageStyled $isLoaded={isLoaded}>
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
        <Icon $image="couponsLabel" />
      )}
    </PromoCardImageStyled>
  );
};

PromoCardImage.displayName = 'PromoCardImage';

export default memo(PromoCardImage);
