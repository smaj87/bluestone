import PageTitleParent from 'commons/PageTitle';
import { OrdersRouterIsShowContext } from 'commons/share_app/components/RouterHelpers/constants';
import { PAGE_NAME } from 'commons/share_app/containers/Orders/constants';
import { FC, memo, useContext } from 'commons/utils/react';

const PageTitle: FC = () => {
  const isShow = useContext(OrdersRouterIsShowContext);

  return isShow ? (
    <PageTitleParent
      title={`${PAGE_NAME} - Poczta w ${process.env.HOST_NAME!}`}
    />
  ) : null;
};

export default memo(PageTitle);
