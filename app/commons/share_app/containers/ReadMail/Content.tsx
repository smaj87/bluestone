import MobileLoader from 'commons/MobileLoader';
import Alerts from 'commons/share_app/components/ReadMail/Alerts';
import PayWithOnetInfobar from 'commons/share_app/components/ReadMail/Infobars/PayWithOnetInfobar';
import ReadMailHeader from 'commons/share_app/components/ReadMail/ReadMailHeader';
import { FC, memo } from 'commons/utils/react';

import Schema from 'components/Schema';

import LoadableContent from './LoadableContent';

const Content: FC = () => (
  <>
    <MobileLoader
      desktop={
        <>
          <Schema />
          <PayWithOnetInfobar />
        </>
      }
    />
    <ReadMailHeader />
    <MobileLoader
      mobile={
        <>
          <Schema />
          <PayWithOnetInfobar />
        </>
      }
    />
    <Alerts />
    <LoadableContent />
  </>
);

export default memo(Content);
