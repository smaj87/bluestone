import { IS_ACTIVE_CLASS } from 'commons/Chips/constants';
import { ChipsButtonStyled, ChipsNameStyled } from 'commons/Chips/styles';
import { dataLayerPush, eventsApiSendAction } from 'commons/utils/ads';
import { FC, memo, useCallback, useMemo } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';
import { dispatch } from 'commons/utils/store';

import { setFilterSellerName } from '../actions';
import { isActiveSellerButtonBySellerName } from '../selectors';
import { Seller } from '../types';
import SellerBimi from './SellerBimi';

interface Props {
  isBimiShow?: boolean;
  label?: string;
  seller: Seller;
  isDefault?: boolean;
}

const SellerButton: FC<Props> = ({ isBimiShow, label, seller }) => {
  const sellerWithoutBimi = useMemo(
    () => ({ name: seller.name, email: seller.email }),
    [seller.name, seller.email],
  );

  const onClick = useCallback(() => {
    if (seller.name || seller.email) {
      dispatch(setFilterSellerName(sellerWithoutBimi, false));
    } else {
      dispatch(
        setFilterSellerName(
          {
            name: '',
            email: '',
          },
          false,
        ),
      );
    }
    dispatch(
      eventsApiSendAction({
        event_category: 'coupons',
        event_action: 'clicked_seller_button',
        event_details: {
          isDefault: false,
          isBimiShow: !!isBimiShow,
        },
      }),
    );

    dataLayerPush({
      event: 'GA4_coupons_clicked_seller_button',
      mp_params: [
        {
          seller_name: seller.name,
          seller_email: seller.email,
          isDefault: false,
          isBimiShow: !!isBimiShow,
        },
      ],
    });
  }, []);

  const selectorSeller = useMemo(
    () => ({ seller, isDefaultCoupons: false }),
    [seller.name, seller.email],
  );

  const isActive = useSelector(
    isActiveSellerButtonBySellerName,
    selectorSeller,
  );

  const extraClasses = useMemo(() => {
    let classes = '';

    if (isActive) {
      classes = `${classes} ${IS_ACTIVE_CLASS}`;
    }

    return classes;
  }, [isActive]);

  return (
    <ChipsButtonStyled
      className={`${extraClasses}`}
      onClick={onClick}
      title={label}
    >
      {isBimiShow ? <SellerBimi seller={seller} /> : null}
      <ChipsNameStyled>{label}</ChipsNameStyled>
    </ChipsButtonStyled>
  );
};

export default memo(SellerButton);
