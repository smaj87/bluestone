import CopyButton from 'commons/CopyButton';
import useTranslations from 'commons/hooks/useTranslations';
import { getMailField } from 'commons/share_app/containers/ReadMail/selectors';
import { ReadMailParsed } from 'commons/share_app/containers/ReadMail/types';
import { FC, memo } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

import { isPrinting as isPrintingSelector } from 'containers/App/selectors';
import { getEmailText } from 'utils/mail';

import { DETAILED_LABEL_SENDER_ID } from './constants';
import {
  DetailItemCellStyled,
  DetailItemLabelStyled,
  DetailItemStyled,
  DetailItemValuesListStyled,
  DetailItemValueStyled,
} from './styles';

const Sender: FC = () => {
  const t = useTranslations();

  const isPrinting = useSelector(isPrintingSelector);
  const from = useSelector(getMailField, 'from') as ReadMailParsed['from'];

  return (
    <DetailItemStyled $isMultiLine data-cypress="SENDER-ROW">
      <DetailItemLabelStyled
        data-cypress="SENDER-LABEL"
        htmlFor={DETAILED_LABEL_SENDER_ID}
      >
        {t('containers/NewMail/labelByField', { field: '_From' })}:
      </DetailItemLabelStyled>
      <DetailItemValuesListStyled id={DETAILED_LABEL_SENDER_ID}>
        <DetailItemValueStyled $grid="column">
          <DetailItemCellStyled data-cypress="SENDER-VALUE">
            {getEmailText(from)}
          </DetailItemCellStyled>
          {!isPrinting && from?.email ? (
            <CopyButton size="sm" value={from.email} />
          ) : null}
        </DetailItemValueStyled>
      </DetailItemValuesListStyled>
    </DetailItemStyled>
  );
};

Sender.displayName = 'Sender';

export default memo(Sender);
