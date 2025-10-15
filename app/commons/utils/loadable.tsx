import { ComponentType, lazy, Suspense } from 'commons/utils/react';

interface Props {
  isShow?: boolean;
  [key: string]: unknown;
}

const loadable = (
  importFunc: () => Promise<{ default: ComponentType<any> }>,
  { fallback = null } = { fallback: null },
) => {
  const LazyComponent = lazy(importFunc);

  return (props: Props) => (
    <Suspense
      fallback={
        props.isShow === undefined || props.isShow === true ? fallback : null
      }
    >
      <LazyComponent {...props} />
    </Suspense>
  );
};

export default loadable;
