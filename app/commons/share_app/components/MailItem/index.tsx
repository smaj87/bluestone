import { isMobile as isMobileSelector } from 'commons/hooks/useUserConfig/selectors';
import { LIST_ITEM_CLASS } from 'commons/share_app/components/ListElements/List/constants';
import MailItemContent from 'commons/share_app/components/MailItem/MailItemContent';
import { setHoverId } from 'commons/share_app/containers/Mails/actions';
import { FC, memo, useCallback, useRef } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';
import { dispatch } from 'commons/utils/store';

import { ItemRefContext, MAIL_ITEM_ID_PREFIX } from './constants';
import { MailItemStyled } from './styles';

interface Props {
  id: number;
}

const MailItem: FC<Props> = ({ id }) => {
  const itemRef = useRef<HTMLLIElement>(null);
  const isMobile = useSelector(isMobileSelector);

  const onMouseEnter = useCallback(() => {
    dispatch(setHoverId(id));
  }, [id]);

  const onMouseLeave = useCallback(() => {
    dispatch(setHoverId(id, true));
  }, [id]);

  // @ts-ignore
  return (
    <MailItemStyled
      // @ts-ignore todo!!! @spiascik
      ref={itemRef}
      className={LIST_ITEM_CLASS}
      id={`${MAIL_ITEM_ID_PREFIX}_${id}`}
      onMouseEnter={isMobile ? undefined : onMouseEnter}
      onMouseLeave={isMobile ? undefined : onMouseLeave}
    >
      <ItemRefContext.Provider value={itemRef}>
        <MailItemContent id={id} />
      </ItemRefContext.Provider>
    </MailItemStyled>
  );
};

export default memo(MailItem);
