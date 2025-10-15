import { Email } from 'types';

import useTranslations from 'commons/hooks/useTranslations';
import MobileLoader from 'commons/MobileLoader';
import { ListItemAreaContentStyled } from 'commons/share_app/components/ListElements/List/styles';
import { isTo as isToSelector } from 'commons/share_app/containers/Mails/selectors';
import { FC, memo } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

import TooltipFrom from 'components/Tooltips/TooltipFrom';

import HighlightSearchText from './HighlightSearchText';
import { MailFromStyled } from './styles';

interface Props {
  from: Email;
  to: Email;
}

const MailFrom: FC<Props> = ({ from, to }) => {
  const t = useTranslations();
  const isTo = useSelector(isToSelector);

  const value = isTo ? to : from;
  const emptyValue = isTo ? t('noRecipient') : t('noSender');
  const isNameAndEmail = value?.name && value?.email;

  const fromValue = (
    <ListItemAreaContentStyled>
      <HighlightSearchText value={value?.name || value?.email || emptyValue} />
    </ListItemAreaContentStyled>
  );

  return (
    <MailFromStyled>
      <MobileLoader
        desktop={
          isNameAndEmail ? (
            <TooltipFrom emptyValue={emptyValue} value={value} />
          ) : (
            fromValue
          )
        }
        mobile={fromValue}
      />
    </MailFromStyled>
  );
};

export default memo(MailFrom);
