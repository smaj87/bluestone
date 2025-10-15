import { Email } from 'types';

import CopyButton from 'commons/CopyButton';
import useTranslations from 'commons/hooks/useTranslations';
import { FC, memo } from 'commons/utils/react';

import { getEmailText } from 'utils/mail';

import { DETAILED_LABEL_REPLY_TO_ID } from './constants';
import {
  DetailItemCellStyled,
  DetailItemLabelStyled,
  DetailItemStyled,
  DetailItemValuesListStyled,
  DetailItemValueStyled,
} from './styles';

interface Props {
  replyTo: Email | null;
}

const ReplyTo: FC<Props> = ({ replyTo }) => {
  const t = useTranslations();

  return replyTo ? (
    <DetailItemStyled $isMultiLine data-cypress="REPLY-ROW">
      <DetailItemLabelStyled
        data-cypress="REPLY-LABEL"
        htmlFor={DETAILED_LABEL_REPLY_TO_ID}
      >
        {t('replyTo')}:
      </DetailItemLabelStyled>
      <DetailItemValuesListStyled id={DETAILED_LABEL_REPLY_TO_ID}>
        <DetailItemValueStyled $grid="column">
          <DetailItemCellStyled data-cypress="REPLY-VALUE">
            {getEmailText(replyTo)}
          </DetailItemCellStyled>
          {replyTo?.email ? (
            <CopyButton size="sm" value={replyTo.email} />
          ) : null}
        </DetailItemValueStyled>
      </DetailItemValuesListStyled>
    </DetailItemStyled>
  ) : null;
};

export default memo(ReplyTo);
