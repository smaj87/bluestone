import { FC, memo } from 'commons/utils/react';

import { Offer } from '../types';
import OfferItem from './OfferItem';
import { OffersListStyled } from './styles';

interface Props {
  offers: Offer[];
}

const Offers: FC<Props> = ({ offers }) => (
  <OffersListStyled>
    {offers.map((o) => (
      <OfferItem key={o.id} offer={o} />
    ))}
  </OffersListStyled>
);

export default memo(Offers);
