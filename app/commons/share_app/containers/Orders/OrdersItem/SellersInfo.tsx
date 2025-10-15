import useTranslations from 'commons/hooks/useTranslations';
import { decodeHtmlEntities } from 'commons/share_app/utils/decodeHtmlEntities';
import { FC, memo } from 'commons/utils/react';
import { size } from 'commons/utils/tinyLodash';

import { OrderLabelStyled } from './styles';

interface Props {
  sellers?: string[];
}

const SellersInfo: FC<Props> = ({ sellers }) => {
  const t = useTranslations();

  if (!size(sellers)) {
    return null;
  }

  const prettifiedSellers = sellers?.map((seller) =>
    decodeHtmlEntities(seller),
  );

  return (
    <span>
      <OrderLabelStyled>{t('orderFromSingle')} </OrderLabelStyled>
      <b>{prettifiedSellers?.join(', ')}</b>
    </span>
  );
};

export default memo(SellersInfo);
