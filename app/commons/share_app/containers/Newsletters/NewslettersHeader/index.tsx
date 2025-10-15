import useTranslations from 'commons/hooks/useTranslations';
import { ShoppingPageHeaderStyled } from 'commons/share_app/components/ShoppingPages/styles';
import { FC, memo } from 'commons/utils/react';

const NewslettersHeader: FC = () => {
  const t = useTranslations();

  return (
    <ShoppingPageHeaderStyled>
      <h1>{t('newsletters')}</h1>
      <p>{t('newslettersText1', undefined)}</p>
      <p>{t('newslettersText2')}</p>
    </ShoppingPageHeaderStyled>
  );
};

export default memo(NewslettersHeader);
