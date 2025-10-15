import BottomActionButtons from 'commons/BottomActionButtons';
import Button from 'commons/Button';
import EmptyPage from 'commons/EmptyPage';
import ErrorPage from 'commons/ErrorPage';
import useTranslations from 'commons/hooks/useTranslations';
import LoadingPage from 'commons/LoadingPage';
import MobileLoader from 'commons/MobileLoader';
import MailsListNavToolbar from 'commons/share_app/components/MailsListNavToolbar';
import OrdersItem from 'commons/share_app/containers/Orders/OrdersItem';
import {
  getSingleOrder,
  isFetchedSingleOrder,
  isFetchingErrorSingleOrder,
} from 'commons/share_app/containers/Orders/selectors';
import { FC, memo, useCallback } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';
import { dispatch } from 'commons/utils/store';

import { goBack } from 'containers/App/actions';

import OrderEditMenu from '../../Orders/OrderEditMenu';

const SingleOrderContent: FC = () => {
  const t = useTranslations();

  const order = useSelector(getSingleOrder);
  const isFetched = useSelector(isFetchedSingleOrder);
  const isFetchingError = useSelector(isFetchingErrorSingleOrder);

  const onClick = useCallback(() => {
    dispatch(goBack());
  }, []);

  if (isFetchingError) {
    return (
      <ErrorPage
        color="error"
        label={t('orderBackToList')}
        onClick={onClick}
        title={t('orderError')}
      />
    );
  }

  if (!isFetched) {
    return <LoadingPage />;
  }

  if (!order) {
    return (
      <EmptyPage
        icon="bell"
        size="md"
        stretch="full"
        title={t('orderNotFound')}
      >
        <Button
          color="primary"
          label={t('orderBackToList')}
          onClick={onClick}
          size="md"
        />
      </EmptyPage>
    );
  }

  return (
    <>
      <OrdersItem
        key={order.id}
        id={order.id}
        orderDate={order.orderDate}
        schema={order.schema}
        status={order.status}
      />
      <OrderEditMenu />
      <MobileLoader mobile={<MailsListNavToolbar />} />
      <BottomActionButtons isBottomNav />
    </>
  );
};

export default memo(SingleOrderContent);
