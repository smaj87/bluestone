import { css } from 'commons/Goober';

import { MAIL_ITEM_VIEWS } from './constants';
import { MailDetailsStyledProps } from './styles';
import { MailItemViews } from './types';

export const mailDetailsViews: Record<MailItemViews, any> = {
  [MAIL_ITEM_VIEWS.LIST]: css`
    grid-template-columns: auto 1fr;
    grid-template-rows: 1fr;
  `,
  [MAIL_ITEM_VIEWS.DETAIL]: css`
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 1fr);
  `,
  [MAIL_ITEM_VIEWS.TILE]: css`
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  `,
};

export const mailDetailsViewFunc = ({
  $view,
}: {
  $view?: MailDetailsStyledProps['$view'];
}) => ($view ? mailDetailsViews[$view] : MAIL_ITEM_VIEWS.LIST);
