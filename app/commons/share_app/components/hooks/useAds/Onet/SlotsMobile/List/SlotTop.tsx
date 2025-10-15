import { FC, memo } from 'commons/utils/react';

import Content from './Content';

const NAME = 'top';
const CONTAINER_ID = `slot-${NAME}`;

const SlotTop: FC = () => (
  <Content containerId={CONTAINER_ID} lazyPercentage={50} name={NAME} />
);

export default memo(SlotTop);
