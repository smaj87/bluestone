import { isMobile as isMobileSelector } from 'commons/hooks/useUserConfig/selectors';
import { SlotInboxStyled } from 'commons/share_app/components/hooks/useAds/elements/SlotInbox/styles';
import SlotInboxAdPlug from 'commons/share_app/components/hooks/useAds/elements/SlotInboxAdPlug';
import { MailsRouterIsShowContext } from 'commons/share_app/components/RouterHelpers/constants';
import { FC, memo, useContext, useEffect, useRef } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';
import { injectReducer } from 'commons/utils/store';
import { removeState } from 'commons/utils/webStorage';

import { getReFetchFlag } from '../../selectors';
import { destroyAd, fetchAd } from '../utils';
import { KEY, STORAGE_AD_KEY, STORAGE_PRODUCTS_KEY } from './constants';
import Content from './Content';
import reducer from './reducer';
import { getWatchVisibility, isShowAd as isShowAdSelector } from './selectors';

const NAME = 'flat-natmailing';
// const NAME = 'nativestd';
const CONTAINER_ID = `onet-ad-${NAME}`;
const SLOT_SIZE = 'md';

const SlotFlatNatmailing: FC = () => {
  const adContainerRef = useRef<HTMLDivElement | null>(null);
  const isMailsView = useContext(MailsRouterIsShowContext); // is mails show, because of cache

  const watchVisibility = useSelector(getWatchVisibility);
  const isShowContainer = useSelector(isShowAdSelector);
  const isShowAd = isShowContainer && isMailsView;
  const isMobile = useSelector(isMobileSelector);
  const reFetchFlag = useSelector(getReFetchFlag);

  useEffect(() => {
    if (isShowAd) {
      removeState(STORAGE_PRODUCTS_KEY);
      removeState(STORAGE_AD_KEY);

      fetchAd(NAME, '');
    }

    return () => {
      // if prev isShow === true
      if (isShowAd) {
        destroyAd(CONTAINER_ID);
      }
    };
  }, [isShowAd, reFetchFlag, isMobile]);

  useEffect(() => {
    if (isShowAd) {
      injectReducer(KEY, reducer);

      try {
        watchVisibility(adContainerRef.current);
      } catch {}
    }
  }, [watchVisibility, isShowAd]);

  return isShowContainer ? (
    <SlotInboxStyled $size={SLOT_SIZE}>
      <div ref={adContainerRef} data-cypress="SLOT-INBOX">
        <Content />
      </div>
      <div data-prop-caption="0" id={CONTAINER_ID} />
      <SlotInboxAdPlug size={SLOT_SIZE} />
    </SlotInboxStyled>
  ) : null;
};

export default memo(SlotFlatNatmailing);
