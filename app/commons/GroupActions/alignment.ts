import { CTA_LABEL_CLASS } from 'commons/CallToAction/constants';
import { css } from 'commons/Goober';

import { CtaStylesProps } from './styles';
import { Alignment } from './types';

export const leftStyles = css`
  justify-content: flex-start;

  .${CTA_LABEL_CLASS} {
    text-align: left;
  }
`;

export const centerStyles = css`
  justify-content: center;

  .${CTA_LABEL_CLASS} {
    text-align: center;
  }
`;

export const rightStyles = css`
  justify-content: flex-end;

  .${CTA_LABEL_CLASS} {
    text-align: right;
  }
`;

export const alignment: Record<Alignment, any> = {
  left: leftStyles,
  center: centerStyles,
  right: rightStyles,
};

export const alignmentFunc = ({
  $align,
}: {
  $align?: CtaStylesProps['$align'];
}) => ($align ? alignment[$align] : '');
