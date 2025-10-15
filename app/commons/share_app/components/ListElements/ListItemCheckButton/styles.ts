import { checkboxStyles } from 'commons/Checkbox/styles';
import styled from 'commons/Goober';
import { LIST_ITEM_IS_CHECKED_CLASS } from 'commons/share_app/components/ListElements/List/constants';
import { focusVisibleInsideStyles } from 'commons/utils/commonStyles';
import { corner } from 'commons/utils/variables';

export const ListItemCheckButtonStyled = styled('button')`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 0.8rem;
  width: 100%;
  height: 100%;
  border-radius: ${corner};
  cursor: pointer;

  &:before {
    ${checkboxStyles};
    content: '';
    font-family: 'webmail';

    .${LIST_ITEM_IS_CHECKED_CLASS} & {
      content: '\\e94f';
    }
  }

  &:focus-visible {
    ${focusVisibleInsideStyles};
  }

  @media (hover: hover) {
    &:hover {
      background: var(--cta-secondary-bg--hover);
    }
  }
`;
