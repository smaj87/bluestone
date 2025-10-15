import Icon from 'commons/Icon';
import LoaderBouncingDots from 'commons/LoaderBouncing';
import { FC, memo, useCallback, useState } from 'commons/utils/react';

import { ProductItemImgStyled } from './styles';

interface Props {
  img?: string;
}

const ProductItemImg: FC<Props> = ({ img }) => {
  const [isError, setIsError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const onError = useCallback(() => setIsError(true), []);

  const onLoad = useCallback(() => setIsLoaded(true), []);

  return (
    <ProductItemImgStyled $isImage={!!img && !isError}>
      {!!img && !isError ? (
        <>
          <img
            alt=""
            loading="lazy"
            onError={onError}
            onLoad={onLoad}
            src={img}
          />
          {!isLoaded && <LoaderBouncingDots position="absolute" size="sm" />}
        </>
      ) : (
        <Icon $image="image" />
      )}
    </ProductItemImgStyled>
  );
};

export default memo(ProductItemImg);
