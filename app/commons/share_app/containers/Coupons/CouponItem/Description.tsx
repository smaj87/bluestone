import { FC, memo } from 'commons/utils/react';

import { Coupon } from '../types';
import { TitleStyled } from './styles';

interface Props {
  description: Coupon['description'];
}

const Description: FC<Props> = ({ description }) => (
  // TODO - nazwa komponentu jest trochę myląca z nazwą styled component
  <TitleStyled>{description}</TitleStyled>
);

Description.displayName = 'Description';

export default memo(Description);
