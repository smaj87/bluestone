import useDisplayContainer from 'commons/hooks/useDisplayContainer';
import { FC, memo } from 'commons/utils/react';

import { GAZETKA_CONTAINER_ID } from './constants';

interface Props {
  isShow: boolean;
}

const Hooks: FC<Props> = ({ isShow }) => {
  useDisplayContainer(GAZETKA_CONTAINER_ID, isShow, true);

  return null;
};

export default memo(Hooks);
