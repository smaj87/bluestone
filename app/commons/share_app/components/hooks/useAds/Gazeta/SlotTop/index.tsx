import useTranslations from 'commons/hooks/useTranslations';
import {
  FC,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

import {
  ON_DESTROY_EVENT,
  ON_EMPTY_EVENT,
  ON_RENDER_EVENT,
  SLOT_TOP_ID,
} from '../constants';
import { isShowDesktopAds as isShowDesktopAdsSelector } from '../selectors';
import { AdPlugTop, SlotTopContainer } from './styles';

const SlotTop: FC = () => {
  const t = useTranslations();
  const isShowAd = useSelector(isShowDesktopAdsSelector);

  const ref = useRef<HTMLDivElement>(null);
  const [isEmpty, setIsEmpty] = useState(true);

  const onEmpty = useCallback(() => {
    setIsEmpty(true);
  }, []);

  const onRender = useCallback(() => {
    setIsEmpty(false);
  }, []);

  useEffect(() => {
    if (isShowAd) {
      document.addEventListener(ON_DESTROY_EVENT, onEmpty);
      ref.current?.addEventListener?.(ON_EMPTY_EVENT, onEmpty);
      ref.current?.addEventListener?.(ON_RENDER_EVENT, onRender);
    }

    return () => {
      document.removeEventListener(ON_DESTROY_EVENT, onEmpty);
      ref.current?.removeEventListener?.(ON_EMPTY_EVENT, onEmpty);
      ref.current?.removeEventListener?.(ON_RENDER_EVENT, onRender);
    };
  }, [isShowAd]);

  return isShowAd ? (
    <SlotTopContainer>
      <div>{isEmpty && <AdPlugTop>{t('ad')}</AdPlugTop>}</div>
      <div ref={ref} id={SLOT_TOP_ID} />
    </SlotTopContainer>
  ) : null;
};

export default SlotTop;
