import { FC, memo } from 'commons/utils/react';

import {
  MailsListCardLabelStyled,
  MailsListCardLabelTextStyled,
} from '../styles';
import { Brand } from '../types';

interface MailsListCardLabelProps {
  label?: string;
  brand: Brand;
}

export const MailsListCardLabel: FC<MailsListCardLabelProps> = ({
  brand,
  label,
}) => (
  <MailsListCardLabelStyled $brand={brand}>
    <MailsListCardLabelTextStyled>{label}</MailsListCardLabelTextStyled>
  </MailsListCardLabelStyled>
);

MailsListCardLabel.displayName = 'MailsListCardLabel';

export default memo(MailsListCardLabel);
