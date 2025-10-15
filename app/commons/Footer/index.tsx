import useTranslations from 'commons/hooks/useTranslations';
import NavTreeItem from 'commons/NavTree/NavTreeItem';
import { FC, memo } from 'commons/utils/react';

import { FooterLinkStyled, FooterStyled, FooterTextStyled } from './styles';

const Footer: FC = () => {
  const t = useTranslations();
  const year = new Date().getFullYear();
  const { version } = window;

  return (
    <FooterStyled data-cypress="FOOTER">
      <FooterTextStyled>
        &copy; {year} {t('poweredBy')}{' '}
        <FooterLinkStyled
          href={process.env.POWERED_BY_URL}
          rel="noopener noreferrer"
          target="_blank"
          title="Ring Publishing"
        >
          Ring Publishing
        </FooterLinkStyled>
        <br />
        {t('developedBy')}{' '}
        <FooterLinkStyled
          href={process.env.DEVELOPED_BY_URL}
          rel="noopener noreferrer"
          target="_blank"
          title="RAS Tech"
        >
          RAS Tech
        </FooterLinkStyled>
      </FooterTextStyled>
      <NavTreeItem
        onEnter={() => window.open(process.env.TERMS_URL, '_blank')}
        width="full"
      >
        <FooterLinkStyled
          href={process.env.TERMS_URL}
          rel="noopener noreferrer"
          target="_blank"
          title={t('regulation')}
        >
          {t('regulation')}
        </FooterLinkStyled>
      </NavTreeItem>
      {version ? (
        <FooterTextStyled>
          {t('appVersion', { value: version })}
        </FooterTextStyled>
      ) : null}
    </FooterStyled>
  );
};

export default memo(Footer);
