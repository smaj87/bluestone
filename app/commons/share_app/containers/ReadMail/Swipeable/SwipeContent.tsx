import useTranslations from 'commons/hooks/useTranslations';
import { getMidByType } from 'commons/share_app/containers/ReadMail/selectors';
import { FC, memo } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

import {
  IconSwipeDetail,
  SwipeContentStyled,
  SwipeLabelStyled,
} from './styles';

interface Props {
  isNext?: boolean;
}

const SwipeContent: FC<Props> = ({ isNext = false }) => {
  const t = useTranslations();

  const prevMid = useSelector(getMidByType, 'prev');
  const nextMid = useSelector(getMidByType, 'next');

  const isNextFlag = isNext && nextMid > 0;
  const isPrevFlag = !isNext && prevMid > 0;

  let label = '';

  if (isNext) {
    label = isNextFlag
      ? t('ctaNextMailShort')
      : t('ReadMail/Swipeable/emptyNextContent');
  } else {
    label = isPrevFlag
      ? t('ctaPrevMailShort')
      : t('ReadMail/Swipeable/emptyPrevContent');
  }

  return (
    <SwipeContentStyled $isNext={isNext}>
      {isNextFlag || isPrevFlag ? (
        <IconSwipeDetail $image={isNext ? 'chevronLeft' : 'chevronRight'} />
      ) : null}
      <SwipeLabelStyled>{label}</SwipeLabelStyled>
    </SwipeContentStyled>
  );
};

export default memo(SwipeContent);
