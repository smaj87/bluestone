import Button from 'commons/Button';
import styled, { css } from 'commons/Goober';
import Icon from 'commons/Icon';
import { screenMdAbove } from 'commons/utils/breakpoints';
import { corner } from 'commons/utils/variables';

import {
  READ_MAIL_ADDITIONAL_AREA,
  READ_MAIL_FROM_AREA,
  READ_MAIL_TO_AREA,
} from '../constants';
import { readMailDataTypoStyles, textEllipsisStyles } from '../styles';

export const ReadMailHeaderStyled = styled('header')`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.8rem;
  padding: 0.8rem;
  width: 100%;
  background: var(--readmail-bg);

  hr {
    width: 100%;
    height: 0.1rem;
    background: var(--readmail-hr);
  }

  @media screen and (min-width: ${screenMdAbove}) {
    gap: 1.6rem;
    padding: 1.6rem;
    border-radius: ${corner};
  }
`;

export const ReadMailTopStyled = styled('div')`
  display: grid;
  grid-template-columns: 1fr 4rem;
  grid-column-gap: 0.8rem;
  justify-content: flex-start;
  align-items: center;
  min-height: 3rem;

  h2 {
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 1.2;
    color: var(--readmail-txt--primary);
  }

  @media screen and (min-width: ${screenMdAbove}) {
    h2 {
      font-weight: 500;
      font-size: 2.2rem;
    }
  }
`;

export const ReadMailBottomStyled = styled('div')`
  display: grid;
  grid-template-columns: 3.2rem 1fr;
  gap: 0.8rem;
  justify-content: flex-start;
  align-items: flex-start;

  @media screen and (min-width: ${screenMdAbove}) {
    grid-template-columns: 4rem 1fr;
  }
`;

export const ReadMailHeaderDetailsStyled = styled('div')`
  display: grid;
  grid-template-areas: '${READ_MAIL_FROM_AREA} ${READ_MAIL_ADDITIONAL_AREA}' '${READ_MAIL_TO_AREA} ${READ_MAIL_TO_AREA}';
  grid-template-columns: 1fr auto;
  grid-column-gap: 0.8rem;
  justify-content: flex-start;
  align-items: flex-start;

  @media screen and (min-width: ${screenMdAbove}) {
    grid-row-gap: 0.4rem;
  }
`;

export const ReadMailFromStyled = styled('div')`
  grid-area: ${READ_MAIL_FROM_AREA};
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  grid-column-gap: 0.8rem;
  min-width: 0;

  @media screen and (min-width: ${screenMdAbove}) {
    grid-row-gap: 0.4rem;
  }
`;

export const ReadMailFromBasicStyled = styled('div')`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  grid-column-gap: 0.8rem;
  min-width: 0;
  max-width: 100%;
  overflow: hidden;
`;

export const ReadMailFromNameStyled = styled('b')`
  ${readMailDataTypoStyles};
  ${textEllipsisStyles};
  max-width: 100%;
  font-weight: 700;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const ReadMailFromEmailStyled = styled('span')`
  ${readMailDataTypoStyles};
  ${textEllipsisStyles};
  max-width: 100%;
  font-weight: 400;
`;

export const ReadMailToStyled = styled('div')`
  ${readMailDataTypoStyles};
  grid-area: ${READ_MAIL_TO_AREA};
  display: flex;
  gap: 0.8rem;
  align-items: center;
  font-weight: 400;
`;

export const ReadMailToNamesStyled = styled('span')`
  min-width: 0;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const ReadMailHeaderAdditionalStyled = styled('div')`
  grid-area: ${READ_MAIL_ADDITIONAL_AREA};
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 0.8rem;
  min-height: 2rem;
`;

export const TrustedSenderSignStyled = styled(Icon)`
  font-size: 2rem;
  color: var(--state-success);
`;

const isFavouriteActiveStyles = css`
  color: var(--btn-fav-txt--active);

  @media (hover: hover) {
    &:hover:not(:disabled) {
      color: var(--btn-fav-txt--active--hover);
    }
  }
`;

export const ButtonFavouriteStyled = styled(Button)`
  justify-content: center;
  height: 100%;
  ${({ $isActive }) => ($isActive ? isFavouriteActiveStyles : '')}
`;
