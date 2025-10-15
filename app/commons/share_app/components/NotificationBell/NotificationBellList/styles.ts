import styled from 'commons/Goober';

export const NotificationBellListStyled = styled('ul')`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  row-gap: 0.4rem;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const NotificationBellItemStyled = styled('li')`
  width: 100%;
  overflow: hidden;

  &:last-child {
    hr {
      display: none;
    }
  }
`;
