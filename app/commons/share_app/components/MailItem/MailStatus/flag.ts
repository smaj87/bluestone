import { css } from 'commons/Goober';
import { LIST_ITEM_IS_UNSEEN_CLASS } from 'commons/share_app/components/ListElements/List/constants';

import { MailFlagStyledProps } from './styles';

const mailFlagTypes = {
  info: css`
    .${LIST_ITEM_IS_UNSEEN_CLASS} & {
      color: var(--state-info);
    }
  `,
  error: css`
    .${LIST_ITEM_IS_UNSEEN_CLASS} & {
      color: var(--state-error);
    }
  `,
  success: css`
    .${LIST_ITEM_IS_UNSEEN_CLASS} & {
      color: var(--state-success);
    }
  `,
};

export const mailFlagTypesFunc = ({
  $flag,
}: {
  $flag?: MailFlagStyledProps['$flag'];
}) => ($flag ? mailFlagTypes[$flag] : '');
