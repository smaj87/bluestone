import {
  middlewares,
  reducers,
  RootState,
  TypedDispatch,
  // eslint-disable-next-line import/no-relative-packages
} from 'initRedux';

import configureStore from 'utils/configureStore';

if (
  typeof reducers !== 'object' ||
  reducers === null ||
  !Array.isArray(middlewares)
) {
  throw new Error(
    "Invalid reducers or middlewares. Check if your initRedux.ts file exports 'reducers' object and 'middlewares' array.",
  );
}

const initialState = {} as RootState;
// @ts-ignore todo
const store = configureStore<RootState>(initialState, reducers, middlewares);
// @ts-ignore todo
const { getState, injectReducer, subscribe } = store;

const { dispatch }: { dispatch: TypedDispatch } = store;

export { dispatch, getState, injectReducer, subscribe };
export default store;
