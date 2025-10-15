import BottomActionButtons from 'commons/BottomActionButtons';
import MobileLoader from 'commons/MobileLoader';
import MailsListNavToolbar from 'commons/share_app/components/MailsListNavToolbar';
import { FC, memo } from 'commons/utils/react';

import { MAUTIC_CONTAINER_ID } from './constants';
import Hooks from './Hooks';
import MauticContent from './MauticContent';
import PageTitle from './PageTitle';
import { MauticContentStyled, MauticWrapperStyled } from './styles';

const Mautic: FC = () => (
  <MauticWrapperStyled id={MAUTIC_CONTAINER_ID}>
    <MauticContentStyled>
      <PageTitle />
      <Hooks />
      <MauticContent />
      <MobileLoader mobile={<MailsListNavToolbar />} />
    </MauticContentStyled>
    <BottomActionButtons isBottomNav />
  </MauticWrapperStyled>
);

export default memo(Mautic);
