import { SLOT_RIGHT_LG, TYPE_LG, TYPE_MD } from './constants';

export const getType = () => {
  let type = TYPE_LG;

  if (window.innerWidth < SLOT_RIGHT_LG) {
    type = TYPE_MD;
  }

  return type;
};
