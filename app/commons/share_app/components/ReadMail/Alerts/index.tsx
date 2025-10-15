import { FC, memo } from 'commons/utils/react';

import FraudInfobar from './FraudInfobar';
import SecurityErrorInfobar from './SecurityErrorInfobar';

const Alerts: FC = () => (
  <>
    <FraudInfobar />
    <SecurityErrorInfobar />
  </>
);

export default memo(Alerts);
