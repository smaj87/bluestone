import useTranslations from 'commons/hooks/useTranslations';
import { FC, memo, useCallback } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';
import { dispatch } from 'commons/utils/store';

import { setIsShowMore } from '../actions';
import { isShowMoreButtonVisible } from '../selectors';
import { ShowMoreButtonStyled } from './styles';

const ShowMoreButton: FC = () => {
  const t = useTranslations();

  const isShow = useSelector(isShowMoreButtonVisible);

  const onClick = useCallback(() => dispatch(setIsShowMore(true)), []);

  return isShow ? (
    <ShowMoreButtonStyled label={t('ctaShowOthers')} onClick={onClick} />
  ) : null;
};

export default memo(ShowMoreButton);
