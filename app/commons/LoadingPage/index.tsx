import {
  ComponentStateImageStyled,
  ComponentStateStyled,
} from 'commons/ComponentState/styles';
import {
  ComponentStateSize,
  ComponentStateStretch,
} from 'commons/ComponentState/types';
import useTranslations from 'commons/hooks/useTranslations';
import LoaderBouncing from 'commons/LoaderBouncing';
import { FC, memo } from 'commons/utils/react';

interface Props {
  stretch?: ComponentStateStretch;
  size?: ComponentStateSize;
}

const LoadingPage: FC<Props> = ({ size, stretch }) => {
  const t = useTranslations();

  return (
    <ComponentStateStyled $size={size} $stretch={stretch}>
      <ComponentStateImageStyled $size={size}>
        <LoaderBouncing size={size} />
      </ComponentStateImageStyled>
      <h2>{t('isFetching')}</h2>
    </ComponentStateStyled>
  );
};

export default memo(LoadingPage);
