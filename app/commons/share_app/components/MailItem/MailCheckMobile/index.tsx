import { FC, memo } from 'commons/utils/react';

import CheckedHandler from '../CheckedHandler';
import IntersectionLoader from '../IntersectionLoader';
import { MailItemCheckMobileStyled } from '../styles';
import MailCheckButtonMobile from './MailCheckButtonMobile';

interface Props {
  id: number;
}

const MailCheckMobile: FC<Props> = ({ id }) => (
  <MailItemCheckMobileStyled>
    <MailCheckButtonMobile id={id} />
    <IntersectionLoader Component={<CheckedHandler id={id} />} id={id} />
  </MailItemCheckMobileStyled>
);

export default memo(MailCheckMobile);
