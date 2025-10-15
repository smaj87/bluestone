import {
  Children as reactChildren,
  cloneElement as reactCloneElement,
  Component as ComponentReact,
  ComponentType as reactComponentType,
  createContext as createContextReact,
  createElement as createElementReact,
  createRef as createRefReact,
  EffectCallback as reactEffectCallback,
  ErrorInfo as ErrorInfoReact,
  FC as FCReact,
  forwardRef as forwardRefReact,
  Fragment as reactFragment,
  isValidElement as reactIsValidElement,
  lazy as lazyReact,
  memo as memoReact,
  MutableRefObject as reactMutableRefObject,
  PureComponent as PureComponentReact,
  ReactNode as reactReactNode,
  Ref as reactRef,
  RefObject as reactRefObject,
  Suspense as SuspenseReact,
  useCallback as useCallbackReact,
  useContext as useContextReact,
  useEffect as useEffectReact,
  useImperativeHandle as useImperativeHandleReact,
  useLayoutEffect as useLayoutEffectReact,
  useMemo as useMemoReact,
  useRef as useRefReact,
  useState as useStateReact,
  // eslint-disable-next-line
} from 'preact/compat';
// eslint-disable-next-line
import { createPortal as createPortalReact } from 'preact/compat';
// eslint-disable-next-line
import { createRoot as createRootReact } from 'preact/compat/client';

export const useMemo = useMemoReact;
export const useCallback = useCallbackReact;
export const memo = memoReact;
export const useState = useStateReact;
export const useEffect = useEffectReact;

export const useEffectWithoutMount = (
  func: () => void,
  deps: any[] | undefined,
) => {
  const isMounted = useRef(false);

  useEffect(() => {
    if (isMounted.current) {
      return func();
    }

    return () => {};
  }, deps);

  useEffect(() => {
    isMounted.current = true;
  }, []);

  return null;
};

export const useLayoutEffect = useLayoutEffectReact;
export const useContext = useContextReact;
export const useRef = useRefReact;
export const forwardRef = forwardRefReact;
export const useImperativeHandle = useImperativeHandleReact;
export const lazy = lazyReact;
export const Suspense = SuspenseReact;
export const createContext = createContextReact;
export const Children = reactChildren;
export const cloneElement = reactCloneElement;
export const isValidElement = reactIsValidElement;
export const PureComponent = PureComponentReact;
export const Component = ComponentReact;
export const createPortal = createPortalReact;
export const createElement = createElementReact;
export const createRoot = createRootReact;
export const Fragment = reactFragment;
export const createRef = createRefReact;

// Types
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export type FC<P = {}> = FCReact<P>;
export type Ref<T> = reactRef<T>;
export type RefObject<T> = reactRefObject<T>;
export type MutableRefObject<T> = reactMutableRefObject<T>;
export type ReactNode = reactReactNode;
export type ReactText = string | number;
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export type ComponentType<P = {}> = reactComponentType<P>;
export type ErrorInfo = ErrorInfoReact;

export type EffectCallback = reactEffectCallback;
