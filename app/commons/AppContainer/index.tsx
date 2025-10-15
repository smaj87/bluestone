import { getTheme } from 'commons/hooks/useUserConfig/selectors';
import backgrounds from 'commons/Themes/backgrounds';
import { FC, ReactNode } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

import { AppContainerStyled } from './styles';

interface AppContainerProps {
  children?: ReactNode;
}

const AppContainer: FC<AppContainerProps> = ({ children }) => {
  const { background, mode } = useSelector(getTheme);
  const bg = background ? backgrounds[background]?.[mode] : undefined;

  return <AppContainerStyled $background={bg}>{children}</AppContainerStyled>;
};

AppContainer.displayName = 'AppContainer';

export default AppContainer;
