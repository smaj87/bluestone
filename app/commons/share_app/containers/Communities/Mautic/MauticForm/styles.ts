import {
  fieldErrorStyles,
  formFieldStyles,
  labelStyles,
} from 'commons/FormElements/styles';
import styled from 'commons/Goober';
import Icon from 'commons/Icon';

export const MauticRadioWrapperStyled = styled('div')`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 1.2rem;
  text-align: right;
`;

export const MauticFormItemStyled = styled('div')`
  margin: 0 0 3.2rem;
`;

export const MauticLabelStyled = styled('label')`
  ${labelStyles};
  font-weight: 500;
`;

export const MauticFormErrorMessageStyled = styled('div')`
  ${formFieldStyles}
  ${fieldErrorStyles}
  gap: 0.4rem;
  margin: 0.4rem 0 0.8rem;
  padding: 1.6rem;
  font-size: 1.4rem;
  font-weight: 500;
`;

export const MauticFormErrorMessageIconStyled = styled(Icon)`
  font-size: 1.8rem;
`;

export const MauticTextAndLinkStyled = styled('div')`
  padding: 2.4rem 0;

  p {
    font-size: 1.2rem;
    color: var(--shopping-txt);
  }

  a {
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 1.5rem;
    color: var(--shopping-link);

    @media (hover: hover) {
      &:hover {
        color: var(--shopping-link--hover);
      }
    }
  }
`;
