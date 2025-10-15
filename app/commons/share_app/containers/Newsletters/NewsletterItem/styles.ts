import Button from 'commons/Button';
import styled from 'commons/Goober';
import { shoppingTileButtonStyles } from 'commons/share_app/components/ShoppingPages/ShoppingTile/styles';

export const ContentStyled = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0.8rem;
  width: 100%;
  min-width: 0;
`;

export const ContentGroupStyled = styled('div')`
  min-width: 0;
  width: 100%;
`;

export const TitleStyled = styled('div')`
  display: block;
  width: 100%;
  font-weight: 700;
  font-size: 1.4rem;
  line-height: 1.2;
  text-align: left;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const TextStyled = styled('div')`
  display: block;
  width: 100%;
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.2;
  color: var(--shopping-txt--secondary);
  text-align: left;
  pointer-events: none;
`;

export const NewsletterButtonStyled = styled(Button)`
  ${shoppingTileButtonStyles};
  margin-top: auto;
`;
