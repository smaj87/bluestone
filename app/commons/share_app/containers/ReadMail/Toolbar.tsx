import MobileLoader from 'commons/MobileLoader';
import { ReadMailRouterIsShowContext } from 'commons/share_app/components/RouterHelpers/constants';
import Controls from 'commons/share_app/components/Toolbars/ReadMailToolbar/Controls';
import MobileControls from 'commons/share_app/components/Toolbars/ReadMailToolbar/MobileControls';
import { ToolbarTop } from 'commons/Toolbar';
import { FC, memo, useContext } from 'commons/utils/react';

const Toolbar: FC = () => (
  <ToolbarTop isShow={useContext(ReadMailRouterIsShowContext)}>
    <MobileLoader desktop={<Controls />} mobile={<MobileControls />} />
  </ToolbarTop>
);

export default memo(Toolbar);
