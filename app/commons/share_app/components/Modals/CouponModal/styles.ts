import styled from 'commons/Goober';
import { corner } from 'commons/utils/variables';

export const CopyTextStyled = styled('input')`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16.4rem;
  height: 3rem;
  border-radius: ${corner};
  border: 0.1rem dashed var(--shopping-code-border);
  background: var(--shopping-code-bg);
  font-weight: 700;
  font-size: 1.2rem;
  color: var(--shopping-code-txt);
  text-align: center;
  overflow: hidden;
  outline: none;
  box-shadow: none;
  cursor: pointer;
`;

export const ModalCopyActionsStyled = styled('div')`
  position: relative;
  display: block;
  margin: 2.4rem 0;
  text-align: center;
`;

export const DiscountCodeStyled = styled('div')`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
`;

const IMAGE_SIZE = '7.5rem';

export const ImageHrefStyled = styled('div')`
  position: relative;
  width: ${IMAGE_SIZE};
`;

export const CouponModalContentStyled = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const ValidUntilStyled = styled('div')`
  margin-top: 0.8rem;
  padding-bottom: 0.8rem;
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.4rem;
  color: var(--shopping-txt--secondary);
`;

export const DescriptionStyled = styled('div')`
  margin-top: 2.4rem;
  font-weight: 700;
  font-size: 1.4rem;
  line-height: 1.6rem;
`;
