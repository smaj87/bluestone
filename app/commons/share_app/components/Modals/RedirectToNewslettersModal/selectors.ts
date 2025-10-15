import { getFrontCommonsByField } from 'commons/hooks/useUserConfig/selectors';
import { FrontCommonsInterfaceUI } from 'commons/hooks/useUserConfig/types';
import { createSelector } from 'commons/utils/reselect';

const isRedirectToNewslettersModalHidden = createSelector(
  [(state) => getFrontCommonsByField(state, { field: 'interfaceUI' })],
  (interfaceUI) =>
    !!(interfaceUI as FrontCommonsInterfaceUI)
      ?.redirectToNewslettersModalHidden,
);

export { isRedirectToNewslettersModalHidden };
