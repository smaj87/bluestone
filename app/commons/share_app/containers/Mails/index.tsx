import useTranslations from 'commons/hooks/useTranslations';
import MobileLoader from 'commons/MobileLoader';
import BottomNavigation from 'commons/share_app/components/BottomNavigation';
import HistoryHeader from 'commons/share_app/components/HistoryHeader';
import SlotFlatNatmailing from 'commons/share_app/components/hooks/useAds/Onet/SlotFlatNatmailing';
import {
  ToolbarBottomContentStyled,
  ToolbarBottomStyled,
} from 'commons/Toolbar/styles';
import { VISUALLY_HIDDEN_CLASS } from 'commons/utils/classNames';
import { FC, memo } from 'commons/utils/react';

import Banners from 'components/Banners';
import ElementsPerPage from 'components/ElementsPerPage';
import MailsListFilters from 'components/Filters/MailsListFilters';
import InfoBar from 'components/Infobars/MailList';
import MailListToolbarTop from 'components/Toolbars/MailListToolbarTop';
import MobileMailsToolbarTop from 'components/Toolbars/MailListToolbarTop/MobileMailsToolbarTop';
import RowCounter from 'components/Toolbars/MailListToolbarTop/RowCounter';

import { MAILS_CONTAINER_ID } from './constants';
import Content from './Content';
import Hooks from './Hooks';
import MailsListNav from './MailsListNav';
import MobileContent from './MobileContent';
import PageTitle from './PageTitle';
import { MailsStyled } from './styles';

const Mails: FC = () => {
  const t = useTranslations();

  return (
    <MailsStyled id={MAILS_CONTAINER_ID}>
      <Hooks />
      <PageTitle />
      <h1 className={VISUALLY_HIDDEN_CLASS}>{t('mailsListTitle')}</h1>
      <MobileLoader
        desktop={<MailListToolbarTop />}
        mobile={<MobileMailsToolbarTop />}
      />
      <MobileLoader mobile={<HistoryHeader />} />
      <MailsListFilters />
      <Banners allowEmptyPlacement placement="mails" />
      <InfoBar />
      <SlotFlatNatmailing />
      {/* todo reklama dla gazety */}
      <MobileLoader desktop={<Content />} mobile={<MobileContent />} />
      <MobileLoader
        desktop={
          <ToolbarBottomStyled>
            <ToolbarBottomContentStyled>
              <div />
              <ElementsPerPage
                listElementLabel={t('components/ElementsPerPage/messages')}
                prefix="mails"
              />
              <RowCounter />
            </ToolbarBottomContentStyled>
          </ToolbarBottomStyled>
        }
      />
      <MailsListNav />
      <BottomNavigation />
    </MailsStyled>
  );
};

export default memo(Mails);
