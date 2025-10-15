import useTranslations from 'commons/hooks/useTranslations';
import PageTitleComponent from 'commons/PageTitle';
import { MailsRouterIsShowContext } from 'commons/share_app/components/RouterHelpers/constants';
import { FC, memo, useContext } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

import { getActiveFolder } from 'containers/Folders/selectors';

const PageTitle: FC = () => {
  const t = useTranslations();
  const isShow = useContext(MailsRouterIsShowContext);

  const folder = useSelector(getActiveFolder);

  const unread = folder?.unread ? `(${folder?.unread}) ` : '';
  const name = folder?.name ? `${folder?.name} - ` : '';

  return isShow ? (
    <PageTitleComponent
      title={t('containers/MailList/title', {
        folderInfo: `${unread}${name}`,
        host: process.env.HOST_NAME!,
      })}
    />
  ) : null;
};

export default memo(PageTitle);
