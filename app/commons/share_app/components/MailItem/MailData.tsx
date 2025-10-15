import useTranslations from 'commons/hooks/useTranslations';
import { getMailById } from 'commons/share_app/containers/Mails/selectors';
import { FC, memo } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

import { getMailListView } from 'containers/App/selectors';

import MailActionFlags from './MailActionFlags';
import MailAttachment from './MailAttachment';
import MailDate from './MailDate';
import MailFolder from './MailFolder';
import MailFrom from './MailFrom';
import MailItemLabelNew from './MailItemLabelNew';
import MailSnippet from './MailSnippet';
import MailSubject from './MailSubject';
import {
  MailDataContentStyled,
  MailDataContentTopStyled,
  MailDataStyled,
  MailDetailsStyled,
} from './styles';
import useIsFolderShow from './useIsFolderShow';

interface Props {
  id: number;
}

const MailData: FC<Props> = ({ id }) => {
  const t = useTranslations();

  const view = useSelector(getMailListView);
  const mail = useSelector(getMailById, id);
  const isFolderShow = useIsFolderShow();

  return (
    <MailDataStyled $isFolderShow={isFolderShow}>
      <MailDataContentStyled>
        <MailDataContentTopStyled>
          <MailAttachment id={id} />
          <MailActionFlags id={id} />
          <MailFrom from={mail?.from} to={mail?.to} />
          <MailItemLabelNew id={id} />
        </MailDataContentTopStyled>
        <MailDetailsStyled $view={view}>
          <MailSubject subject={mail?.subject || t('noSubject')} />
          <MailSnippet id={id} snippet={mail?.snippet || ''} />
        </MailDetailsStyled>
        <MailDate stringDate={mail?.sent_date || ''} />
      </MailDataContentStyled>
      {isFolderShow ? <MailFolder fid={mail.fid} /> : null}
    </MailDataStyled>
  );
};

export default memo(MailData);
