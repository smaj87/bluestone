import { SET_URL_PROPS } from './constants';

export const setUrlProps = (view, props) => ({
  type: SET_URL_PROPS,
  view,
  props,
});
