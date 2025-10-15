import { getLang } from 'commons/hooks/useTranslations/selectors';
import { getMainAccount } from 'commons/hooks/useUserConfig/selectors';
import { getReceivers } from 'commons/share_app/containers/ReadMail/selectors';
import t from 'commons/translations/t';
import { ReactNode } from 'commons/utils/react';
import { createSelector } from 'commons/utils/reselect';

export const getToValue = createSelector(
  [getReceivers, getMainAccount, getLang],
  ({ mainReceiver, otherReceivers }, mailAccount) => {
    let result: string | ReactNode = '';
    let receiver = mainReceiver;
    let shift = 1;

    const isMany =
      (receiver.email && otherReceivers.length) || otherReceivers.length > 1;

    if (!receiver.email && otherReceivers?.[0]) {
      receiver = otherReceivers?.[0];
      shift = 0;
    }

    const isNoReceiver = !receiver.email && !receiver.name;

    if (isMany) {
      result = t('labelSendToMany', {
        value: otherReceivers.length + shift,
      });
    } else if (receiver.email === mailAccount || isNoReceiver) {
      result = `${t('to')} ${t('ReadMail/labelToMe')}`;
    } else if (!isNoReceiver) {
      result = t('labelSendTo', {
        value: receiver.email || receiver.name || '',
      });
    }

    return result;
  },
);
