import { FC, memo } from 'commons/utils/react';

import Content from './Content';

const NAME = 'right';
const CONTAINER_ID = `slot-${NAME}`;

const SlotRight: FC = () => (
  <Content
    containerId={CONTAINER_ID}
    cypressId="SLOT-RIGHT-MAIL-LIST"
    lazyPercentage={75}
    name={NAME}
  />
);

export default memo(SlotRight);
