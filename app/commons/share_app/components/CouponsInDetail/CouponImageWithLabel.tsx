import Icon from 'commons/Icon';
import LoaderBouncingDots from 'commons/LoaderBouncing';
import noLogoGoodie from 'commons/share_app/components/SuperOffer/image/goodie.png';
import {
  CouponImageLabelStyled,
  CouponImageStyled,
  CouponImageWrapperStyled,
} from 'commons/share_app/containers/Coupons/CouponItem/styles';
import { Coupon } from 'commons/share_app/containers/Coupons/types';
import { FC, memo, useCallback, useState } from 'commons/utils/react';

interface Props {
  image?: Coupon['image'];
  itemName: string;
  $isBrand?: boolean;
}

const CouponImageWithLabel: FC<Props> = ({ $isBrand, image, itemName }) => {
  const [isError, setIsError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const onError = useCallback(() => setIsError(true), []);

  const onLoad = useCallback(() => setIsLoaded(true), []);

  return (
    <CouponImageWrapperStyled $isLoaded={isLoaded}>
      <CouponImageStyled $isLoaded={isLoaded}>
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
          <>
            {$isBrand ? (
              <img alt="" src={noLogoGoodie} />
            ) : (
              <Icon $image="couponsLabel" />
            )}
          </>
        )}
      </CouponImageStyled>
      <CouponImageLabelStyled $isBrand={$isBrand}>
        {itemName}
      </CouponImageLabelStyled>
    </CouponImageWrapperStyled>
  );
};

CouponImageWithLabel.displayName = 'CouponImageWithLabel';

export default memo(CouponImageWithLabel);
