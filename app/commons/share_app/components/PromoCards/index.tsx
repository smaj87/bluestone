import {
  getPromoCardsFromSchema,
  isPromoCards as isPromoCardsSelector,
  isShowMoreDiscounts,
} from 'commons/share_app/containers/ReadMail/selectors';
import { FC, memo } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

import PromoCardItem from './PromoCardItem';

const PromoCards: FC = () => {
  const showMoreCoupons = useSelector(isShowMoreDiscounts);
  const isPromoCards = useSelector(isPromoCardsSelector);
  const promoCards = useSelector(getPromoCardsFromSchema);

  return isPromoCards ? (
    <>
      {promoCards.map((p: any) => (
        <PromoCardItem key={p.id} $isShow={showMoreCoupons} promoCard={p} />
      ))}
    </>
  ) : null;
};

export default memo(PromoCards);
