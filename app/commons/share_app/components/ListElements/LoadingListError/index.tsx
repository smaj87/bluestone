import useTranslations from 'commons/hooks/useTranslations';
import {
  ListStatusButton,
  ListStatusIcon,
  ListStatusMediaStyled,
  ListStatusStyled,
  ListStatusTextStyled,
} from 'commons/share_app/components/ListElements/ListStatus/styles';
import { FC, memo, useCallback } from 'commons/utils/react';

interface Props {
  onRetry: () => void;
  text: string;
}

const LoadingListError: FC<Props> = ({ onRetry, text }) => {
  const t = useTranslations();

  const onRetryFunc = useCallback(() => {
    onRetry();
  }, [onRetry]);

  return (
    <ListStatusStyled $status="error" aria-live="polite" role="status">
      <ListStatusMediaStyled>
        <ListStatusIcon $image="errorCircle" />
      </ListStatusMediaStyled>
      <ListStatusTextStyled>
        <p>{text}</p>
        <ListStatusButton label={t('ctaRetry')} onClick={onRetryFunc} />
      </ListStatusTextStyled>
    </ListStatusStyled>
  );
};

export default memo(LoadingListError);
