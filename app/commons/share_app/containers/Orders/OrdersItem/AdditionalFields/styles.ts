import styled from 'commons/Goober';

export const CollectInfoStyled = styled('div')`
  display: flex;
  justify-content: space-between;
  padding: 0.8rem 0;
  border-bottom: 0.1rem solid var(--shopping-tab-border);
  font-size: 1.4rem;

  & > div {
    flex: 1 0 auto;
  }
`;
