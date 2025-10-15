import Icon from 'commons/Icon';
import LoaderBouncingDots from 'commons/LoaderBouncing';
import { FC, memo, useCallback, useState } from 'commons/utils/react';

import { ProductItemListOfProductsInImageBoxStyled } from './styles';

interface Props {
  offers: string;
  isDetail?: boolean;
}

const ListOfProductsInImage: FC<Props> = ({ isDetail, offers }) => {
  const [isError, setIsError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const onError = useCallback(() => setIsError(true), []);
  const onLoad = useCallback(() => setIsLoaded(true), []);

  return (
    <ProductItemListOfProductsInImageBoxStyled $isDetail={isDetail}>
      {!!offers && !isError ? (
        <>
          <img
            alt=""
            loading="lazy"
            onError={onError}
            onLoad={onLoad}
            src={offers}
          />
          {!isLoaded && <LoaderBouncingDots position="absolute" size="sm" />}
        </>
      ) : (
        <Icon $image="error" />
      )}
    </ProductItemListOfProductsInImageBoxStyled>
  );
};

export default memo(ListOfProductsInImage);
