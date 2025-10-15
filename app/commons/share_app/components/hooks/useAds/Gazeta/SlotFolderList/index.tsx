import { FC, memo } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

import { SLOT_FOLDER_LIST_ID } from '../constants';
import { isShowDesktopAds as isShowDesktopAdsSelector } from '../selectors';
import { SlotFolderListStyled } from './styles';

const SlotFolderList: FC = () => {
  const isShowAd = useSelector(isShowDesktopAdsSelector);

  return isShowAd ? (
    <SlotFolderListStyled>
      <div id={SLOT_FOLDER_LIST_ID} />
    </SlotFolderListStyled>
  ) : null;
};

export default memo(SlotFolderList);
