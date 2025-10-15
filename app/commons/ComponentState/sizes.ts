import { css } from 'commons/Goober';
import { screenMdAbove } from 'commons/utils/breakpoints';

import {
  ComponentStateImageStyledProps,
  ComponentStateStyledProps,
} from './styles';
import { ComponentStateSize, ComponentStateStretch } from './types';

export const componentStateSizes: Record<ComponentStateSize, any> = {
  sm: css``,
  md: css`
    padding-block: 1.6rem;
    font-size: 1.3rem;
    line-height: 2rem;

    h2 {
      font-weight: 500;
      font-size: 1.4rem;
      line-height: 1.5;
    }
  `,
  lg: css`
    padding: 4.8rem 1.6rem;
    font-size: 1.4rem;
    line-height: 2rem;

    h2 {
      font-weight: 700;
      font-size: 2rem;
      line-height: 1.5;
    }

    @media screen and (min-width: ${screenMdAbove}) {
      h2 {
        font-size: 2.4rem;
      }
    }
  `,
};

export const componentStateSizesFunc = ({
  $size,
}: {
  $size?: ComponentStateStyledProps['$size'];
}) => ($size ? componentStateSizes[$size] : componentStateSizes.lg);

export const componentStateImageSizes: Record<ComponentStateSize, any> = {
  sm: css``,
  md: css`
    margin-bottom: 0.8rem;
    height: 4.8rem;
    font-size: 4rem;

    @media screen and (min-width: ${screenMdAbove}) {
      flex: 0 0 4.8rem;
      width: 4.8rem;
    }
  `,
  lg: css`
    margin-bottom: 1.6rem;
    height: 6.4rem;
    font-size: 5.6rem;

    @media screen and (min-width: ${screenMdAbove}) {
      flex: 0 0 9.6rem;
      width: 9.6rem;
      height: 9.6rem;
      font-size: 8rem;
    }
  `,
};

export const componentStateImageSizesFunc = ({
  $size,
}: {
  $size?: ComponentStateImageStyledProps['$size'];
}) => ($size ? componentStateImageSizes[$size] : componentStateImageSizes.lg);

export const componentStateStretch: Record<ComponentStateStretch, any> = {
  auto: css``,
  full: css`
    flex: 1;
  `,
};

export const componentStateStretchFunc = ({
  $stretch,
}: {
  $stretch?: ComponentStateStyledProps['$stretch'];
}) => ($stretch ? componentStateStretch[$stretch] : componentStateStretch.auto);
