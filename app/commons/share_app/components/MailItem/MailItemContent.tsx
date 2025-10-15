import { isMobile as isMobileSelector } from 'commons/hooks/useUserConfig/selectors';
import MobileLoader from 'commons/MobileLoader';
import {
  LIST_ITEM_SIZES,
  LIST_ITEM_SWIPE_CLASS,
} from 'commons/share_app/components/ListElements/List/constants';
import { ListItemSizes } from 'commons/share_app/components/ListElements/List/types';
import { FC, memo, useMemo } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

import { getMailListView } from 'containers/App/selectors';
import { FOLDER_SPAM_KEY } from 'containers/Folders/constants';
import { isFolderByKey } from 'containers/Folders/selectors';

import { MAIL_ITEM_VIEWS } from './constants';
import { MailItemContentDesktop } from './MailItemContentDesktop';
import { MailItemContentMobile } from './MailItemContentMobile';
import { MailItemContentStyled } from './styles';

interface Props {
  id: number;
}

const MailItemContent: FC<Props> = ({ id }) => {
  const view = useSelector(getMailListView);
  const isMobile = useSelector(isMobileSelector);
  const isSpam = useSelector(isFolderByKey, FOLDER_SPAM_KEY);

  const params = useMemo(() => JSON.stringify({ id }), [id]);
  const size = useMemo(() => {
    let result: ListItemSizes = LIST_ITEM_SIZES.MD;

    if (isMobile) {
      result = LIST_ITEM_SIZES.LG;
    } else if (view !== MAIL_ITEM_VIEWS.DETAIL) {
      result = LIST_ITEM_SIZES.SM;
    }

    return result;
  }, [isMobile, view]);

  return (
    <MailItemContentStyled
      $isSpam={isSpam}
      $size={size}
      className={LIST_ITEM_SWIPE_CLASS}
      data-params={params}
      role="button"
      tabIndex={0}
    >
      <MobileLoader
        desktop={<MailItemContentDesktop id={id} />}
        mobile={<MailItemContentMobile id={id} />}
      />
    </MailItemContentStyled>
  );
};

export default memo(MailItemContent);
