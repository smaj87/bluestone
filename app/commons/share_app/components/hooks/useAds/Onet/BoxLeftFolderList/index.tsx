import { FC, memo, useEffect } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

import { getReFetchFlag } from '../../selectors';
import { isShowDesktopAds } from '../selectors';
import { destroyAd, fetchAd } from '../utils';
import {
  BoxLeftFolderListContentStyled,
  BoxLeftFolderListStyled,
} from './styles';

const NAME = 'left-sky';
const CONTAINER_ID = `slot-${NAME}`;

const BoxLeftFolderList: FC = () => {
  const isShowAd = useSelector(isShowDesktopAds);
  const reFetchFlag = useSelector(getReFetchFlag);

  useEffect(() => {
    if (isShowAd) {
      fetchAd(NAME, CONTAINER_ID);
    } else {
      destroyAd(CONTAINER_ID);
    }
  }, [isShowAd, reFetchFlag]);

  useEffect(
    () => () => {
      destroyAd(CONTAINER_ID);
    },
    [],
  );

  return isShowAd ? (
    <BoxLeftFolderListStyled>
      <BoxLeftFolderListContentStyled>
        <div data-prop-lazyPercentage="100" id={CONTAINER_ID} />
      </BoxLeftFolderListContentStyled>
    </BoxLeftFolderListStyled>
  ) : null;
};

export default memo(BoxLeftFolderList);
