import { css } from 'commons/Goober';

import { CtaStyledProps } from './styles';
import { CtaAlign } from './types';

export const ctaAligns: Record<CtaAlign, any> = {
  left: css`
    justify-content: flex-start;
    text-align: left;
  `,
  center: css`
    justify-content: center;
    text-align: center;
  `,
  right: css`
    justify-content: flex-end;
    text-align: right;
  `,
};

export const ctaIconAligns: Record<CtaAlign, any> = {
  left: css`
    justify-content: flex-start;
    margin-right: auto;
  `,
  center: css`
    justify-content: center;
  `,
  right: css`
    justify-content: flex-end;
    margin-left: auto;
  `,
};

export const ctaAlignFunc = ({
  $align,
}: {
  $align?: CtaStyledProps['$align'];
}) => ($align ? ctaAligns[$align] : ctaAligns.center);

export const ctaIconAlignFunc = ({
  $align,
}: {
  $align?: CtaStyledProps['$align'];
}) => ($align ? ctaIconAligns[$align] : undefined);
