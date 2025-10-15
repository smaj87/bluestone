import { createContext, FC, ReactNode } from 'commons/utils/react';

interface IGlobalProps {
  $theme?: object;
}

interface IGlobalProviderProps {
  children: ReactNode;
  globalProps?: IGlobalProps;
}

const defaultState: IGlobalProps = {
  $theme: {},
};

export const Context = createContext<IGlobalProps>(defaultState);
const GlobalProvider: FC<IGlobalProviderProps> = ({
  children,
  globalProps = {},
}: IGlobalProviderProps) => (
  <Context.Provider value={globalProps}>{children}</Context.Provider>
);

GlobalProvider.displayName = 'GlobalProvider';

export default GlobalProvider;
