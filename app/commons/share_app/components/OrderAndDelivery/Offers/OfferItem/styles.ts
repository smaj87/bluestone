import styled, { css } from 'commons/Goober';
import Icon from 'commons/Icon';
import { corner } from 'commons/utils/variables';

export const OfferItemStyled = styled('li')``;

export const OfferButtonStyled = styled('button')`
  display: grid;
  grid-template-columns: 4rem 1fr;
  gap: 1.6rem;
  padding: 0.8rem;
  width: 100%;
  border-radius: ${corner};
  background: transparent;
  text-align: left;
  cursor: pointer;

  &:disabled {
    cursor: default;
  }

  @media (hover: hover) {
    &:hover:not(:disabled) {
      background: var(--schema-border); // TODO zastanowić się nad var
    }
  }
`;

export const OfferImageStyled = styled('figure')`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${corner};
  border: 0.1rem solid var(--schema-border);
  width: 4rem;
  height: 4rem;
  overflow: hidden;

  img {
    display: block;
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;

    &[src=''] {
      display: none;
    }
  }
`;

export const OfferIcon = styled(Icon)`
  font-size: 2rem;
  color: var(--schema-txt--option);
`;

export const OfferDataStyled = styled('div')`
  display: grid;
  gap: 0.8rem;
  width: 100%;
`;

export const OfferNameStyled = styled('div')`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-size: 1.2rem;
  line-height: 1.4rem;
  color: var(--schema-txt);
`;

export const OfferPriceBoxStyled = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 1.4rem;
  color: var(--schema-txt--option);
`;

const isPriceTotalStyles = css`
  color: var(--schema-txt);
`;

interface OfferPriceProps {
  $isTotal?: boolean;
}

export const OfferPriceStyled = styled('div')<OfferPriceProps>`
  ${({ $isTotal }) => ($isTotal ? isPriceTotalStyles : '')};
`;
