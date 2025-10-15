import styled, { css } from 'commons/Goober';
import { corner } from 'commons/utils/variables';

interface ProductItemStyledProps {
  $isShow?: boolean;
  $url?: string;
}

const productHoverStyled = css`
  cursor: pointer;
`;

export const ProductItemStyled = styled('li')<ProductItemStyledProps>`
  position: relative;
  display: ${({ $isShow }) => ($isShow ? 'grid;' : 'none;')};
  grid-template-columns: 4rem 1fr;
  gap: 0.8rem;
  align-items: center;
  padding: 0.4rem;
  min-height: 4rem;
  margin-bottom: 0.8rem;
  margin-right: -0.4rem;
  ${({ $url }) => ($url ? productHoverStyled : '')}
`;

interface ProductItemImgWrapperProps {
  $isImage?: boolean;
}

export const ProductItemImgStyled = styled(
  'figure',
)<ProductItemImgWrapperProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4rem;
  height: 4rem;
  background-color: ${({ $isImage }) =>
    $isImage ? 'transparent' : 'var(--shopping-avatar-bg)'};
  color: var(--shopping-avatar-txt);
  font-size: 4rem;

  img {
    max-width: 100%;
    max-height: 100%;
    display: block;
    object-fit: contain;
  }
`;

export const ProductItemInfoStyled = styled('div')`
  overflow: hidden;

  div {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

interface ProductTitledProps {
  url?: string;
  $isDetail?: boolean;
}

export const ProductItemInfoTitleStyled = styled('div')<ProductTitledProps>`
  margin-top: 0.4rem;
  ${({ $isDetail, url }) =>
    url && $isDetail ? 'text-decoration: underline;' : ''}
`;

export const ProductItemPriceStyled = styled('div')`
  text-align: right;
  text-decoration: none;
  font-size: 1.2rem;
  margin-top: 0.8rem;
`;

interface ProductItemListOfProductsInImageBoxProps {
  $isDetail?: boolean;
}

export const ProductItemListOfProductsInImageBoxStyled = styled(
  'figure',
)<ProductItemListOfProductsInImageBoxProps>`
  position: relative;
  width: 30rem;
  overflow: hidden;
  background-color: var(--order-img-bg);
  border-radius: ${corner};
  padding: 0 0.4rem;

  ${({ $isDetail }) => ($isDetail ? '' : 'height: 7rem;')}

  &:nth-of-type(2) {
    margin-top: 0.4rem;
  }

  img {
    max-width: 100%;
  }
`;
