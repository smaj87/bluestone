import Button from 'commons/Button';
import styled, { css } from 'commons/Goober';
import Icon from 'commons/Icon';
import Link from 'commons/Link';
import { focusVisibleInsideStyles } from 'commons/utils/commonStyles';
import { corner } from 'commons/utils/variables';

export const SingleAttachmentStyled = styled('div')`
  display: grid;
  grid-template-columns: 1fr auto;
  justify-content: flex-start;
  align-items: center;
  min-width: 0;
  width: 100%;
  border-radius: ${corner};
  overflow: hidden;
`;

const disabledStyles = css`
  background: var(--attachment-tile-bg--disabled);
  color: var(--attachment-tile-txt--disabled);
  pointer-events: none;
  cursor: default;
`;

interface SingleAttachmentDataStyledProps {
  $isDisabled?: boolean;
}

export const SingleAttachmentDataStyled = styled(
  'button',
)<SingleAttachmentDataStyledProps>`
  display: grid;
  grid-template-areas: 'image name' 'image size';
  grid-template-columns: 3.2rem 1fr;
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 0.8rem;
  grid-row-gap: 0.4rem;
  justify-content: flex-start;
  align-items: flex-end;
  padding: 0.8rem;
  background: var(--attachment-tile-bg);
  color: var(--attachment-tile-txt);
  text-align: left;
  cursor: pointer;
  ${({ $isDisabled }) => ($isDisabled ? disabledStyles : '')};

  &:focus-visible {
    ${focusVisibleInsideStyles};
    border-radius: inherit;
  }

  @media (hover: hover) {
    &:hover {
      background: var(--attachment-tile-bg--hover);
      color: var(--attachment-tile-txt--hover);
    }
  }
`;

export const SingleAttachmentIcon = styled(Icon)`
  grid-area: image;
  font-size: 3.2rem;
`;

export const AttachmentFileNameStyled = styled('span')`
  grid-area: name;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  max-width: 100%;
  font-size: 1.2rem;
  line-height: 1.4rem;
  text-decoration: none;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const AttachmentSizeStyled = styled('span')`
  grid-area: size;
  font-size: 1rem;
  line-height: 1.2rem;
  white-space: nowrap;
`;

const ctaAttachmentHoverStyles = css`
  &:hover:not(:disabled) {
    background: var(--attachment-tile-bg--hover);
    color: var(--attachment-tile-txt--hover);
  }
`;

const ctaAttachmentStyles = css`
  padding: 0.8rem;
  width: 4.8rem;
  height: auto;
  aspect-ratio: 1 / 1;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  background: var(--attachment-tile-bg);
  color: var(--attachment-tile-txt);

  &:focus-visible {
    ${focusVisibleInsideStyles};
    border-radius: inherit;
  }
`;

export const ButtonAttachment = styled(Button)`
  ${ctaAttachmentStyles};
  ${({ isDisabled }) => (isDisabled ? disabledStyles : '')};

  &:disabled {
    ${disabledStyles};
  }

  @media (hover: hover) {
    ${({ isDisabled }) => !isDisabled && ctaAttachmentHoverStyles};
  }
`;

export const LinkAttachment = styled(Link)`
  ${ctaAttachmentStyles};

  @media (hover: hover) {
    ${ctaAttachmentHoverStyles};
  }
`;
