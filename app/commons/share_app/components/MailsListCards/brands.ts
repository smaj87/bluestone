import { css } from 'commons/Goober';

import {
  BrandStyledProps,
  MailsListCardDiscountBrandStyledProps,
} from './styles';
import { Brand } from './types';

export const brandLabelColors: Record<Brand, any> = {
  default: css`
    background: var(--schema-label-bg);
    color: var(--schema-label-txt);
  `,
  goodie: css`
    background: var(--cashback-goodie-brand--3);
    color: var(--cashback-goodie-txt--inverted);
  `,
};

export const brandLabelColorsFunc = ({
  $brand,
}: {
  $brand?: BrandStyledProps['$brand'];
}) => ($brand ? brandLabelColors[$brand] : 'default');

export const brandDiscountColors: Record<Brand, any> = {
  default: css`
    b {
      color: var(--coupon-mails-list-txt--secondary);
    }
  `,
  goodie: css`
    b {
      color: var(--cashback-goodie-brand--2);
    }
  `,
};

export const brandDiscountColorsFunc = ({
  $brand,
}: {
  $brand?: MailsListCardDiscountBrandStyledProps['$brand'];
}) => ($brand ? brandDiscountColors[$brand] : 'default');
