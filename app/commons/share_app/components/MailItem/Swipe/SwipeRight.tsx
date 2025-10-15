import { Props } from 'commons/hooks/useListItemSwipe/Swipe';
import MailActionsContent from 'commons/share_app/components/MailItem/MailActions/Content';
import { SwipeRightStyled } from 'commons/share_app/components/Swipe/styles';
import { FC, memo } from 'commons/utils/react';

import { SWIPE_WIDTH_CSS } from './constants';

const SwipeRight: FC<Props> = ({ itemParams }) => (
  <SwipeRightStyled $bg="secondary" data-width={SWIPE_WIDTH_CSS}>
    <MailActionsContent id={itemParams.id} prefix="SwipeRight" />
  </SwipeRightStyled>
);

export default memo(SwipeRight);
