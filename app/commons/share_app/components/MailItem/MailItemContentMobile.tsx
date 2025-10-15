import MailingMarkedHandler from 'commons/share_app/components/MailItem/MailingMarkedHandler';
import { FC, memo } from 'commons/utils/react';

import IntersectionLoader from './IntersectionLoader';
import MailCheckMobile from './MailCheckMobile';
import MailDataMobile from './MailDataMobile';
import SeenHandler from './SeenHandler';

interface Props {
  id: number;
}

export const MailItemContentMobile: FC<Props> = ({ id }) => (
  <>
    <MailCheckMobile id={id} />
    <IntersectionLoader Component={<SeenHandler id={id} />} id={id} />
    <MailDataMobile id={id} />
    <IntersectionLoader Component={<MailingMarkedHandler id={id} />} id={id} />
  </>
);

export default memo(MailItemContentMobile);
