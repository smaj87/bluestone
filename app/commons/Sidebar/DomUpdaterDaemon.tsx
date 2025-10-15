import { isMobile as isMobileSelector } from 'commons/hooks/useUserConfig/selectors';
import { updateDOM } from 'commons/Sidebar/reducer';
import { isOpen as isOpenSelector } from 'commons/Sidebar/selector';
import { FC, memo, useEffect, useRef } from 'commons/utils/react';
import {
  getStateValueBySelector,
  useSelector,
} from 'commons/utils/react-redux';

const DomUpdaterDaemon: FC = () => {
  const firstRender = useRef(true);
  const isMobile = useSelector(isMobileSelector);

  useEffect(() => {
    if (!firstRender.current) {
      // updateDom after isMobile change
      updateDOM(getStateValueBySelector(isOpenSelector));
    }

    firstRender.current = false;
  }, [isMobile]);

  return null;
};

export default memo(DomUpdaterDaemon);
