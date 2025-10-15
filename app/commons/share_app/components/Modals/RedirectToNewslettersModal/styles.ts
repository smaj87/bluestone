import Checkbox from 'commons/Checkbox';
import styled from 'commons/Goober';

export const StyledCheckbox = styled(Checkbox)`
  margin-top: 1.2rem;
  // TODO przygotowanie wariantów checkboxa w zaleznosci od komponentu
  & > span {
    font-size: 1.6rem;
    line-height: 2.2rem;
    color: var(--app-txt);
  }
`;
