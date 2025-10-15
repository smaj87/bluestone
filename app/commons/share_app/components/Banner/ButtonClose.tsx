import useTranslations from 'commons/hooks/useTranslations';
import { ButtonCloseStyled } from 'commons/share_app/components/Banner/styles';
import { FC, memo } from 'commons/utils/react';

export interface ButtonCloseProps {
  onClick: () => void;
}

const ButtonClose: FC<ButtonCloseProps> = ({ onClick }) => {
  const t = useTranslations();

  return (
    <ButtonCloseStyled
      icon="close"
      onClick={onClick}
      size="md"
      title={t('ctaClose')}
    />
  );
};

export default memo(ButtonClose);
