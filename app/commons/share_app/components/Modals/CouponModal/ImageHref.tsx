import Icon from 'commons/Icon';
import LoaderBouncingDots from 'commons/LoaderBouncing';
import { CouponImageStyled } from 'commons/share_app/containers/Coupons/CouponItem/styles';
import { Coupon } from 'commons/share_app/containers/Coupons/types';
import { FC, memo, useState } from 'commons/utils/react';

import { ImageHrefStyled } from './styles';

interface Props {
  image: Coupon['image'];
}

const ImageHref: FC<Props> = ({ image }) => {
  const [isError, setIsError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <ImageHrefStyled>
      <CouponImageStyled $isLoaded={isLoaded}>
        {image && !isError ? (
          <>
            <img
              alt=""
              loading="lazy"
              onError={() => {
                setIsError(true);
              }}
              onLoad={() => setIsLoaded(true)}
              src={image}
            />
            {!isLoaded && <LoaderBouncingDots position="absolute" size="sm" />}
          </>
        ) : (
          <Icon $image="couponsLabel" />
        )}
      </CouponImageStyled>
    </ImageHrefStyled>
  );
};

export default memo(ImageHref);
