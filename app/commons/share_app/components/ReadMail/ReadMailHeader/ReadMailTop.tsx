import { getMailField } from 'commons/share_app/containers/ReadMail/selectors';
import { FC, memo } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

import ButtonFavourite from './ButtonFavourite';
import { ReadMailTopStyled } from './styles';

const ReadMailTop: FC = () => (
  <ReadMailTopStyled data-cypress="READMAIL-TOP">
    <h2 data-cypress="MAIL-SUBJECT">{useSelector(getMailField, 'subject')}</h2>
    <ButtonFavourite />
  </ReadMailTopStyled>
);

export default memo(ReadMailTop);
