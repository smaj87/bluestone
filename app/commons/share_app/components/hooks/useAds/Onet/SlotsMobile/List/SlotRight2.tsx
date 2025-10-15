import { FC, memo } from 'commons/utils/react';

import Content from './Content';

const NAME = 'right2';
const CONTAINER_ID = `slot-${NAME}`;

interface Props {
  pos: number;
}

const SlotRight2: FC<Props> = ({ pos }) => (
  <Content
    containerId={`${CONTAINER_ID}-${pos}`}
    cypressId="SLOT-RIGHT2"
    lazyPercentage={75}
    name={NAME}
    pos={pos}
  />
);

export default memo(SlotRight2);
