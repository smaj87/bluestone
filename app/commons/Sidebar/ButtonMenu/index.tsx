import useTranslations from 'commons/hooks/useTranslations';
import { FC, memo } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

import { SIDEBAR_ID } from '../constants';
import { isOpen as isOpenSelector } from '../selector';
import { isDotShow as isDotShowSelector } from './selector';
import {
  ButtonMenuIconStyled,
  ButtonMenuStyled,
  SideMenuDotStyled,
} from './styles';

interface Props {
  id?: string;
  onClick?: () => void;
}

const ButtonMenu: FC<Props> = ({ id, onClick }) => {
  const t = useTranslations();

  const isOpen = useSelector(isOpenSelector);
  const isDotShow = useSelector(isDotShowSelector);

  return (
    <ButtonMenuStyled
      aria-controls={SIDEBAR_ID}
      aria-expanded={isOpen ? 'true' : 'false'}
      data-cypress="SIDEBAR-OPEN"
      id={id}
      onClick={onClick}
      title={isOpen ? t('ctaCloseSidebar') : t('ctaOpenSidebar')}
      type="button"
    >
      <ButtonMenuIconStyled $image={isOpen ? 'close' : 'menu'} aria-hidden />
      {isDotShow && <SideMenuDotStyled />}
    </ButtonMenuStyled>
  );
};

export default memo(ButtonMenu);
