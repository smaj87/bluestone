import Button from 'commons/Button';
import styled from 'commons/Goober';
import Icon from 'commons/Icon';
import { LIST_ITEM_HEIGHT } from 'commons/share_app/components/ListElements/List/constants';

import { listStatusFunc } from './colors';
import { ListStatusType } from './types';

export interface ListStatusStyledProps {
  $status?: ListStatusType;
}

export const ListStatusStyled = styled('div')<ListStatusStyledProps>`
  ${listStatusFunc};
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 0.8rem;
  padding: 0.8rem;
  width: 100%;
  height: ${LIST_ITEM_HEIGHT.LG}rem; // TODO - do zastanowienia
`;

export const ListStatusMediaStyled = styled('div')`
  display: flex;
  width: 100%;
  height: 3.2rem;
  justify-content: center;
  align-items: center;
`;

export const ListStatusTextStyled = styled('div')`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 0.4rem;
  width: 100%;

  p {
    font-size: 1.3rem;
    line-height: 1.25;
  }
`;

export const ListStatusButton = styled(Button)`
  border-width: 0;
  font-size: 1.3rem;
  line-height: 1.25;
  color: inherit;
  text-decoration: underline;
  text-decoration-thickness: 0.1rem;

  @media (hover: hover) {
    &:hover:not(:disabled) {
      text-decoration-thickness: 0.2rem;
    }
  }
`;

export const ListStatusIcon = styled(Icon)`
  font-size: 3.2rem;
`;
