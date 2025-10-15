import useTranslations from 'commons/hooks/useTranslations';
import { dataLayerPush, eventsApiSendAction } from 'commons/utils/ads';
import { VISUALLY_HIDDEN_CLASS } from 'commons/utils/classNames';
import { FC, memo, useCallback, useMemo } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';
import { dispatch } from 'commons/utils/store';

import { setFilterSellerName } from '../actions';
import { isActiveSellerButtonBySellerName } from '../selectors';
import { Seller } from '../types';
import { CTA_SELLER_FILTER_CLASS } from './constants';
import SellerBimi from './SellerBimi';
import {
  SellerButtonStyled,
  SellerImageStyled,
  SellerNameStyled,
} from './styles';

interface Props {
  isBimiShow?: boolean;
  label?: string;
  seller: Seller;
}

const SellerButton: FC<Props> = ({ isBimiShow, label, seller }) => {
  const t = useTranslations();

  const sellerWithoutBimi = useMemo(
    () => ({ name: seller.name, email: seller.email }),
    [seller.name, seller.email],
  );

  const onClick = useCallback(() => {
    if (seller.name || seller.email) {
      dispatch(setFilterSellerName(sellerWithoutBimi, true));
    } else {
      dispatch(
        setFilterSellerName(
          {
            name: '',
            email: '',
          },
          true,
        ),
      );
    }
    dispatch(
      eventsApiSendAction({
        event_category: 'coupons',
        event_action: 'clicked_seller_button',
        event_details: {
          isDefault: true,
          isBimiShow: !!isBimiShow,
        },
      }),
    );

    dataLayerPush({
      event: 'GA4_coupons_clicked_seller_button',
      mp_params: [
        {
          seller: seller.name || seller.email,
          isDefault: true,
          isBimiShow: !!isBimiShow,
        },
      ],
    });
  }, []);

  const selectorSeller = useMemo(
    () => ({ seller, isDefaultCoupons: true }),
    [seller.name, seller.email],
  );

  const isActive = useSelector(
    isActiveSellerButtonBySellerName,
    selectorSeller,
  );

  return (
    <SellerButtonStyled
      $isActive={isActive}
      className={CTA_SELLER_FILTER_CLASS}
      onClick={onClick}
      title={label}
    >
      <SellerImageStyled $isActive={isActive}>
        {isBimiShow ? <SellerBimi seller={seller} /> : null}
      </SellerImageStyled>
      <SellerNameStyled $isActive={isActive}>
        <span className={VISUALLY_HIDDEN_CLASS}>{t('couponsFilterFrom')}</span>
        {label}
      </SellerNameStyled>
    </SellerButtonStyled>
  );
};

export default memo(SellerButton);
