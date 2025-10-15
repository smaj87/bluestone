import { isMobile as isMobileSelector } from 'commons/hooks/useUserConfig/selectors';
import { FC, memo } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

interface MobileLoaderProps {
  desktop?: JSX.Element;
  mobile?: JSX.Element;
}

const MobileLoader: FC<MobileLoaderProps> = ({ desktop, mobile }) => {
  const isMobile = useSelector(isMobileSelector);
  const Component = isMobile ? mobile : desktop;

  return Component || null;
};

export default memo(MobileLoader);
