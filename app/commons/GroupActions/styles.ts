import Button from 'commons/Button';
import { CTA_LABEL_CLASS } from 'commons/CallToAction/constants';
import styled, { css } from 'commons/Goober';
import Link from 'commons/Link';
import { focusVisibleInsideStyles } from 'commons/utils/commonStyles';

import { alignmentFunc } from './alignment';
import { itemsGapFunc } from './gap';
import { Alignment, ItemsGap } from './types';

const isSingleLineStyles = css`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const isMultiLineStyles = css`
  overflow-wrap: break-word;
`;

interface GroupTextStyledProps {
  $isMultiLine?: boolean;
}

interface GroupTitleStyledProps extends GroupTextStyledProps {
  $noSpace?: boolean;
}

export const GroupTitleStyled = styled('h4')<GroupTitleStyledProps>`
  ${({ $isMultiLine }) =>
    $isMultiLine ? isMultiLineStyles : isSingleLineStyles};
  ${({ $noSpace }) => ($noSpace ? '' : 'margin-bottom: 1.6rem;')};
  flex-shrink: 0;
  padding: 0 2.4rem;
  width: 100%;
  min-width: 0;
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 1.5;
  color: var(--context-menu-txt);
  letter-spacing: -0.016rem;
`;

export const GroupSubtitleStyled = styled(`div`)<GroupTextStyledProps>`
  ${({ $isMultiLine }) =>
    $isMultiLine ? isMultiLineStyles : isSingleLineStyles};
  padding: 0 2.4rem;
  width: 100%;
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 1.5;
  color: var(--context-menu-txt--secondary);
  letter-spacing: -0.016rem;
`;

export const GroupTextStyled = styled('div')`
  margin-bottom: 0.4rem;
  padding: 0 2.4rem;
  width: 100%;
  font-weight: 400;
  font-size: 1.3rem;
  line-height: 2;
  color: var(--context-menu-txt--secondary);
  letter-spacing: -0.016rem;
  text-align: right;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export interface GroupListStyledProps {
  $gap?: ItemsGap;
}

export const GroupListStyled = styled('ul')<GroupListStyledProps>`
  display: grid;
  grid-template-columns: 1fr;
  margin: 0;
  padding: 0;
  width: 100%;
  list-style: none;
  ${itemsGapFunc};
`;

export const GroupListItemStyled = styled('li')`
  position: relative;
  display: inline-flex;
  min-width: 0;
  width: 100%;
  overflow: hidden;

  hr {
    flex: 1;
    margin-block: 1.6rem;
    width: 100%;
    height: 0.1rem;
    border: 0;
    background: var(--context-menu-hr);
  }
`;

export const GroupListItemStatusStyled = styled('div')`
  position: absolute;
  top: 50%;
  left: 0.4rem;
  transform: translate3d(0, -50%, 0);
`;

export const GroupListSeparator = styled('hr')`
  flex: 0 0 0.1rem;
  margin-block: 1.6rem;
  width: 100%;
  height: 0.1rem;
  border: 0;
  background: transparent;
`;

const isActiveStyles = css`
  border-color: var(--group-action-button-bg--active);
  background: var(--group-action-button-bg--active);
  cursor: none;
  pointer-events: none;
`;

const isIndentStyles = css`
  padding-left: 4rem;
`;

const isBreakWordStyles = css`
  .${CTA_LABEL_CLASS} {
    white-space: normal;
  }
`;

export interface CtaStylesProps {
  $isActive?: boolean;
  $isIndent?: boolean;
  $align?: Alignment;
  $isBreakWord?: boolean;
}

export const ctaStyles = css<CtaStylesProps>`
  gap: 0.8rem;
  justify-content: flex-start;
  padding: 0.4rem 0.8rem;
  width: 100%;
  background: transparent;
  color: var(--group-action-button-txt);
  text-align: left;
  overflow: hidden;

  ${({ $isActive }) => ($isActive ? isActiveStyles : '')};
  ${({ $isIndent }) => ($isIndent ? isIndentStyles : '')};
  ${({ $isBreakWord }) => ($isBreakWord ? isBreakWordStyles : '')};

  ${alignmentFunc};

  @media (hover: hover) {
    &:hover {
      &:not(:disabled) {
        border-color: var(--group-action-button-border--hover);
        background: var(--group-action-button-bg--hover);
        color: var(--group-action-button-txt--hover);
      }
    }
  }
`;

export const GroupButton = styled(Button)<CtaStylesProps>`
  ${ctaStyles};

  &:focus-visible {
    ${focusVisibleInsideStyles};
  }
`;

export const GroupButtonExtended = styled(Button)<CtaStylesProps>`
  ${ctaStyles};

  &:focus-visible {
    ${focusVisibleInsideStyles};
  }

  .${CTA_LABEL_CLASS} {
    flex: none;
  }
`;

export const GroupButtonExtendedInfoStyled = styled('span')`
  color: var(--group-action-button-txt--option);
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const GroupLink = styled(Link)<CtaStylesProps>`
  ${ctaStyles};

  &:focus-visible {
    ${focusVisibleInsideStyles};
  }
`;

export const GroupButtonLang = styled(Button)<CtaStylesProps>`
  ${ctaStyles};
  position: relative;
  justify-content: flex-start;

  &:focus-visible {
    ${focusVisibleInsideStyles};
  }

  img {
    margin-right: 0.4rem;
    max-width: 2.4rem;
    max-height: 2.4rem;
    filter: drop-shadow(rgba(140, 140, 140, 0.3) 0 0 0.2rem);
  }
`;

const isDotFilterStyles = css`
  .${CTA_LABEL_CLASS} {
    position: relative;

    &:before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      transform: translate(115%, -30%);
      display: inline-flex;
      width: 0.8rem;
      height: 0.8rem;
      border-radius: 50%;
      background: var(--cta-primary-bg);
    }
  }
`;

export interface ButtonMoreProps {
  $isDot?: boolean;
}

export const ButtonMore = styled(Button)<ButtonMoreProps>`
  ${ctaStyles};
  position: relative;
  flex-direction: row-reverse;
  justify-content: flex-end;
  padding-left: 4.4rem;
  ${({ $isDot }) => $isDot && isDotFilterStyles}
`;
