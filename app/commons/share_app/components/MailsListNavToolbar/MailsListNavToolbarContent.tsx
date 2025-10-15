import Button from 'commons/Button';
import Dot from 'commons/Dot';
import { isFolderListShowNewLabel } from 'commons/hooks/useInterfaceEffects/selectors';
import useTranslations from 'commons/hooks/useTranslations';
import { isOrdersTabVisible as isOrdersTabVisibleSelector } from 'commons/hooks/useUserConfig/selectors';
import {
  CASHBACKS_URL,
  PAGE_NAME as CASHBACKS_PAGE_NAME,
} from 'commons/share_app/containers/Cashbacks/constants';
import { cashbacksShowProps } from 'commons/share_app/containers/Cashbacks/Hooks';
import { isNewCashbacks as isNewCashbacksSelector } from 'commons/share_app/containers/Cashbacks/selectors';
import {
  COUPONS_URL,
  PAGE_NAME as COUPONS_PAGE_NAME,
} from 'commons/share_app/containers/Coupons/constants';
import { couponsShowProps } from 'commons/share_app/containers/Coupons/Hooks';
import { isNewCoupons as isNewCouponsSelector } from 'commons/share_app/containers/Coupons/selectors';
import {
  NEWSLETTERS_URL,
  PAGE_NAME as NEWSLETTERS_PAGE_NAME,
} from 'commons/share_app/containers/Newsletters/constants';
import { newslettersShowProps } from 'commons/share_app/containers/Newsletters/Hooks';
import {
  ORDERS_URL_NAME,
  PAGE_NAME as PAGE_NAME_ORDERS,
} from 'commons/share_app/containers/Orders/constants';
import { isToolbarMenuDotVisible } from 'commons/share_app/containers/Orders/selectors';
import {
  ToolbarGroupItemStyled,
  ToolbarGroupStyled,
} from 'commons/Toolbar/styles';
import { runtimeData } from 'commons/utils/ads';
import { FC, memo, useCallback } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';
import { historyPush } from 'commons/utils/route';

import { ZAKUPY_TARGET_ID } from 'components/Cloud/constants';
import { isPage } from 'containers/App/selectors';
import { FOLDER_INBOX_KEY } from 'containers/Folders/constants';
import { getNotificationShoppingFolder } from 'containers/Folders/selectors';
import { MAILS_URLS } from 'utils/constants';

const couponsProps = { pageName: COUPONS_PAGE_NAME };
const cashbacksProps = { pageName: CASHBACKS_PAGE_NAME };
const newslettersProps = { pageName: NEWSLETTERS_PAGE_NAME };
const ordersProps = { pageName: PAGE_NAME_ORDERS };

const MailsListNavToolbarContent: FC = () => {
  const t = useTranslations();

  const isCouponsActive = useSelector(isPage, couponsProps);
  const isCashbacksActive = useSelector(isPage, cashbacksProps);
  const isNewslettersActive = useSelector(isPage, newslettersProps);
  const isOrdersActive = useSelector(isPage, ordersProps);

  const isNewCashbacks = useSelector(isNewCashbacksSelector);
  const isNewCoupons = useSelector(isNewCouponsSelector);
  const isOrdersTabVisible = useSelector(isOrdersTabVisibleSelector);
  const isOrdersDotVisible = useSelector(isToolbarMenuDotVisible);

  const orderCounter = useSelector(getNotificationShoppingFolder);

  const isNewLabelShowCoupons = useSelector(
    isFolderListShowNewLabel,
    couponsShowProps,
  );

  const isNewLabelShowCashbacks = useSelector(
    isFolderListShowNewLabel,
    cashbacksShowProps,
  );

  const isNewLabelShowNewsletters = useSelector(
    isFolderListShowNewLabel,
    newslettersShowProps,
  );

  const isWebmailBtnActive =
    !isNewslettersActive &&
    !isCouponsActive &&
    !isCashbacksActive &&
    !isOrdersActive;

  const goToNewsletters = useCallback(() => {
    historyPush(`/${NEWSLETTERS_URL}`);

    runtimeData.newslettersViewVisitedFrom = 'toolbar';
  }, []);

  const goToCashbacks = useCallback(() => {
    historyPush(`/${CASHBACKS_URL}`);

    runtimeData.cashbacksViewVisitedFrom = 'toolbar';
  }, []);

  const goToCoupons = useCallback(() => {
    historyPush(`/${COUPONS_URL}`);

    runtimeData.couponsViewVisitedFrom = 'toolbar';
  }, []);

  const goToOrders = useCallback(() => {
    historyPush(`/${ORDERS_URL_NAME}`);

    runtimeData.ordersViewVisitedFrom = 'toolbar';
  }, []);

  const goToInbox = useCallback(() => {
    historyPush(`/${MAILS_URLS[FOLDER_INBOX_KEY]}`);
  }, []);

  return (
    <ToolbarGroupStyled $space="md" role="list">
      <ToolbarGroupItemStyled role="listitem">
        <Button
          $isActive={isWebmailBtnActive}
          color="toolbarSubmenu"
          cypressId="BUTTON-INBOX"
          icon="webmail"
          isMobile
          label={t('webmail')}
          onClick={goToInbox}
          size="md"
        />
      </ToolbarGroupItemStyled>
      {isOrdersTabVisible && (
        <ToolbarGroupItemStyled data-cloud={ZAKUPY_TARGET_ID} role="listitem">
          <Button
            $isActive={isOrdersActive}
            color="toolbarSubmenu"
            cypressId="BUTTON-ORDER"
            icon="shoppingCart"
            isMobile
            label={t('orders')}
            onClick={goToOrders}
            size="md"
          >
            {isOrdersDotVisible || orderCounter ? (
              <Dot location="toolbarSubmenu" />
            ) : null}
          </Button>
        </ToolbarGroupItemStyled>
      )}
      <ToolbarGroupItemStyled role="listitem">
        <Button
          $isActive={isCouponsActive}
          color="toolbarSubmenu"
          cypressId="BUTTON-COUPON"
          icon="coupon"
          isMobile
          label={t('coupons')}
          onClick={goToCoupons}
          size="md"
        >
          {isNewLabelShowCoupons || isNewCoupons ? (
            <Dot location="toolbarSubmenu" />
          ) : null}
        </Button>
      </ToolbarGroupItemStyled>
      <ToolbarGroupItemStyled role="listitem">
        <Button
          $isActive={isCashbacksActive}
          color="toolbarSubmenu"
          cypressId="BUTTON-CASHBACK"
          icon="dollar"
          isMobile
          label={t('cashback')}
          onClick={goToCashbacks}
          size="md"
        >
          {isNewLabelShowCashbacks || isNewCashbacks ? (
            <Dot location="toolbarSubmenu" />
          ) : null}
        </Button>
      </ToolbarGroupItemStyled>
      <ToolbarGroupItemStyled role="listitem">
        <Button
          $isActive={isNewslettersActive}
          color="toolbarSubmenu"
          cypressId="BUTTON-NEWSLETTER"
          icon="newsletter"
          isMobile
          label={t('newsletters')}
          onClick={goToNewsletters}
          size="md"
        >
          {isNewLabelShowNewsletters ? <Dot location="toolbarSubmenu" /> : null}
        </Button>
      </ToolbarGroupItemStyled>
    </ToolbarGroupStyled>
  );
};

export default memo(MailsListNavToolbarContent);
