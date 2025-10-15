import { CARRIERS } from '../constants';
import { Carrier, Order } from '../types';

export const getCarrierUniqueName = (
  schema: Order['schema'],
): Carrier | null => {
  if (schema?.carrier?.name) {
    const carrierNameLower = schema.carrier.name.toLowerCase();
    const foundCarrier = CARRIERS.find((carrier) =>
      carrierNameLower.includes(carrier),
    );
    return foundCarrier ?? null;
  }

  return null;
};

export const getTrackingUrl = (schema: Order['schema']): string | null => {
  const normalizedCarrierName = getCarrierUniqueName(schema);
  const trackingNumber = schema?.trackingNumber;

  if (!trackingNumber || !normalizedCarrierName) {
    return null;
  }

  switch (normalizedCarrierName) {
    case 'allegro':
      return `https://allegro.pl/allegrodelivery/sledzenie-paczki?numer=${trackingNumber}`;
    case 'inpost':
      return `https://inpost.pl/sledzenie-przesylek?number=${trackingNumber}`;
    case 'dpd':
      return `https://tracktrace.dpd.com.pl/parcelDetails?p1=${trackingNumber}`;
    case 'orlen':
      return `https://www.orlenpaczka.pl/sledz-paczke/?numer=${trackingNumber}`;
    case 'poczta':
      return `https://emonitoring.poczta-polska.pl/?numer=${trackingNumber}`;
    case 'gls':
      return `https://gls-group.eu/PL/pl/sledzenie-paczek?match=${trackingNumber}`;
    case 'fedex':
      return `https://www.fedex.com/pl-pl/online/domestic-tracking.html#/preview?packages=${trackingNumber}&trackingKey=${trackingNumber}`;
    case 'ups':
      return `https://www.ups.com/track?loc=pl_PL&Requester=SBN&tracknum=${trackingNumber}`;
    case 'pocztex':
      return `https://www.pocztex.pl/sledzenie-przesylek/?numer=${trackingNumber}`;
    case 'dhl':
      return `https://sprawdz.dhl.com.pl/szukaj.aspx?sn=${trackingNumber}&m=0`;
    case 'meest':
      return `https://www.meestpost.com/pl/tracking?trackingNumber=${trackingNumber}`;
    case 'hellmann':
      return `https://info.hwl.pl/tt/?searchKey=${trackingNumber}`;
    case 'geis':
      return `https://www.geis.pl/pl/sledzenie-przesylki?packNumber=${trackingNumber}`;
    case 'ambro':
      return `https://ambroexpress.pl/sledzenie-przesylek#${trackingNumber}`;
    case 'raben':
    case 'rohling':
    case 'erontrans':
    case 'rhenus':
    default:
      return null;
  }
};
