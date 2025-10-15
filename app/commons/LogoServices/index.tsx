import { FC, memo } from 'commons/utils/react';

import { LogoServicesStyled, LogoSingleStyled } from './styles';

interface Props {
  alt: string;
  href: string;
  img: string;
  title: string;
  subAlt: string;
  subHref: string;
  subImg: string;
  subTitle: string;
}

const LogoServices: FC<Props> = ({
  alt,
  href,
  img,
  subAlt,
  subHref,
  subImg,
  subTitle,
  title,
}) => (
  <LogoServicesStyled>
    <LogoSingleStyled
      data-cypress="LOGO-ONET"
      href={href}
      target="_blank"
      title={title}
    >
      <img alt={alt} loading="lazy" src={img} />
    </LogoSingleStyled>
    {!!subImg && (
      <LogoSingleStyled
        data-cypress="LOGO-POCZTA"
        href={subHref}
        title={subTitle}
      >
        <img alt={subAlt} loading="lazy" src={subImg} />
      </LogoSingleStyled>
    )}
  </LogoServicesStyled>
);

LogoServices.displayName = 'LogoServices';

export default memo(LogoServices);
