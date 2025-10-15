import { getCount } from 'commons/hooks/useTodayCalendarEvents/selectors';
import {
  isDotForceHide as isDotForceHideSelector,
  isOpen as isOpenSelector,
} from 'commons/Sidebar/selector';
import { createSelector } from 'commons/utils/reselect';

export const isDotShow = createSelector(
  [isOpenSelector, isDotForceHideSelector, getCount],
  (isOpen, isDotForceHide, count) => !isDotForceHide && !isOpen && count > 0,
);
