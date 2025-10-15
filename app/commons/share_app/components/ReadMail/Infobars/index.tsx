import { FC, memo } from 'commons/utils/react';

import InfobarReceipt from './InfobarReceipt';
import InfobarShowImages from './InfobarShowImages';

const Infobars: FC = () => (
  <>
    <InfobarShowImages />
    <InfobarReceipt />
  </>
);

export default memo(Infobars);
