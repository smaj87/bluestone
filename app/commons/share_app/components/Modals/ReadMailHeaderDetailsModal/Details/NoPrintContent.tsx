import useTranslations from 'commons/hooks/useTranslations';
import { getMailField } from 'commons/share_app/containers/ReadMail/selectors';
import { ReadMailParsed } from 'commons/share_app/containers/ReadMail/types';
import { FC, memo } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

import Size from 'components/Size';
import { isPrinting as isPrintingSelector } from 'containers/App/selectors';
import { getFolderName } from 'containers/Folders/selectors';

import Attachments from './Attachments';
import { DETAILED_LABEL_FOLDER_ID, DETAILED_LABEL_SIZE_ID } from './constants';
import DetailsItem from './DetailsItem';
import Images from './Images';
import Security from './Security';

const NoPrintContent: FC = () => {
  const t = useTranslations();

  const isPrinting = useSelector(isPrintingSelector);
  const fid = useSelector(getMailField, 'fid') as ReadMailParsed['fid'];
  const size = useSelector(getMailField, 'size') as ReadMailParsed['size'];
  const folderName = useSelector(getFolderName, fid);

  return !isPrinting ? (
    <>
      <DetailsItem
        cypressId="FOLDER"
        id={DETAILED_LABEL_FOLDER_ID}
        label={t('labelFolder')}
        value={folderName}
      />
      <DetailsItem
        cypressId="SIZE"
        id={DETAILED_LABEL_SIZE_ID}
        label={t('sizeLabel')}
        value={<Size bytes={size} />}
      />
      <Attachments />
      <Security />
      <Images />
    </>
  ) : null;
};

export default memo(NoPrintContent);
