import useTranslations from 'commons/hooks/useTranslations';
import { updateFrontCommons } from 'commons/hooks/useUserConfig/actions';
import { getFrontCommons } from 'commons/hooks/useUserConfig/selectors';
import ButtonClose from 'commons/share_app/components/Banner/ButtonClose';
import {
  HowItWorksButtonStyled,
  HowItWorksCellImgWrapperStyled,
  HowItWorksCellStyled,
  HowItWorksCellTitleStyled,
  HowItWorksGridStyled,
  HowItWorksOrStyled,
  HowItWorksTitleStyled,
  HowItWorksTopActionStyled,
  HowItWorksWrapperStyled,
} from 'commons/share_app/components/ShoppingPages/HowItWorks/styles';
import {
  DEFAULT_COUPONS_ID,
  DEFAULT_HEADERS_CLASS,
  OPTION_3,
  OPTION_4,
} from 'commons/share_app/components/ShoppingPages/ShoppingBanner/constants';
import src1 from 'commons/share_app/components/ShoppingPages/ShoppingBanner/image/couponsBig1.png';
import src2 from 'commons/share_app/components/ShoppingPages/ShoppingBanner/image/couponsBig2.png';
import src3 from 'commons/share_app/components/ShoppingPages/ShoppingBanner/image/couponsBig3.png';
import {
  ShoppingBannerContentStyled,
  ShoppingBannerStyled,
} from 'commons/share_app/components/ShoppingPages/ShoppingBanner/styles';
import { scrollToElementById } from 'commons/share_app/utils/scroll';
import { dataLayerPush, eventsApiSendAction } from 'commons/utils/ads';
import { FC, memo, useCallback, useEffect } from 'commons/utils/react';
import { getStateValueBySelector } from 'commons/utils/react-redux';
import { dispatch } from 'commons/utils/store';

interface Props {
  isDefaultCoupons?: boolean;
}

const Content: FC<Props> = ({ isDefaultCoupons }) => {
  const t = useTranslations();

  useEffect(() => {
    dispatch(
      eventsApiSendAction({
        event_category: 'coupons',
        event_action: 'coupons_howitworks_viewed',
        event_details: {
          default_coupons_length: !!isDefaultCoupons,
        },
      }),
    );

    dataLayerPush({
      event: 'GA4_coupons_howitworks_viewe',
      mp_params: [
        {
          default_coupons_length: !!isDefaultCoupons,
        },
      ],
    });
  }, []);

  const closeBanner = useCallback(() => {
    const frontCommons = getStateValueBySelector(getFrontCommons);

    dispatch(
      updateFrontCommons({
        ...frontCommons,
        interfaceUI: {
          ...(frontCommons.interfaceUI || {}),
          couponsBannerOpen: 0,
        },
      }),
    );

    dispatch(
      eventsApiSendAction({
        event_category: 'coupons',
        event_action: 'coupons_howitworks_closed_banner',
        event_details: {
          default_coupons_length: !!isDefaultCoupons,
        },
      }),
    );

    dataLayerPush({
      event: 'GA4_coupons_howitworks_closed_banner',
      mp_params: [
        {
          default_coupons_length: !!isDefaultCoupons,
        },
      ],
    });
  }, []);

  const scrollToAttachments = useCallback(() => {
    dispatch(
      eventsApiSendAction({
        event_category: 'coupons',
        event_action: 'coupons_howitworks_scroll_to_default',
        event_details: {
          default_coupons_length: !!isDefaultCoupons,
        },
      }),
    );

    dataLayerPush({
      event: 'GA4_coupons_howitworks_scroll_to_default',
      mp_params: [
        {
          default_coupons_length: !!isDefaultCoupons,
        },
      ],
    });
    const timer = setTimeout(() => {
      scrollToElementById(DEFAULT_COUPONS_ID);
      closeBanner();
    }, 100);

    setTimeout(() => {
      document
        .getElementById(DEFAULT_COUPONS_ID)
        ?.classList?.add?.(DEFAULT_HEADERS_CLASS);
    }, 500);

    setTimeout(() => {
      document
        .getElementById(DEFAULT_COUPONS_ID)
        ?.classList?.remove?.(DEFAULT_HEADERS_CLASS);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ShoppingBannerStyled>
      <HowItWorksTitleStyled>
        {t('howItWorksCouponsTitle')}
      </HowItWorksTitleStyled>
      <HowItWorksTopActionStyled>
        <HowItWorksButtonStyled
          color="primary"
          isDisabled={!isDefaultCoupons}
          label={t('howItWorksCouponsSubTitle')}
          onClick={scrollToAttachments}
          size="md"
        />
      </HowItWorksTopActionStyled>
      <ShoppingBannerContentStyled>
        <HowItWorksWrapperStyled>
          <HowItWorksGridStyled>
            <HowItWorksCellStyled>
              <HowItWorksCellImgWrapperStyled $imgBgColor={OPTION_4}>
                <img alt="" src={src1} />
              </HowItWorksCellImgWrapperStyled>
              <HowItWorksCellTitleStyled $or>
                <p>{t('howItWorksCouponsIcon1Title')}</p>
                {t('howItWorksCouponsIcon1')}
                <HowItWorksOrStyled>{t('or')}</HowItWorksOrStyled>
              </HowItWorksCellTitleStyled>
            </HowItWorksCellStyled>
            <HowItWorksCellStyled>
              <HowItWorksCellImgWrapperStyled>
                <img alt="" src={src2} />
              </HowItWorksCellImgWrapperStyled>
              <HowItWorksCellTitleStyled>
                <p>{t('howItWorksCouponsIcon2Title')}</p>
                {t('howItWorksCouponsIcon2')}
              </HowItWorksCellTitleStyled>
            </HowItWorksCellStyled>
            <HowItWorksCellStyled>
              <HowItWorksCellImgWrapperStyled $imgBgColor={OPTION_3}>
                <img alt="" src={src3} />
              </HowItWorksCellImgWrapperStyled>
              <HowItWorksCellTitleStyled>
                <p>{t('howItWorksCouponsIcon3Title')}</p>
                {t('howItWorksCouponsIcon3')}
              </HowItWorksCellTitleStyled>
            </HowItWorksCellStyled>
          </HowItWorksGridStyled>
        </HowItWorksWrapperStyled>
      </ShoppingBannerContentStyled>

      <ButtonClose onClick={closeBanner} />
    </ShoppingBannerStyled>
  );
};

export default memo(Content);
