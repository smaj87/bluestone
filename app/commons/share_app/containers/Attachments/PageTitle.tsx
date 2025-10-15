import useTranslations from 'commons/hooks/useTranslations';
import PageTitleComponent from 'commons/PageTitle';
import { AttachmentsRouterIsShowContext } from 'commons/share_app/components/RouterHelpers/constants';
import { FC, memo, useContext } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

import { getAttachmentsUrlProps } from 'containers/App/selectors';

const PageTitle: FC = () => {
  const t = useTranslations();
  const isShow = useContext(AttachmentsRouterIsShowContext);

  const group = useSelector(getAttachmentsUrlProps, 'groupName');

  const groupName = t('components/Lists/FolderList/ListAttachments/groupName', {
    groupName: `_${group}`,
  });

  return isShow ? (
    <PageTitleComponent
      title={t('containers/AttachmentsList/title', {
        host: process.env.HOST_NAME || '',
        groupName,
      })}
    />
  ) : null;
};

export default memo(PageTitle);
