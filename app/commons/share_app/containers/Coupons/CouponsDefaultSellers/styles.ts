import Button from 'commons/Button';
import styled, { css } from 'commons/Goober';
import { CTA_SELLER_FILTER_CLASS } from 'commons/share_app/containers/Coupons/CouponsDefaultSellers/constants';
import { focusVisibleStyles } from 'commons/utils/commonStyles';
import { animationStyle } from 'commons/utils/variables';

const isActiveSellerStyles = css`
  cursor: default;
  pointer-events: none;
`;

export const SellerButtonStyled = styled(Button)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.4rem;
  font-weight: 600;
  font-size: 1.4rem;
  line-height: 2rem;
  cursor: pointer;

  &:focus-visible {
    ${focusVisibleStyles};
  }

  ${({ $isActive }) => $isActive && isActiveSellerStyles};
`;

interface SellerImageProps {
  $isActive: boolean;
}

const isActiveSellerImageStyles = css`
  color: var(--shopping-seller-txt--active);
  border-color: var(--shopping-seller-border--active);
`;

export const SellerImageStyled = styled('div')<SellerImageProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.2rem;
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  border: 0.2rem solid var(--shopping-seller-border);
  background: var(--shopping-avatar-bg--logo);
  color: var(--shopping-seller-txt);
  overflow: hidden;
  filter: drop-shadow(0 0 0 var(--shopping-seller-shadow));
  transition: filter ${animationStyle};
  will-change: filter;

  @media (hover: hover) {
    .${CTA_SELLER_FILTER_CLASS}:hover:not(:disabled) & {
      filter: drop-shadow(0 0 0.2rem var(--shopping-seller-shadow));
    }
  }

  ${({ $isActive }) => $isActive && isActiveSellerImageStyles};
`;

interface SellerNameProps {
  $isActive: boolean;
}

const isActiveSellerNameStyles = css`
  font-weight: 700;
`;

export const SellerNameStyled = styled('div')<SellerNameProps>`
  width: 100%;
  max-width: 6rem;
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 1.4rem;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: var(--shopping-seller-txt);

  ${({ $isActive }) => $isActive && isActiveSellerNameStyles};
`;
