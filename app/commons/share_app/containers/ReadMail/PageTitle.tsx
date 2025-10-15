import useTranslations from 'commons/hooks/useTranslations';
import PageTitleComponent from 'commons/PageTitle';
import { ReadMailRouterIsShowContext } from 'commons/share_app/components/RouterHelpers/constants';
import { getMailField } from 'commons/share_app/containers/ReadMail/selectors';
import { ReadMailParsed } from 'commons/share_app/containers/ReadMail/types';
import { FC, memo, useContext } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

const PageTitle: FC = () => {
  const t = useTranslations();
  const isShow = useContext(ReadMailRouterIsShowContext);

  const subject =
    (useSelector(getMailField, 'subject') as ReadMailParsed['subject']) || '';

  const host = process.env.HOST_NAME!;
  const title = t('ReadMail/title', {
    host,
    subject,
  });
  const defaultTitle = t('ReadMail/defaultTitle', {
    host,
  });

  return isShow ? (
    <PageTitleComponent title={subject ? title : defaultTitle} />
  ) : null;
};

export default memo(PageTitle);
