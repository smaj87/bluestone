import CopyButton from 'commons/CopyButton';
import useTranslations from 'commons/hooks/useTranslations';
import { FC, memo } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

import { isPrinting as isPrintingSelector } from 'containers/App/selectors';
import { getEmailText } from 'utils/mail';

import { DETAILED_LABEL_RECEIVERS_ID } from './constants';
import {
  DetailItemCellStyled,
  DetailItemLabelStyled,
  DetailItemStyled,
  DetailItemValuesListStyled,
  DetailItemValueStyled,
} from './styles';

interface Receiver {
  name: string;
  email: string;
}

interface Props {
  mainReceiver: Receiver;
  otherReceivers: Receiver[];
}

const Receivers: FC<Props> = ({ mainReceiver, otherReceivers }) => {
  const t = useTranslations();
  const isPrinting = useSelector(isPrintingSelector);

  return (
    <DetailItemStyled $isMultiLine data-cypress="RECEIVER-ROW">
      <DetailItemLabelStyled
        data-cypress="RECEIVER-LABEL"
        htmlFor={DETAILED_LABEL_RECEIVERS_ID}
      >
        {t('containers/NewMail/labelByField', { field: '_to' })}:
      </DetailItemLabelStyled>
      <DetailItemValuesListStyled id={DETAILED_LABEL_RECEIVERS_ID} role="list">
        <DetailItemValueStyled $grid="column" role="listitem">
          <DetailItemCellStyled data-cypress="RECEIVER-MAIN-VALUE">
            {getEmailText(mainReceiver)}
          </DetailItemCellStyled>
          {!isPrinting && mainReceiver?.email ? (
            <CopyButton size="sm" value={mainReceiver.email} />
          ) : null}
        </DetailItemValueStyled>
        {otherReceivers.map((receiver) => (
          <DetailItemValueStyled
            key={receiver.email}
            $grid="column"
            role="listitem"
          >
            <DetailItemCellStyled data-cypress="RECEIVER-VALUE">
              {getEmailText(receiver)}
            </DetailItemCellStyled>
            {!isPrinting && receiver?.email ? (
              <CopyButton size="sm" value={receiver.email} />
            ) : null}
          </DetailItemValueStyled>
        ))}
      </DetailItemValuesListStyled>
    </DetailItemStyled>
  );
};

Receivers.displayName = 'Receivers';

export default memo(Receivers);
