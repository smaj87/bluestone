import { ReadMailRouterIsShowContext } from 'commons/share_app/components/RouterHelpers/constants';
import { getMailField } from 'commons/share_app/containers/ReadMail/selectors';
import { FC, memo, useContext, useEffect } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

import { destroyAd, fetchAd } from '../../utils';
import { isShowAd as isShowAdSelector } from './selectors';
import { SlotRightReadMailMobileStyled } from './styles';

const NAME = 'right';
const CONTAINER_ID = `slot-${NAME}`;

const SlotRight: FC = () => {
  const isShowReadMailView = useContext(ReadMailRouterIsShowContext);

  const isShowAd = useSelector(isShowAdSelector) && isShowReadMailView;
  const mid = useSelector(getMailField, 'mid');

  useEffect(() => {
    if (isShowAd) {
      fetchAd(NAME, CONTAINER_ID);
    }

    return () => {
      // if prev isShow === true
      if (isShowAd) {
        destroyAd(CONTAINER_ID);
      }
    };
  }, [isShowAd, mid]);

  return isShowAd ? (
    <SlotRightReadMailMobileStyled>
      <div
        data-cypress="SLOT-RIGHT-MOBILE-READMAIL"
        data-prop-lazyPercentage="100"
        id={CONTAINER_ID}
      />
    </SlotRightReadMailMobileStyled>
  ) : null;
};

export default memo(SlotRight);
