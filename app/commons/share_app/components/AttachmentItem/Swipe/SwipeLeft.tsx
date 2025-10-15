import { Props } from 'commons/hooks/useListItemSwipe/Swipe';
import AttachmentActions from 'commons/share_app/components/AttachmentItem/AttachmentActions';
import { SwipeLeftStyled } from 'commons/share_app/components/Swipe/styles';
import { FC, memo } from 'commons/utils/react';

import { SWIPE_WIDTH_CSS } from './constants';

const SwipeLeft: FC<Props> = ({ itemParams }) => (
  <SwipeLeftStyled $bg="secondary" data-width={SWIPE_WIDTH_CSS}>
    <AttachmentActions id={itemParams.id} prefix="SwipeLeft" />
  </SwipeLeftStyled>
);

export default memo(SwipeLeft);
