import useTranslations from 'commons/hooks/useTranslations';
import { isScrollingTop as isScrollingTopSelector } from 'commons/hooks/useUserConfig/selectors';
import { IconImage } from 'commons/Icon/iconImage';
import { ButtonActionStyled } from 'commons/share_app/components/BottomNavigation/styles';
import { memo } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

type Props = {
  onClick?: () => void;
  label?: string;
  icon?: IconImage;
};

const ButtonAction = ({ icon, label, onClick }: Props) => {
  const t = useTranslations();

  const isScrollingTop = useSelector(isScrollingTopSelector);

  return (
    <ButtonActionStyled
      $hideLabel={!isScrollingTop}
      color="primary"
      icon={icon || 'plus'}
      label={label || t('ctaAdd')}
      onClick={onClick || undefined}
      size="lg"
    />
  );
};

export default memo(ButtonAction);
