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

import {
  ON_DESTROY_EVENT,
  ON_EMPTY_EVENT,
  ON_RENDER_EVENT,
  SLOT_TOP_MOBILE_ID,
} from '../constants';
import { isShowMobileAds as isShowMobileAdsSelector } from '../selectors';
import { AdPlugMobile, SlotTopMobileStyled } from './styles';

const SlotTopMobile: FC = () => {
  const t = useTranslations();
  const isShowAd = useSelector(isShowMobileAdsSelector);

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
    <SlotTopMobileStyled>
      <div>{isEmpty ? <AdPlugMobile>{t('ad')}</AdPlugMobile> : null}</div>
      <div ref={ref} id={SLOT_TOP_MOBILE_ID} />
    </SlotTopMobileStyled>
  ) : null;
};

export default memo(SlotTopMobile);
