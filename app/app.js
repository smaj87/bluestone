/* eslint-disable import/no-import-module-exports */
// Import Tailwind CSS
import './styles/tailwind.css';

import { setGlobalDevModeChecks } from 'reselect';

import ErrorBoundary from 'components/ErrorBoundary';
// Import root app
import App from 'containers/App';
import { createRoot } from 'utils/react';

// disabled reselect v5 warnings: https://reselect.js.org/api/development-only-stability-checks/#2-per-selector-by-passing-an-identityfunctioncheck-option-directly-to-
setGlobalDevModeChecks({
  inputStabilityCheck: 'never',
  identityFunctionCheck: 'never',
});

const MOUNT_NODE = document.getElementById('React_MainContainer');
let root;

const render = () => {
  root = createRoot(MOUNT_NODE);

  root.render(
    <ErrorBoundary>
      <App />
    </ErrorBoundary>,
  );
};

if (module.hot) {
  // Hot reloadable React components and translation json files
  // modules.hot.accept does not accept dynamic dependencies,
  // have to be constants at compile-time
  module.hot.accept(['containers/App'], () => {
    root.unmount();
    render();
  });
}

render();
