import Button from 'commons/Button';
import useTranslations from 'commons/hooks/useTranslations';
import {
  NavbarContentLeftStyled,
  NavbarContentRightStyled,
} from 'commons/Navbar/styles';
import history from 'commons/utils/history';
import { FC, memo } from 'commons/utils/react';

const OrderBack: FC = () => {
  const t = useTranslations();

  return (
    <>
      <NavbarContentLeftStyled role="group">
        <Button
          color="navbar"
          icon="arrowLeft"
          onClick={history.back}
          size="md"
          title={t('ctaBack')}
        />
      </NavbarContentLeftStyled>
      <NavbarContentRightStyled role="group" />
    </>
  );
};

export default memo(OrderBack);
