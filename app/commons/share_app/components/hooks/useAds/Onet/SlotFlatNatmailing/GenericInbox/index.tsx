import { isMobile as isMobileSelector } from 'commons/hooks/useUserConfig/selectors';
import MobileLoader from 'commons/MobileLoader';
import {
  LIST_ITEM_CLASS,
  LIST_ITEM_IS_UNSEEN_CLASS,
  LIST_ITEM_SIZES,
} from 'commons/share_app/components/ListElements/List/constants';
import { INBOX_URL_NAME } from 'commons/share_app/containers/InboxMail/constants';
import { FC, useCallback, useMemo, useState } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';
import { historyPush } from 'commons/utils/route';

import { FOLDER_SPAM_KEY } from 'containers/Folders/constants';
import { isFolderByKey } from 'containers/Folders/selectors';

import { SlotFlatItemContentStyled, SlotFlatItemStyled } from '../styles';
import Content from './Content';
import MobileContent from './MobileContent';

const GenericInbox: FC = () => {
  const isSpam = useSelector(isFolderByKey, FOLDER_SPAM_KEY);
  const isMobile = useSelector(isMobileSelector);
  const [isUnseen, setIsUnseen] = useState(true);

  const onClick = useCallback(() => {
    setIsUnseen(false);
    historyPush(`/${INBOX_URL_NAME}`);
  }, []);

  const extraClasses = useMemo(() => {
    let classes = '';

    if (isUnseen) {
      classes = `${classes} ${LIST_ITEM_IS_UNSEEN_CLASS}`;
    }

    return classes;
  }, [isUnseen]);

  return (
    <SlotFlatItemStyled
      className={`${LIST_ITEM_CLASS} ${extraClasses}`}
      data-cypress="INBOX-ROW"
    >
      <SlotFlatItemContentStyled
        $isSpam={isSpam}
        $size={isMobile ? LIST_ITEM_SIZES.LG : LIST_ITEM_SIZES.MD}
        data-cypress="SLOT-INBOX-LINK"
        onClick={onClick}
      >
        <MobileLoader desktop={<Content />} mobile={<MobileContent />} />
      </SlotFlatItemContentStyled>
    </SlotFlatItemStyled>
  );
};

export default GenericInbox;
