import useTranslations from 'commons/hooks/useTranslations';
import {
  FC,
  memo,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';
import { historyPush } from 'commons/utils/route';

import { NEW_MAIL_URL_NAME } from 'containers/NewMail/constants';

import { isNewMailButton as isNewMailButtonSelector } from '../selectors';
import { ButtonActionStyled } from '../styles';

let lastHidden = false;

const ButtonNewMailMobile: FC = () => {
  const t = useTranslations();
  const isNewMailButton = useSelector(isNewMailButtonSelector);

  const [isHidden, setIsHidden] = useState(lastHidden);
  const lastScrollRef = useRef(window.scrollY);

  const onClick = useCallback(() => {
    historyPush(`/${NEW_MAIL_URL_NAME}`);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const shift = window.scrollY - lastScrollRef.current;

      if (shift > 0) {
        setIsHidden(true);
        lastHidden = true;
      } else if (shift < 0) {
        setIsHidden(false);
        lastHidden = false;
      }

      lastScrollRef.current = window.scrollY;
    };

    document.addEventListener('scroll', onScroll);
    onScroll();

    return () => {
      document.removeEventListener('scroll', onScroll);
    };
  }, []);

  return isNewMailButton ? (
    <ButtonActionStyled
      $hideLabel={isHidden}
      color="primary"
      cypressId="BUTTON-NAPISZ-MOBILE"
      icon="envelope"
      label={t('BottomNavigation/ButtonNewMailMobile/ctaNew')}
      onClick={onClick}
      size="lg"
      title={t('ctaNewMail')}
    />
  ) : null;
};

export default memo(ButtonNewMailMobile);
