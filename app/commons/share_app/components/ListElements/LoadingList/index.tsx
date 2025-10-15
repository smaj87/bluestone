import useTranslations from 'commons/hooks/useTranslations';
import LoaderBouncing from 'commons/LoaderBouncing';
import {
  ListStatusMediaStyled,
  ListStatusStyled,
  ListStatusTextStyled,
} from 'commons/share_app/components/ListElements/ListStatus/styles';
import { FC, memo } from 'commons/utils/react';

const LoadingList: FC = () => {
  const t = useTranslations();

  return (
    <ListStatusStyled $status="default" aria-live="polite" role="status">
      <ListStatusMediaStyled>
        <LoaderBouncing size="md" />
      </ListStatusMediaStyled>
      <ListStatusTextStyled>
        <p>{t('isFetching')}</p>
      </ListStatusTextStyled>
    </ListStatusStyled>
  );
};

export default memo(LoadingList);
