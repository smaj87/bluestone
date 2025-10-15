import useTranslations from 'commons/hooks/useTranslations';
import LoaderBouncingDots from 'commons/LoaderBouncing';
import { FC, memo, useCallback, useState } from 'commons/utils/react';

import logoGoodie from '../images/goodie.png';
import { MailsListCardIcon, MailsListCardImageStyled } from '../styles';
import { Brand } from '../types';

interface MailsListCardImageProps {
  image?: string;
  brand: Brand;
}

export const MailsListCardImage: FC<MailsListCardImageProps> = ({
  brand,
  image,
}) => {
  const t = useTranslations();
  const [isError, setIsError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const onError = useCallback(() => setIsError(true), []);

  const onLoad = useCallback(() => setIsLoaded(true), []);

  let brandLogo = <MailsListCardIcon $image="couponsLabel" />;

  if (brand === 'goodie') {
    brandLogo = <img alt={t('logoGoodie')} src={logoGoodie} />;
  }

  return (
    <MailsListCardImageStyled $isLoaded={isLoaded}>
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
        brandLogo
      )}
    </MailsListCardImageStyled>
  );
};

export default memo(MailsListCardImage);
