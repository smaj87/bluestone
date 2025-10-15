import AdPlug from 'commons/AdPlug';
import { MailsRouterIsShowContext } from 'commons/share_app/components/RouterHelpers/constants';
import { FC, memo, useContext, useEffect, useState } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

import { getReFetchFlag } from '../../../selectors';
import { isShowMobileAds } from '../../selectors';
import { addEvents, destroyAd, fetchAd } from '../../utils';
import { SlotMobileContentStyled, SlotMobileStyled } from './styles';

interface Props {
  name: string;
  containerId: string;
  pos?: number;
  cypressId?: string;
  lazyPercentage?: number;
}

const Content: FC<Props> = ({
  containerId,
  cypressId,
  lazyPercentage = 100,
  name,
  pos,
}) => {
  const isMailsView = useContext(MailsRouterIsShowContext); // is mails show, because of cache

  const isShowAd = useSelector(isShowMobileAds) && isMailsView;
  const reFetchFlag = useSelector(getReFetchFlag);

  const [isEmpty, setIsEmpty] = useState(true);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout> | undefined;

    if (isShowAd) {
      timeout = setTimeout(() => {
        // !!! settimeout obowiazkowe ze wzgledu na LL reklam i naszego obserwera
        fetchAd(name, containerId, pos);

        addEvents(
          containerId,
          () => setIsEmpty(false),
          () => setIsEmpty(true),
          () => setIsEmpty(true),
        );
      }, 0);
    }

    return () => {
      // if prev isShow === true
      if (isShowAd) {
        clearTimeout(timeout);
        destroyAd(containerId);
      }
    };
  }, [isShowAd, reFetchFlag]);

  return isShowAd ? (
    <SlotMobileStyled>
      {isEmpty ? <AdPlug /> : null}
      <SlotMobileContentStyled>
        <div
          data-cypress={cypressId}
          data-opt-pos={pos}
          data-prop-lazyPercentage={lazyPercentage}
          id={containerId}
        />
      </SlotMobileContentStyled>
    </SlotMobileStyled>
  ) : null;
};

export default memo(Content);
