import Modal from 'commons/Modal';
import { getParams, isOpenByModalId } from 'commons/Modal/selectors';
import { FORMAT_DATE } from 'commons/utils/constants';
import { stringToDate } from 'commons/utils/date';
import formatDate from 'commons/utils/formatDate';
import { FC } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

import { COUPON_MODAL_ID } from '../constants';
import Description from './Description';
import DiscountCode from './DiscountCode';
import ImageHref from './ImageHref';
import { CouponModalContentStyled, ModalCopyActionsStyled } from './styles';
import ValidUntil from './ValidUntil';

const CouponModal: FC = () => {
  const isOpen = useSelector(isOpenByModalId, COUPON_MODAL_ID);
  const params = useSelector(getParams);
  const {
    availabilityEnds,
    copyTracker,
    couponId,
    defaultExpirationDate,
    description,
    discountCode,
    email,
    image,
    isAdServerCoupon,
    isDefault,
    mid,
    name,
    source,
    url,
  } = params;
  const date = stringToDate(availabilityEnds || defaultExpirationDate);

  return isOpen ? (
    <Modal>
      <CouponModalContentStyled>
        <ImageHref image={image} />
        <Description description={description} />
        <ValidUntil date={date ? formatDate(date, FORMAT_DATE) : ''} />
      </CouponModalContentStyled>
      <ModalCopyActionsStyled>
        <DiscountCode
          copyTracker={copyTracker}
          couponId={couponId}
          discountCode={discountCode}
          email={email}
          hasCode={!!discountCode}
          hasUrl={!!url}
          isAdServerCoupon={isAdServerCoupon}
          isDefault={isDefault}
          mid={mid}
          name={name}
          source={source}
          url={url}
        />
      </ModalCopyActionsStyled>
    </Modal>
  ) : null;
};

CouponModal.displayName = 'CouponModal';

export default CouponModal;
