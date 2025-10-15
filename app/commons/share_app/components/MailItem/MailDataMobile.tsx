import useTranslations from 'commons/hooks/useTranslations';
import { getMailById } from 'commons/share_app/containers/Mails/selectors';
import { FC, memo } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

import { FOLDER_SPAM_KEY } from 'containers/Folders/constants';
import { isFolderByKey } from 'containers/Folders/selectors';

import ButtonFavourite from './ButtonFavourite';
import MailActionFlags from './MailActionFlags';
import MailAttachment from './MailAttachment';
import MailDate from './MailDate';
import MailFolder from './MailFolder';
import MailFrom from './MailFrom';
import MailItemLabelNew from './MailItemLabelNew';
import MailSnippet from './MailSnippet';
import MailSubject from './MailSubject';
import {
  MailDataContentBottomRowStyled,
  MailDataContentBottomStyled,
  MailDataContentTopStyled,
  MailDataMobileStyled,
  MailItemFavStyled,
} from './styles';
import useIsFolderShow from './useIsFolderShow';

interface Props {
  id: number;
}

const MailDataMobile: FC<Props> = ({ id }) => {
  const t = useTranslations();

  const mail = useSelector(getMailById, id);
  const isFolderShow = useIsFolderShow();
  const isSpam = useSelector(isFolderByKey, FOLDER_SPAM_KEY);

  return (
    <MailDataMobileStyled>
      <MailDataContentTopStyled>
        <MailAttachment id={id} />
        <MailActionFlags id={id} />
        <MailFrom from={mail?.from} to={mail?.to} />
        <MailItemLabelNew id={id} />
        <MailDate stringDate={mail?.sent_date || ''} />
      </MailDataContentTopStyled>
      <MailDataContentBottomStyled>
        <MailSubject subject={mail?.subject || t('noSubject')} />
        <MailDataContentBottomRowStyled>
          <MailSnippet id={id} snippet={mail?.snippet || ''} />
          {isFolderShow ? <MailFolder fid={mail.fid} /> : null}
        </MailDataContentBottomRowStyled>
        <MailItemFavStyled>
          {!isSpam ? <ButtonFavourite id={id} /> : null}
        </MailItemFavStyled>
      </MailDataContentBottomStyled>
    </MailDataMobileStyled>
  );
};

export default memo(MailDataMobile);
