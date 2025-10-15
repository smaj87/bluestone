import { getTheme } from 'commons/hooks/useUserConfig/selectors';
import { useSelector } from 'commons/utils/react-redux';
import { getThemeGlobalStyles } from 'commons/utils/themes';

const ThemeStyles = () => {
  const { color, mode } = useSelector(getTheme);
  const ThemeGlobalStyle = getThemeGlobalStyles(mode, color);

  return <ThemeGlobalStyle />;
};

ThemeStyles.displayName = 'ThemeStyles';

export default ThemeStyles;
