import { IconImage } from 'commons/Icon/iconImage';
import { SlotFlatIcon } from 'commons/share_app/components/hooks/useAds/elements/SlotInbox/styles';
import { Selector } from 'commons/share_app/components/hooks/useAds/Onet/SlotFlatNatmailing/types';
import { FC, memo } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

import { SlotFlatOfferStyled } from './styles';

interface Props {
  selector: Selector;
}

const SlotFlatOffer: FC<Props> = ({ selector }) => {
  const icon = useSelector(selector, 'icon') as IconImage;
  const counterText = useSelector(selector, 'counterText');

  return (
    <SlotFlatOfferStyled data-cypress="SLOT-INBOX-OFFER">
      {counterText}
      {icon ? <SlotFlatIcon $image={icon} /> : null}
    </SlotFlatOfferStyled>
  );
};

export default memo(SlotFlatOffer);
