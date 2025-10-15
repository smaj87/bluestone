import { isMobile as isMobileSelector } from 'commons/hooks/useUserConfig/selectors';
import { ATTACHMENT_ITEM_ID_PREFIX } from 'commons/share_app/components/AttachmentItem/constants';
import {
  LIST_ITEM_CLASS,
  LIST_ITEM_SWIPE_CLASS,
} from 'commons/share_app/components/ListElements/List/constants';
import { setHoverId } from 'commons/share_app/containers/Attachments/actions';
import { isHoverById } from 'commons/share_app/containers/Attachments/selectors';
import { FC, memo, useCallback, useMemo, useRef } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';
import { dispatch } from 'commons/utils/store';

import AttachmentActions from './AttachmentActions';
import AttachmentCheckButton from './AttachmentCheckButton';
import AttachmentData from './AttachmentData';
import CheckedHandler from './CheckedHandler';
import HoverHandler from './HoverHandler';
import IntersectionLoader from './IntersectionLoader';
import {
  AttachmentItemCheckStyled,
  AttachmentItemStyled,
  AttchmentItemContentStyled,
} from './styles';

interface Props {
  id: string;
}

const AttachmentItem: FC<Props> = ({ id }) => {
  const itemRef = useRef<HTMLLIElement>();
  const isMobile = useSelector(isMobileSelector);
  const isHover = useSelector(isHoverById, id);

  const onMouseEnter = useCallback(() => {
    dispatch(setHoverId(id));
  }, [id]);

  const onMouseLeave = useCallback(() => {
    dispatch(setHoverId(id, true));
  }, [id]);

  const params = useMemo(() => JSON.stringify({ id }), [id]);

  return (
    <AttachmentItemStyled
      // @ts-ignore todo!!! @spiascik
      ref={itemRef}
      className={LIST_ITEM_CLASS}
      id={`${ATTACHMENT_ITEM_ID_PREFIX}_${id}`}
      onMouseEnter={isMobile ? undefined : onMouseEnter}
      onMouseLeave={isMobile ? undefined : onMouseLeave}
    >
      <AttchmentItemContentStyled
        className={LIST_ITEM_SWIPE_CLASS}
        data-params={params}
        role="button"
        tabIndex={0}
      >
        <AttachmentItemCheckStyled>
          <AttachmentCheckButton id={id} />
          <IntersectionLoader
            Component={<CheckedHandler id={id} itemRef={itemRef} />}
            id={id}
          />
        </AttachmentItemCheckStyled>
        <AttachmentData id={id} />
        {isHover ? <AttachmentActions id={id} /> : null}
      </AttchmentItemContentStyled>
      <IntersectionLoader
        Component={<HoverHandler id={id} itemRef={itemRef} />}
        id={id}
      />
    </AttachmentItemStyled>
  );
};

export default memo(AttachmentItem);
