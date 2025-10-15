import styled from 'commons/Goober';
import {
  screenLgAbove,
  screenXlAbove,
  screenXsAbove,
} from 'commons/utils/breakpoints';

export const AttachmentsTilesStyled = styled('ul')`
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 0.8rem;
  grid-row-gap: 0.8rem;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0;
  padding: 0;
  width: 100%;
  min-width: 0;
  list-style: none;

  @media screen and (min-width: ${screenXsAbove}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: ${screenLgAbove}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (min-width: ${screenXlAbove}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const AttachmentsTilesItemStyled = styled('li')``;
