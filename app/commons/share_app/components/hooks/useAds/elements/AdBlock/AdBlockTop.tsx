import { FC, memo } from 'commons/utils/react';

// import ContentPrimary from './ContentPrimary';
import ContentSecondary from './ContentSecondary';
import { AdBlockTopStyled } from './styles';
import { Size } from './types';

interface Props {
  size?: Size;
}

const AdBlockTop: FC<Props> = ({ size }) => (
  <AdBlockTopStyled $size={size}>
    {/* <ContentPrimary placement="horizontal" /> */}
    <ContentSecondary placement="horizontal" />
  </AdBlockTopStyled>
);

export default memo(AdBlockTop);
