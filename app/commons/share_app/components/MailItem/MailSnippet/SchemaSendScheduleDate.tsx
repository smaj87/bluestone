import { FC, memo } from 'commons/utils/react';

import { SchemaBadge, SchemaScheduleDateStyled } from './styles';
import { scheduleDate } from './utils';

interface Props {
  delayDate: string;
}

const SendScheduleDate: FC<Props> = ({ delayDate }) => (
  <SchemaBadge
    color="primary"
    icon="sendSchedule"
    size="sm"
    title={scheduleDate(delayDate)}
  >
    <SchemaScheduleDateStyled>
      {scheduleDate(delayDate)}
    </SchemaScheduleDateStyled>
  </SchemaBadge>
);

export default memo(SendScheduleDate);
