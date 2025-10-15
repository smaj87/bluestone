import Button from 'commons/Button';
import useTranslations from 'commons/hooks/useTranslations';
import {
  NavbarContentLeftStyled,
  NavbarContentRightStyled,
} from 'commons/Navbar/styles';
import NavbarLabel from 'commons/share_app/components/Navbar/NavbarLabel';
import { FC, memo, useCallback } from 'commons/utils/react';

interface Props {
  count: number;
  isAllChecked: boolean;
  onClick?: (isChecked: boolean) => void;
}

const CheckedList: FC<Props> = ({ count, isAllChecked, onClick }) => {
  const t = useTranslations();

  const onClickFunc = useCallback(
    (_, isChecked) => {
      onClick?.(isChecked);
    },
    [onClick],
  );

  return (
    <>
      <NavbarContentLeftStyled role="group">
        <Button
          color="navbar"
          cypressId="BUTTON-UNCHECK"
          icon="close"
          onClick={onClickFunc}
          params={false}
          shape="square"
          size="md"
          title={t('ctaUncheckAll')}
        />
        <NavbarLabel label={t('checkedMessagesCounter', { counter: count })} />
      </NavbarContentLeftStyled>
      <NavbarContentRightStyled role="group">
        <Button
          color="navbar"
          cypressId="BUTTON-CHECK-ALL"
          isDisabled={isAllChecked}
          label={t('ctaCheckAll')}
          onClick={onClickFunc}
          params
          size="md"
        />
      </NavbarContentRightStyled>
    </>
  );
};

export default memo(CheckedList);
