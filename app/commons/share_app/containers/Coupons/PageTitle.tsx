import useTranslations from 'commons/hooks/useTranslations';
import PageTitleParent from 'commons/PageTitle';
import { CouponsRouterIsShowContext } from 'commons/share_app/components/RouterHelpers/constants';
import { FC, memo, useContext } from 'commons/utils/react';

const PageTitle: FC = () => {
  const t = useTranslations();
  const isShow = useContext(CouponsRouterIsShowContext);

  return isShow ? (
    <PageTitleParent
      title={`${t('coupons')} - Poczta w ${process.env.HOST_NAME!}`}
    />
  ) : null;
};

export default memo(PageTitle);
