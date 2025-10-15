import useTranslations from 'commons/hooks/useTranslations';
import {
  ShoppingPagesTileActionsStyled,
  ShoppingPagesTileStyled,
} from 'commons/share_app/components/ShoppingPages/ShoppingTile/styles';
import { ShoppingPagesItemStyled } from 'commons/share_app/components/ShoppingPages/styles';
import { FC, memo } from 'commons/utils/react';

import { NEWSLETTER_ITEM_ID_PREFIX } from '../constants';
import NewsletterMenuDropdown from '../NewsletterMenuDropdown';
import { Newsletter } from '../types';
import NewsletterBimi from './NewsletterBimi';
import NewsletterHistoryButton from './NewsletterHistoryButton';
import NewsletterUnsubscribeButton from './NewsletterUnsubscribeButton';
import {
  ContentGroupStyled,
  ContentStyled,
  TextStyled,
  TitleStyled,
} from './styles';

interface Props {
  newsletter: Newsletter;
}

const NewsletterItem: FC<Props> = ({ newsletter }) => {
  const t = useTranslations();
  const {
    count,
    from: { email, name },
    idMessage: mid,
    isBimi,
    seenRatio,
  } = newsletter;

  const seen = Math.round(count * parseFloat(seenRatio));

  return (
    <ShoppingPagesItemStyled>
      <ShoppingPagesTileStyled
        $layout="newsletter"
        id={`${NEWSLETTER_ITEM_ID_PREFIX}_${mid}`}
      >
        <NewsletterBimi mid={mid} nameFrom={name || email} />
        <ContentStyled>
          <ContentGroupStyled>
            <TitleStyled title={name || email}>{name || email}</TitleStyled>
            <TextStyled>{email}</TextStyled>
          </ContentGroupStyled>
          <TextStyled>
            {t('newsletterItemCounter', { counter: count, seener: seen })}
          </TextStyled>
          <ShoppingPagesTileActionsStyled>
            <NewsletterUnsubscribeButton email={email} mid={mid} />
            <NewsletterHistoryButton
              email={email}
              isBimi={isBimi}
              mid={mid}
              name={name}
            />
          </ShoppingPagesTileActionsStyled>
        </ContentStyled>
        <NewsletterMenuDropdown
          count={count}
          email={email}
          mid={mid}
          name={name}
        />
      </ShoppingPagesTileStyled>
    </ShoppingPagesItemStyled>
  );
};

NewsletterItem.displayName = 'NewsletterItem';

export default memo(NewsletterItem);
