import { css } from 'commons/Goober';
import { AD_SCREENING_CLASS } from 'commons/utils/classNames';
import { fontApp } from 'commons/utils/variables';

import { AD_ADINFO_CLASS } from './constants';

export const adLabelStyles = css`
  width: 100%;
  color: var(--ad-plug-txt);
  font-size: 1rem;
  line-height: 1;
  font-family: ${fontApp};
  text-align: left;
  text-transform: uppercase;
`;

export const adsCommonStyles = css`
  .${AD_ADINFO_CLASS} {
    ${adLabelStyles};
  }
`;

export const adScreeningHiddenStyles = css`
  .${AD_SCREENING_CLASS} & {
    pointer-events: none;
  }
`;

export const adScreeningHiddenContentStyles = css`
  .${AD_SCREENING_CLASS} & {
    display: none;
  }
`;
