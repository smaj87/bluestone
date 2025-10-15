import { AppBrand } from 'commons/AppContainer/types';
import useTranslations from 'commons/hooks/useTranslations';
import {
  SlotRightColumnStyled,
  SlotRightContentStyled,
  SlotRightStyled,
} from 'commons/share_app/components/hooks/useAds/elements/SlotRight/styles';
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
  SLOT_RIGHT_ID,
} from '../constants';
import { isShowDesktopAds as isShowDesktopAdsSelector } from '../selectors';
import { AdPlugRight } from './styles';

const SlotRight: FC = () => {
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
    <SlotRightStyled $brand={process.env.APP as AppBrand}>
      <SlotRightContentStyled>
        <SlotRightColumnStyled>
          <div>{isEmpty && <AdPlugRight>{t('ad')}</AdPlugRight>}</div>
          <div ref={ref} id={SLOT_RIGHT_ID} />
        </SlotRightColumnStyled>
      </SlotRightContentStyled>
    </SlotRightStyled>
  ) : null;
};

export default memo(SlotRight);
