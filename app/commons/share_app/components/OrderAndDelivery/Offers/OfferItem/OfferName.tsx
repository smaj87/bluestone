import { FC, memo } from 'commons/utils/react';

import { Offer } from '../../types';
import { OfferNameStyled } from './styles';

interface Props {
  itemName: Offer['itemOffered']['name'];
}

const OfferName: FC<Props> = ({ itemName }) =>
  itemName ? <OfferNameStyled>{itemName}</OfferNameStyled> : null;

export default memo(OfferName);
