import Button from 'commons/Button';
import useTranslations from 'commons/hooks/useTranslations';
import { isMobile as isMobileSelector } from 'commons/hooks/useUserConfig/selectors';
import { FC, useCallback, useMemo } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';
import { dispatch } from 'commons/utils/store';

import { setIsOpen, setValue } from './actions';
import { isOpen as isOpenSelector } from './selectors';

interface Props {
  isOpenMode?: boolean;
}

const ButtonToggle: FC<Props> = ({ isOpenMode = false }) => {
  const t = useTranslations();

  const isMobile = useSelector(isMobileSelector);
  const isOpen = useSelector(isOpenSelector);

  const isShow = useMemo(
    () => ((!isOpenMode && isOpen) || (isOpenMode && !isOpen)) && isMobile,
    [isOpen, isOpenMode, isMobile],
  );

  const onClick = useCallback(() => {
    if (!isOpenMode) {
      dispatch(setValue(''));
    }

    dispatch(setIsOpen(isOpenMode));
  }, [isOpenMode]);

  return isShow ? (
    <Button
      color={isOpenMode ? 'navbar' : 'secondary'}
      cypressId="BUTTON-TOGGLE-SEARCH"
      icon={isOpenMode ? 'search' : 'close'}
      onClick={onClick}
      size="md"
      title={isOpenMode ? t('ctaOpenSearch') : t('ctaCloseSearch')}
    />
  ) : null;
};

ButtonToggle.displayName = 'ButtonToggle';

export default ButtonToggle;
