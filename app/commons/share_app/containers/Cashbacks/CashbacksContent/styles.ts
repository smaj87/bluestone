import Button from 'commons/Button';
import styled from 'commons/Goober';
import Icon from 'commons/Icon';
import { corner } from 'commons/utils/variables';

export const GoodieButton = styled(Button)`
  display: inline-flex;
  padding: 0.1rem 0.8rem;
  font-weight: 700;
  font-size: 1.2rem;
  line-height: 1.4rem;
  height: 3rem;
  max-width: fit-content;
  min-width: 9rem;
  background: var(
    --gradient-goodie,
    linear-gradient(
      90deg,
      var(--cashback-goodie-brand--1) 3.7%,
      var(--cashback-goodie-brand--2) 100%
    )
  );
  border: none;
  color: var(--cashback-goodie-txt);
  margin: 0 auto;

  &:hover:not(:disabled) {
    background: var(
      --gradient-goodie,
      linear-gradient(
        90deg,
        var(--cashback-goodie-brand--1) 3.7%,
        var(--cashback-goodie-brand--2) 100%
      )
    );
    border: none;
    color: var(--cashback-goodie-txt--hover);
  }
`;

export const GoodieInfoStyled = styled('div')`
  padding: 1.6rem;
  background-color: var(--shopping-card-bg);
  border-radius: ${corner};
  max-width: 44rem;
  margin-top: 0.8rem;

  h3 {
    display: flex;
    gap: 0.4rem;
    align-items: center;
    font-size: 1.4rem;
    font-weight: 500;
    color: var(--cashback-goodie-brand--2);
    margin-bottom: 0.8rem;
  }

  p {
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 1.4rem;
    text-align: left;
    color: var(--shopping-txt--secondary);
  }

  a {
    color: var(--shopping-txt--secondary);
  }
`;

export const GoodieIconStyled = styled(Icon)`
  font-size: 2rem;
  margin-bottom: 0.4rem;
`;
