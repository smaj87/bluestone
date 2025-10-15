import { ThunkDispatch } from 'commons/utils/react-redux';
import { UnknownAction } from 'commons/utils/redux';

import { NAME as APP_KEY } from 'containers/App/constants';
import appReducer from 'containers/App/reducer';

export const reducers = {
  [APP_KEY]: appReducer,
} as const;

export const middlewares = [];

/**
 * Reducers always have state as first argument, we can use that to make RootState without repetition.
 */
export type RootState = {
  [key in keyof typeof reducers]: NonNullable<
    Parameters<(typeof reducers)[key]>[0]
  >;
};

export type TypedDispatch = ThunkDispatch<RootState, unknown, UnknownAction>;
