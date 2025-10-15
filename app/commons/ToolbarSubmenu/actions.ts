import { CLOSE, OPEN } from './constants';
import { ToolbarSubmenusIds } from './types';

export const open = (submenuId: ToolbarSubmenusIds, params = {}) => ({
  type: OPEN,
  submenuId,
  params,
});

export const close = () => ({
  type: CLOSE,
});
