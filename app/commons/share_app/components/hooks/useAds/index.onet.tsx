import { isMobile as isMobileSelector } from 'commons/hooks/useUserConfig/selectors';
import { useEffect, useEffectWithoutMount } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';
import { dispatch } from 'commons/utils/store';

// import { KEY } from './constants';
import { changeViewOnMobileChange, invokeAdsFetch } from './Onet/actions';
import { isShowAds as isShowAdsSelector } from './Onet/selectors';
import { setTemplateAd } from './Onet/SlotFlatNatmailing/actions';
import {
  GENERIC_INBOX_TEST_TPLCODE,
  GENERIC_INBOX_TPLCODE,
  INBOX_FEED_TPLCODE,
  INBOX_FEED_TPLCODE_NEW,
  INBOX_TPLCODE,
} from './Onet/SlotFlatNatmailing/constants';
import { addCustomCss, registerTemplate } from './Onet/utils';
// import reducer from './reducer';

let isTemplatesRegistered = false;

const useAds = () => {
  const isShowAds = useSelector(isShowAdsSelector);
  const isMobile = useSelector(isMobileSelector);

  useEffect(() => {
    // injectReducer(KEY, reducer); // move to initRedux because class component problem
    addCustomCss();
  }, []);

  useEffectWithoutMount(() => {
    dispatch(changeViewOnMobileChange());
  }, [isMobile]);

  useEffect(() => {
    if (isShowAds) {
      if (!isTemplatesRegistered) {
        [
          INBOX_TPLCODE,
          INBOX_FEED_TPLCODE, // deprecated - wywalic kiedy nie bedzie kreacji na tym szablonie
          INBOX_FEED_TPLCODE_NEW,
          GENERIC_INBOX_TPLCODE,
          GENERIC_INBOX_TEST_TPLCODE,
        ].forEach((tpl) => {
          registerTemplate(tpl, (ad) => {
            ad?.setContainerSize(0, 0);
            dispatch(setTemplateAd(tpl, ad));
          });
        });

        isTemplatesRegistered = true;
      }
    } else {
      isTemplatesRegistered = false;
    }
  }, [isShowAds]);

  return null;
};

export { invokeAdsFetch };
export default useAds;
