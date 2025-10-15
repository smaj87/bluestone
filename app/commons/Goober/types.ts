import { CSSProperties } from 'commons/utils/preact';

export type DefaultTheme = object;

export type Theme<T extends object> = keyof T extends never ? T : { theme: T };

export interface StyledFunction {
  // used when creating a styled component from a native HTML element
  <T extends keyof JSX.IntrinsicElements, P extends object = object>(
    tag: T,
    forwardRef?: ForwardRefFunction,
  ): Tagged<
    JSX.LibraryManagedAttributes<T, JSX.IntrinsicElements[T]> &
      P &
      Theme<DefaultTheme>
  >;

  // used to extend other styled components. Inherits props from the extended component
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  <PP extends object = {}, P extends object = {}>(
    tag: StyledVNode<PP>,
    forwardRef?: ForwardRefFunction,
  ): Tagged<PP & P & Theme<DefaultTheme>>;

  // used when creating a component from a string (html native) but using a non HTML standard
  // component, such as when you want to style web components
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  <P extends object = {}>(
    tag: string,
  ): Tagged<P & Partial<JSX.ElementChildrenAttribute>>;

  // used to create a styled component from a JSX element (both functional and class-based)
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  <T extends JSX.Element | JSX.ElementClass, P extends object = {}>(
    tag: T,
    forwardRef?: ForwardRefFunction,
  ): Tagged<P>;
}

type ForwardRefFunction = {
  (props: any, ref: any): any;
};

type StyledVNode<T> = ((props: T, ...args: any[]) => any) & {
  defaultProps?: T;
  displayName?: string;
};

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
type StylesGenerator<P extends object = {}> = (
  props: P,
) => CSSAttribute | string;

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export type Tagged<P extends object = {}> = <PP extends object = { as?: any }>(
  tag:
    | CSSAttribute
    | (CSSAttribute | StylesGenerator<P & PP>)[]
    | TemplateStringsArray
    | string
    | StylesGenerator<P & PP>,
  ...props: Array<
    | string
    | string[]
    | number
    | ((
        props: P & PP,
      ) => CSSAttribute | string | string[] | number | false | undefined)
  >
) => StyledVNode<Omit<P & PP, keyof Theme<DefaultTheme>>>;

// @ts-ignore
export interface CSSAttribute extends CSSProperties {
  [key: string]: CSSAttribute | string | number | undefined | null;
}
