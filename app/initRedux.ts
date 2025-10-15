import { KEY as PRODUCTS_KEY } from 'containers/Products/constants';
import productsReducer from 'containers/Products/reducer';
import { ThunkDispatch } from 'utils/react-redux';
import { UnknownAction } from 'utils/redux';

export const reducers = {
  [PRODUCTS_KEY]: productsReducer,
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
