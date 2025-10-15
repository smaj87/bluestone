import useTranslations from 'commons/hooks/useTranslations';
import { FC, memo } from 'commons/utils/react';

import { FileExtensionStyled, FileNameStyled } from './styles';

interface Props {
  name: string;
}

export const FileNameWithExtension: FC<Props> = ({ name }) => {
  const t = useTranslations();

  const fileExtension = name.split('.').pop() || '';
  const fileName = name.slice(0, name.length - fileExtension.length);

  return (
    <>
      <FileNameStyled>{fileName || t('defaultFileName')}</FileNameStyled>
      <FileExtensionStyled>{fileExtension}</FileExtensionStyled>
    </>
  );
};

export default memo(FileNameWithExtension);
