import useTranslations from 'commons/hooks/useTranslations';
import { FC, memo, useCallback } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';
import { dispatch } from 'commons/utils/store';

import { setIsShowMore } from '../actions';
import { isShowLessButtonVisible } from '../selectors';
import { ShowMoreButtonStyled } from './styles';

const ShowLessButton: FC = () => {
  const t = useTranslations();

  const isShow = useSelector(isShowLessButtonVisible);

  const onClick = useCallback(() => dispatch(setIsShowMore(false)), []);

  return isShow ? (
    <ShowMoreButtonStyled label={t('ctaHideOthers')} onClick={onClick} />
  ) : null;
};

export default memo(ShowLessButton);
