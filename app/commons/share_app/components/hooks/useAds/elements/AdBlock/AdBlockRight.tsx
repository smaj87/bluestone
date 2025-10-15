import { FC, memo } from 'commons/utils/react';

// import ContentPrimary from './ContentPrimary';
import ContentSecondary from './ContentSecondary';
import { AdBlockRightStyled } from './styles';
import { Size } from './types';

interface Props {
  size?: Size;
}

const AdBlockRight: FC<Props> = ({ size }) => (
  <AdBlockRightStyled $size={size}>
    {/* <ContentPrimary placement="vertical" /> */}
    <ContentSecondary placement="vertical" />
  </AdBlockRightStyled>
);

export default memo(AdBlockRight);
