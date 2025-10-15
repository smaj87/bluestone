import styled from 'commons/Goober';
import { screenMdAbove } from 'commons/utils/breakpoints';
import { corner } from 'commons/utils/variables';

export const MauticWrapperStyled = styled('section')`
  position: relative;
  display: none;
  width: 100%;
  min-width: 0;
  padding: 1.6rem 0.8rem 5.6rem;
  background-color: var(--shopping-bg);
  color: var(--shopping-txt);

  @media (min-width: ${screenMdAbove}) {
    padding-inline: 1.6rem;
    border-radius: ${corner};
  }
`;

export const MauticContentStyled = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;
  width: 100%;
  background-color: var(--shopping-tile-bg);
  border-radius: 0.8rem;
  color: var(--shopping-txt);

  @media screen and (min-width: ${screenMdAbove}) {
    flex-direction: row;
  }
`;

export const MauticAreaStyled = styled('div')`
  padding: 2.4rem 0 0;
  text-align: center;
  min-height: calc(100vh - 20rem);

  h2 {
    margin: 1.4rem auto 1.6rem;
    font-size: 2.8rem;
    line-height: 3.2rem;
    font-weight: 700;
    text-align: center;
    width: 100%;
  }

  p {
    font-size: 1.6rem;
    line-height: 2rem;
    color: var(--banner-txt--secondary);
    margin: 0 auto;
    margin-bottom: 3.2rem;
    max-width: 56rem;
  }

  ul {
    display: block;
    margin: 2.4rem auto 0;
  }

  li {
    font-size: 1.6rem;
    line-height: 2rem;
    margin: 0 auto;
    max-width: 25rem;
    text-align: left;
  }

  @media screen and (min-width: ${screenMdAbove}) {
    padding: 2.4rem;
    flex-basis: 100%;
    width: calc(100% - 39rem);
  }
`;

export const MauticImgStyled = styled('img')`
  margin: 2.4rem 3.6rem;

  @media screen and (min-width: ${screenMdAbove}) {
    margin-top: 6.4rem;
  }
`;

export const MauticSurveyStyled = styled('div')`
  padding: 2.4rem;
  text-align: center;
  margin: 0 auto;
  max-width: 56rem;

  button {
    width: 100%;
    margin-top: 1.6rem;
  }

  input[type='file'] {
    padding: 0;
  }

  input[type='file']::file-selector-button {
    background-color: var(--input-bg);
    color: var(--input-txt);
    border: 0;
    border-right: 0.1rem solid var(--input-border);
    padding: 0.6rem 1.5rem;
    margin-right: 1rem;
    transition: 0.5s;
  }

  input[type='file']::file-selector-button:hover {
    background-color: var(--input-bg);
    border: 0;
    border-right: 0.1rem solid var(--input-border);
    cursor: pointer;
  }

  @media screen and (min-width: ${screenMdAbove}) {
    padding-bottom: 10rem;
  }
`;

export const MauticThxPageActionsStyled = styled('div')`
  max-width: 30rem;
  margin: 0 auto;
`;
