import { conformsTo, isFunction, isObject } from 'commons/utils/tinyLodash';

/**
 * Validate the shape of redux store
 */
export default function checkStore(store) {
  const shape = {
    dispatch: isFunction,
    subscribe: isFunction,
    getState: isFunction,
    replaceReducer: isFunction,
    injectedReducers: isObject,
    injectedSagas: isObject,
  };

  if (!conformsTo(store, shape)) {
    throw new Error(
      '(app/utils/checkStore.js) injectors: Expected a valid redux store',
    );
  }
}
