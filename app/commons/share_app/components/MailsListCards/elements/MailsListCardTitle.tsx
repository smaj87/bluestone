import { FC, memo } from 'commons/utils/react';

import { MailsListCardTitleStyled } from '../styles';

interface MailsListCardTitleProps {
  title?: string;
  isMultiply?: boolean;
}

export const MailsListCardTitle: FC<MailsListCardTitleProps> = ({
  isMultiply,
  title,
}) => (
  <MailsListCardTitleStyled $isMultiply={isMultiply}>
    {title}
  </MailsListCardTitleStyled>
);

MailsListCardTitle.displayName = 'MailsListCardTitle';

export default memo(MailsListCardTitle);
