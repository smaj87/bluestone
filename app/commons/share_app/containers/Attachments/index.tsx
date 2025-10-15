import useTranslations from 'commons/hooks/useTranslations';
import MobileLoader from 'commons/MobileLoader';
import BottomNavigation from 'commons/share_app/components/BottomNavigation';
import {
  ToolbarBottomContentStyled,
  ToolbarBottomStyled,
} from 'commons/Toolbar/styles';
import { VISUALLY_HIDDEN_CLASS } from 'commons/utils/classNames';
import { FC, memo } from 'commons/utils/react';

import Banners from 'components/Banners';
import ElementsPerPage from 'components/ElementsPerPage';
import AttachmentsListFilters from 'components/Filters/AttachmentsListFilters';
import AttachmentsToolbarTop from 'components/Toolbars/AttachmentsToolbarTop';
import MobileAttachmentsToolbarTop from 'components/Toolbars/AttachmentsToolbarTop/MobileAttachmentsToolbarTop';
import RowCounter from 'components/Toolbars/AttachmentsToolbarTop/RowCounter';

import { ATTACHMENTS_CONTAINER_ID } from './constants';
import Content from './Content';
import Hooks from './Hooks';
import MobileContent from './MobileContent';
import PageTitle from './PageTitle';
import { AttachmentsStyled } from './styles';

const Attachments: FC = () => {
  const t = useTranslations();

  return (
    <AttachmentsStyled id={ATTACHMENTS_CONTAINER_ID}>
      <PageTitle />
      <Hooks />
      <h1 className={VISUALLY_HIDDEN_CLASS}>{t('attachmentsListTitle')}</h1>
      <MobileLoader
        desktop={<AttachmentsToolbarTop />}
        mobile={<MobileAttachmentsToolbarTop />}
      />
      <AttachmentsListFilters />
      <Banners placement="attachments" />
      <MobileLoader desktop={<Content />} mobile={<MobileContent />} />
      <MobileLoader
        desktop={
          <ToolbarBottomStyled>
            <ToolbarBottomContentStyled>
              <div />
              <ElementsPerPage
                listElementLabel={t('components/ElementsPerPage/attachments')}
                prefix="attachments"
              />
              <RowCounter />
            </ToolbarBottomContentStyled>
          </ToolbarBottomStyled>
        }
      />
      <BottomNavigation />
    </AttachmentsStyled>
  );
};

export default memo(Attachments);
