import Button from 'commons/Button';
import {
  ComponentStateActionItemStyled,
  ComponentStateActionsStyled,
} from 'commons/ComponentState/styles';
import ErrorPage from 'commons/ErrorPage';
import useTranslations from 'commons/hooks/useTranslations';
import { FC, memo } from 'commons/utils/react';

interface Props {
  onRetry: () => void;
}

const ReadMailErrorPage: FC<Props> = ({ onRetry }) => {
  const t = useTranslations();

  return (
    <ErrorPage title={t('readMailContentFetchingError')}>
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

export default memo(ReadMailErrorPage);
