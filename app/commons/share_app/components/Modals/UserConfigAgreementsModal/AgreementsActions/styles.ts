import { CTA_CLASS } from 'commons/CallToAction/constants';
import styled from 'commons/Goober';
import { ModalActionsStyled } from 'commons/Modal/styles';
import { screenMdUnder } from 'commons/utils/breakpoints';

export const AgreementsActionsStyled = styled(ModalActionsStyled)`
  @media screen and (max-width: ${screenMdUnder}) {
    flex-direction: column;
    justify-content: center;
    justify-items: center;

    .${CTA_CLASS} {
      margin-right: auto;
      margin-left: auto;
      width: 100%;
      max-width: 36rem;

      &:disabled {
        // TODO - rozwiązanie do zastanowienia i przemyślenia
        color: var(--cta-default-neutral-txt--disabled);
      }
    }
  }
`;
