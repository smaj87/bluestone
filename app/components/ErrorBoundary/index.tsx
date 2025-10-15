import { ErrorInfo, PureComponent, ReactNode } from 'utils/react';

import ErrorPage from './ErrorPage';
import { reportCatchError } from './utils';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends PureComponent<Props, State> {
  // eslint-disable-next-line react/state-in-constructor
  state = { hasError: false };

  componentDidCatch(error: Error, info: ErrorInfo) {
    reportCatchError(error, info);
    this.setState({ hasError: true });
  }

  render() {
    return this.state.hasError ? <ErrorPage /> : this.props.children;
  }
}

export default ErrorBoundary;
