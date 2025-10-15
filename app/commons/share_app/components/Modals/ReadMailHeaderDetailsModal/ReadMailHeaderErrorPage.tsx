import Button from 'commons/Button';
import {
  ComponentStateActionItemStyled,
  ComponentStateActionsStyled,
} from 'commons/ComponentState/styles';
import ErrorPage from 'commons/ErrorPage';
import useTranslations from 'commons/hooks/useTranslations';
import { fetchHeaders } from 'commons/share_app/containers/ReadMail/actions';
import { getMailField } from 'commons/share_app/containers/ReadMail/selectors';
import { ReadMailParsed } from 'commons/share_app/containers/ReadMail/types';
import { FC, memo, useCallback } from 'commons/utils/react';
import { getStateValueBySelector } from 'commons/utils/react-redux';
import { dispatch } from 'commons/utils/store';

const ReadMailHeaderErrorPage: FC = () => {
  const t = useTranslations();

  const onRetry = useCallback(() => {
    dispatch(
      fetchHeaders(
        getStateValueBySelector(getMailField, 'mid') as ReadMailParsed['mid'],
      ),
    );
  }, []);

  return (
    <ErrorPage size="md" title={t('readMailContentFetchingError')}>
      <ComponentStateActionsStyled role="group">
        <ComponentStateActionItemStyled>
          <Button
            color="secondary"
            icon="refresh"
            label={t('ctaRetry')}
            onClick={onRetry}
            shape="full"
            size="md"
          />
        </ComponentStateActionItemStyled>
      </ComponentStateActionsStyled>
    </ErrorPage>
  );
};

export default memo(ReadMailHeaderErrorPage);
