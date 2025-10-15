import { isMobile as isMobileSelector } from 'commons/hooks/useUserConfig/selectors';
import MobileLoader from 'commons/MobileLoader';
import {
  LIST_ITEM_CLASS,
  LIST_ITEM_IS_UNSEEN_CLASS,
  LIST_ITEM_SIZES,
} from 'commons/share_app/components/ListElements/List/constants';
import { FC, memo, useCallback, useState } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

import { FOLDER_SPAM_KEY } from 'containers/Folders/constants';
import { isFolderByKey } from 'containers/Folders/selectors';

import { SlotFlatItemContentStyled, SlotFlatItemStyled } from '../styles';
import Content from './Content';
import Hooks from './Hooks';
import MobileContent from './MobileContent';
import { getProductValueByField } from './selectors';

const InboxFeed: FC = () => {
  const isSpam = useSelector(isFolderByKey, FOLDER_SPAM_KEY);
  const isMobile = useSelector(isMobileSelector);
  const url = useSelector(getProductValueByField, 'url') as string;
  const [isUnseen, setIsUnseen] = useState(true);

  const onClick = useCallback(() => {
    if (url) {
      setIsUnseen(false);
      window.open(url, '_blank');
    }
  }, [url]);

  return (
    <SlotFlatItemStyled
      className={`${LIST_ITEM_CLASS} ${isUnseen ? LIST_ITEM_IS_UNSEEN_CLASS : ''}`}
      data-cypress="INBOX-ROW"
    >
      <Hooks />
      {url ? (
        <SlotFlatItemContentStyled
          $isSpam={isSpam}
          $size={isMobile ? LIST_ITEM_SIZES.LG : LIST_ITEM_SIZES.MD}
          data-cypress="SLOT-INBOX-LINK"
          onClick={onClick}
          type="button"
        >
          <MobileLoader desktop={<Content />} mobile={<MobileContent />} />
        </SlotFlatItemContentStyled>
      ) : null}
    </SlotFlatItemStyled>
  );
};

export default memo(InboxFeed);
