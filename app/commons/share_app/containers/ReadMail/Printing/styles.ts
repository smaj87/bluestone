import styled, { css } from 'commons/Goober';
import { PRINT_WIDTH } from 'commons/utils/variables';

const printingContentStyles = css`
  margin: 0 auto;
  width: 100%;
  max-width: ${PRINT_WIDTH};
  * {
    margin: auto;
    box-sizing: initial;
    vertical-align: middle;
  }
  p {
    margin-top: 1em;
    margin-bottom: 1em;
  }
  ul,
  ol {
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0;
    margin-inline-end: 0;
    padding-inline-start: 40px;
  }
  img {
    max-width: 100%;
  }
  pre {
    white-space: pre-wrap;
  }
`;

export const PrintingStyled = styled('section')`
  display: block;
  margin: 0 auto;
  background: var(--neutral-bg);
`;

export const PrintingContentStyled = styled('div')`
  margin: 0 auto;
  width: 100%;
  max-width: ${PRINT_WIDTH};
`;

export const PrintingPreviewStyled = styled('div')`
  ${printingContentStyles};
`;
