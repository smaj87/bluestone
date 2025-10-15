import useTranslations from 'commons/hooks/useTranslations';
import MobileLoader from 'commons/MobileLoader';
import {
  NavbarContentLeftStyled,
  NavbarContentRightStyled,
} from 'commons/Navbar/styles';
import ButtonBack from 'commons/share_app/components/Buttons/ButtonBack';
import { FC, memo } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

import { getNewMailUrlProps } from 'containers/App/selectors';

import NavbarLabel from './NavbarLabel';

const NewMail: FC = () => {
  const t = useTranslations();
  const type = useSelector(getNewMailUrlProps, 'type');

  return (
    <>
      <NavbarContentLeftStyled role="group">
        <ButtonBack color="navbar" cypressId="BUTTON-CLOSE" icon="close" />
        <MobileLoader
          mobile={
            <NavbarLabel
              label={t('containers/NewMail/ByType', { type: `_${type}` })}
            />
          }
        />
      </NavbarContentLeftStyled>
      <NavbarContentRightStyled role="group" />
    </>
  );
};

export default memo(NewMail);
