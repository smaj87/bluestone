import useTranslations from 'commons/hooks/useTranslations';
import MobileLoader from 'commons/MobileLoader';
import BottomNavigation from 'commons/share_app/components/BottomNavigation';
import SlotTopMobileGazeta from 'commons/share_app/components/hooks/useAds/Gazeta/SlotTopMobile';
import ReadMailSlot from 'commons/share_app/components/hooks/useAds/Onet/SlotsMobile/ReadMail/SlotRight';
import { VISUALLY_HIDDEN_CLASS } from 'commons/utils/classNames';
import { FC, memo } from 'commons/utils/react';

import { READ_MAIL_CONTAINER_ID } from './constants';
import Content from './Content';
import Hooks from './Hooks';
import PageTitle from './PageTitle';
import { ReadMailContentStyled, ReadMailStyled } from './styles';
import Swipeable from './Swipeable';
import Toolbar from './Toolbar';

const ReadMail: FC = () => {
  const t = useTranslations();

  return (
    <ReadMailStyled id={READ_MAIL_CONTAINER_ID}>
      <PageTitle />
      <h1 className={VISUALLY_HIDDEN_CLASS}>{t('readMailTitle')}</h1>
      <Hooks />
      <Toolbar />
      <ReadMailContentStyled>
        <SlotTopMobileGazeta />
        <MobileLoader desktop={<Content />} mobile={<Swipeable />} />
        <MobileLoader mobile={<ReadMailSlot />} />
      </ReadMailContentStyled>
      <BottomNavigation />
    </ReadMailStyled>
  );
};

export default memo(ReadMail);
