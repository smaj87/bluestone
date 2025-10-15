/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext } from 'commons/utils/react';

interface ITooltipContext {
  isOpen: boolean;
  show: () => void;
  hide: () => void;
}

const defaultState: ITooltipContext = {
  isOpen: false,
  show: () => {},
  hide: () => {},
};

export const ErrorTooltipContext = createContext<ITooltipContext>(defaultState);
