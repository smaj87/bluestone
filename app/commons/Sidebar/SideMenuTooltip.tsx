import useTranslations from 'commons/hooks/useTranslations';
import { isMobile as isMobileSelector } from 'commons/hooks/useUserConfig/selectors';
import { FC } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

import { isOpen as isOpenSelector } from './selector';
import {
  ButtonCloseIcon,
  ButtonCloseTooltipStyled,
  SideMenuTooltipStyled,
} from './styles';

interface SideMenuTooltipProps {
  label?: string;
  onClick?: () => void;
}

const SideMenuTooltip: FC<SideMenuTooltipProps> = ({ label, onClick }) => {
  const t = useTranslations();
  const isMobile = useSelector(isMobileSelector);
  const isOpen = useSelector(isOpenSelector);

  return !isMobile && isOpen ? (
    <SideMenuTooltipStyled>
      <p>{label}</p>
      <ButtonCloseTooltipStyled aria-label={t('ctaClose')} onClick={onClick}>
        <ButtonCloseIcon $image="close" aria-hidden />
      </ButtonCloseTooltipStyled>
    </SideMenuTooltipStyled>
  ) : null;
};

export default SideMenuTooltip;
