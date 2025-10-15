import useTranslations from 'commons/hooks/useTranslations';
import LoaderBouncingDots from 'commons/LoaderBouncing';
import { FC, memo } from 'commons/utils/react';

import {
  FetchingMessageDetailStyled,
  FetchingMessageLabelStyled,
  FetchingMessageStyled,
} from './styles';

interface Props {
  isShow?: boolean;
  label?: string;
}

const FetchingMessage: FC<Props> = ({ isShow, label }) => {
  const t = useTranslations();

  return (
    <FetchingMessageStyled>
      <FetchingMessageDetailStyled
        $isShow={isShow}
        aria-hidden={isShow ? 'false' : 'true'}
        data-cypress="LOADER-MESSAGE"
      >
        <FetchingMessageLabelStyled>
          {label || t('fetchingMessage')}
        </FetchingMessageLabelStyled>
        <LoaderBouncingDots color="primary" position="relative" size="sm" />
      </FetchingMessageDetailStyled>
    </FetchingMessageStyled>
  );
};

FetchingMessage.displayName = 'FetchingMessage';

export default memo(FetchingMessage);
