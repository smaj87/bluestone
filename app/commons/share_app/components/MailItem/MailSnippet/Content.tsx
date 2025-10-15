import { isOrdersTabVisible as isOrdersTabVisibleSelector } from 'commons/hooks/useUserConfig/selectors';
import { ListItemAreaContentStyled } from 'commons/share_app/components/ListElements/List/styles';
import {
  getMailById,
  getSchemaOrg,
  isVisiblePayWithOnetSnippet as isVisiblePayWithOnetSnippetSelector,
} from 'commons/share_app/containers/Mails/selectors';
import { FC, memo } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

import { FOLDER_DRAFTS_KEY } from 'containers/Folders/constants';
import { isFolderByKey } from 'containers/Folders/selectors';

import HighlightSearchText from '../HighlightSearchText';
import SchemaCashback from './SchemaCashback';
import SchemaCoupon from './SchemaCoupon';
import SchemaEnableOrders from './SchemaEnableOrders';
import SchemaMultiOffer from './SchemaMultiOffer';
import SchemaPayment from './SchemaPayment';
import SchemaPaymentPreparingInvoice from './SchemaPaymentPreparingInvoice';
import SchemaPaymentTurnOn from './SchemaPaymentTurnOn';
import SchemaPromoCard from './SchemaPromoCard';
import SchemaSendScheduleDate from './SchemaSendScheduleDate';

interface Props {
  id: number;
  snippet: string;
}

const Content: FC<Props> = ({ id, snippet }) => {
  const mail = useSelector(getMailById, id);
  const schemaOrg = useSelector(getSchemaOrg, id);
  const isDraft = useSelector(isFolderByKey, FOLDER_DRAFTS_KEY);
  const isVisiblePayWithOnetSnippet = useSelector(
    isVisiblePayWithOnetSnippetSelector,
    id,
  );
  const isOrdersTabVisible = useSelector(isOrdersTabVisibleSelector);

  const isCoupons = schemaOrg.isAnyCoupons || schemaOrg.isAnyAdsCoupons;
  const isCashbacks = schemaOrg.isAnyCashbacks || schemaOrg.isAnyAdsCashbacks;
  const isPromoCards =
    schemaOrg.isAnyPromoCards || schemaOrg.isAnyAdsPromoCards;

  const isMulti =
    [isCoupons, isPromoCards, isCashbacks].filter((a) => a).length >= 2;

  const delayDate = mail?.schema_org?.delayedSend?.delayDate;

  if (isMulti) {
    return <SchemaMultiOffer />;
  }

  if (isCoupons) {
    return <SchemaCoupon />;
  }

  if (isCashbacks) {
    return <SchemaCashback />;
  }

  if (isPromoCards) {
    return <SchemaPromoCard />;
  }

  if (schemaOrg?.payments?.length) {
    return <SchemaPayment id={id} schema={schemaOrg.payments[0]} />;
  }

  if (schemaOrg.isInvoicePreparing) {
    return <SchemaPaymentPreparingInvoice />;
  }

  if (isVisiblePayWithOnetSnippet) {
    return <SchemaPaymentTurnOn />;
  }

  if (schemaOrg.orders?.length && !isOrdersTabVisible) {
    return <SchemaEnableOrders />;
  }

  if (delayDate && isDraft) {
    return <SchemaSendScheduleDate delayDate={delayDate} />;
  }

  return (
    <ListItemAreaContentStyled>
      <HighlightSearchText value={snippet} />
    </ListItemAreaContentStyled>
  );
};

export default memo(Content);
