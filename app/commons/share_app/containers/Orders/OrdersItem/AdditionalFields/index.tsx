import useTranslations from 'commons/hooks/useTranslations';
import { Order } from 'commons/share_app/containers/Orders/types';
import { FC, memo } from 'commons/utils/react';

import { OrderLabelStyled } from '../styles';
import { CollectInfoStyled } from './styles';

interface Props {
  schema: Order['schema'];
}

const AdditionalFields: FC<Props> = ({ schema }) => {
  const t = useTranslations();

  const phoneNumber = schema?.additionalProperties?.find(
    (prop) => prop.name === 'phoneNumber',
  )?.value;
  const carrierPhoneNumber = schema?.additionalProperties?.find(
    (prop) => prop.name === 'carrierPhoneNumber',
  )?.value;
  const pickupCode = schema?.additionalProperties?.find(
    (prop) => prop.name === 'pickupCode',
  )?.value;
  const sendingCode = schema?.additionalProperties?.find(
    (prop) => prop.name === 'sendingCode',
  )?.value;

  if (!phoneNumber && !carrierPhoneNumber && !pickupCode && !sendingCode) {
    return null;
  }

  return (
    <>
      {carrierPhoneNumber && (
        <CollectInfoStyled>
          <div>
            <OrderLabelStyled>{t('orderCarrierPhoneNumber')}</OrderLabelStyled>
            <br />
            <span>{carrierPhoneNumber}</span>
          </div>
        </CollectInfoStyled>
      )}
      {(phoneNumber || sendingCode || pickupCode) && (
        <CollectInfoStyled>
          {phoneNumber && (
            <div>
              <OrderLabelStyled>{t('orderPhoneNumber')}</OrderLabelStyled>
              <br />
              <span>{phoneNumber}</span>
            </div>
          )}
          {pickupCode && (
            <div>
              <OrderLabelStyled>{t('orderPickupCode')}</OrderLabelStyled>
              <br />
              <span>{pickupCode}</span>
            </div>
          )}
          {sendingCode && (
            <div>
              <OrderLabelStyled>{t('orderSendingCode')}</OrderLabelStyled>
              <br />
              <span>{sendingCode}</span>
            </div>
          )}
        </CollectInfoStyled>
      )}
    </>
  );
};

export default memo(AdditionalFields);
