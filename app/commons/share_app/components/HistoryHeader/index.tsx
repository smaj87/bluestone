// @ts-nocheck TODO
import Bimi from 'commons/Bimi';
import { BIMI_PLACEMENTS } from 'commons/Bimi/constants';
import useTranslations from 'commons/hooks/useTranslations';
import NewsletterUnsubscribeButton from 'commons/share_app/containers/Newsletters/NewsletterItem/NewsletterUnsubscribeButton';
import {
  ContentGroupStyled,
  ContentStyled,
  TextStyled,
  TitleStyled,
} from 'commons/share_app/containers/Newsletters/NewsletterItem/styles';
import { getInitials } from 'commons/share_app/utils/initials';
import { FC, memo } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

import { getMailsUrlProps } from 'containers/App/selectors';

import NewMailButton from './NewMailButton';
import {
  HistoryHeaderStyled,
  HistoryHeaderTileActionsStyled,
  HistoryHeaderTileStyled,
} from './styles';

const HistoryHeader: FC = () => {
  const t = useTranslations();
  const history = useSelector(getMailsUrlProps, 'history');

  const bimiInitials = getInitials(history?.name || history?.email);

  return history ? (
    <HistoryHeaderStyled>
      <HistoryHeaderTileStyled>
        <Bimi
          image={history?.avatar || ''}
          initials={bimiInitials}
          placement={BIMI_PLACEMENTS.NEWSLETTER_PAGE}
        />
        <ContentStyled>
          <ContentGroupStyled>
            <TitleStyled title={history.name || history.email}>
              {history.name || history.email}
            </TitleStyled>
            <TextStyled title={history.email}>{history.email}</TextStyled>
          </ContentGroupStyled>
          <TextStyled>
            {/* TODO uzupełnienie licznika */}
            {history.count && (
              <b>{t('newsletterCounter', { counter: history.count })}</b>
            )}
          </TextStyled>
          <HistoryHeaderTileActionsStyled>
            {!!history.isUnsubscribe && !!history.mid && (
              <NewsletterUnsubscribeButton
                email={history.email}
                mid={history.mid}
              />
            )}
            {!history.isUnsubscribe && (
              <NewMailButton email={history?.email} name={history?.name} />
            )}
          </HistoryHeaderTileActionsStyled>
        </ContentStyled>
      </HistoryHeaderTileStyled>
    </HistoryHeaderStyled>
  ) : null;
};

export default memo(HistoryHeader);
