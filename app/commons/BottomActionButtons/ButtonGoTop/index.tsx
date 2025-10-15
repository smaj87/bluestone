import useTranslations from 'commons/hooks/useTranslations';
import { setCurrentElementId } from 'commons/NavTree/actions';
import NavTreeItem from 'commons/NavTree/NavTreeItem';
import {
  FC,
  memo,
  useCallback,
  useEffect,
  useState,
} from 'commons/utils/react';
import { scrollPage } from 'commons/utils/scroll';
import { dispatch } from 'commons/utils/store';

import { ButtonGoTopStyled } from './styles';

const ButtonGoTop: FC = () => {
  const t = useTranslations();
  const [isVisible, setIsVisible] = useState(false);

  const onClick = useCallback(() => {
    // Reset the current element ID in the navigation tree, when going to the top of the page
    dispatch(setCurrentElementId(''));

    scrollPage();
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const scrollY = Math.max(window.scrollY, 0);

      if (scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    document.addEventListener('scroll', onScroll);
    onScroll();

    return () => {
      document.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <NavTreeItem isShow={isVisible} onEnter={onClick}>
      <ButtonGoTopStyled
        $isVisible={isVisible}
        color="default"
        cypressId="BUTTON-GO-TOP"
        icon="arrowUp"
        isDisabled={!isVisible}
        onClick={onClick}
        shape="circle"
        size="lg"
        title={t('BottomNavigation/ButtonGoTop/ctaGoTop')}
      />
    </NavTreeItem>
  );
};

export default memo(ButtonGoTop);
