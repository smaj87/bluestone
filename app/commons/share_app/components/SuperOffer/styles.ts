import styled from 'commons/Goober';

export const SuperOfferStyled = styled('div')`
  border-radius: 10rem;
  background:
    linear-gradient(var(--schema-bg), var(--schema-bg)) padding-box,
    linear-gradient(
        to left,
        var(--cashback-goodie-brand--1),
        var(--cashback-goodie-brand--2)
      )
      border-box;
  border: 0.1rem solid transparent;
  padding: 0 0.4rem 0 0.2rem;
  height: 2rem;
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 700;
  width: fit-content;
`;

export const SuperOfferContentStyled = styled('div')`
  background: -webkit-linear-gradient(
    45deg,
    var(--cashback-goodie-brand--2),
    var(--cashback-goodie-brand--1)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: flex;
  gap: 0.4rem;
  justify-content: flex-start;
  align-items: center;
  line-height: 1.4;
  margin-top: 0.1rem;
  white-space: nowrap;

  img {
    align-self: center;
    max-width: 1.5rem;
    max-height: 1.5rem;
  }
`;

export const SuperOfferLabelStyled = styled('div')`
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const SuperOfferWrapperStyled = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`;
