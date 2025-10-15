import Badge from 'commons/Badge';
import useTranslations from 'commons/hooks/useTranslations';
import MobileLoader from 'commons/MobileLoader';
import { ListItemAreaContentStyled } from 'commons/share_app/components/ListElements/List/styles';
import { VISUALLY_HIDDEN_CLASS } from 'commons/utils/classNames';
import { FC, memo } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

import { getFolderName } from 'containers/Folders/selectors';

import { MailFolderStyled } from './styles';

interface Props {
  fid: number;
}

const MailFolder: FC<Props> = ({ fid }) => {
  const t = useTranslations();
  const folderName = useSelector(getFolderName, fid);

  return (
    <MailFolderStyled>
      <ListItemAreaContentStyled>
        <span className={VISUALLY_HIDDEN_CLASS}>{t('labelFolder')}:</span>
        <MobileLoader
          desktop={<>{folderName}</>}
          mobile={<Badge color="primary" label={folderName} size="sm" />}
        />
      </ListItemAreaContentStyled>
    </MailFolderStyled>
  );
};

export default memo(MailFolder);
