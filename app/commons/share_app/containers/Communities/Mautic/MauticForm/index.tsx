import ErrorPage from 'commons/ErrorPage';
import useTranslations from 'commons/hooks/useTranslations';
import LoaderBouncingDots from 'commons/LoaderBouncing';
import { FC, memo, ReactText } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

import useFetchForm from './hooks/useFetchForm';
import MauticFormContent from './MauticFormContent';
import { getForm, getIsFetching, getIsFetchingError } from './selectors';
import { FormValues } from './types';

interface Props {
  formId: ReactText;
  hiddenValues?: FormValues;
  onSubmit?: VoidFunction;
}

const MauticForm: FC<Props> = ({ formId, hiddenValues, onSubmit }) => {
  useFetchForm(formId, hiddenValues);

  const t = useTranslations();

  const form = useSelector(getForm);
  const isFetching = useSelector(getIsFetching);
  const isError = useSelector(getIsFetchingError);

  if (isFetching) {
    return <LoaderBouncingDots color="primary" position="relative" size="sm" />;
  }

  if (isError || form?.isPublished === false) {
    return <ErrorPage color="error" title={t('mauticFormNotPublished')} />;
  }

  if (form) {
    return (
      <MauticFormContent
        form={form}
        hiddenValues={hiddenValues}
        onSubmit={onSubmit}
      />
    );
  }

  return null;
};

export default memo(MauticForm);
