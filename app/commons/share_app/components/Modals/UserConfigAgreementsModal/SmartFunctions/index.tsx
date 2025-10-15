import ComponentClientNotFound from 'commons/ClientComponentNotFound';
import { FC, memo } from 'commons/utils/react';

interface Props {
  isEdit: boolean;
}

const SmartFunctions: FC<Props> = () => <ComponentClientNotFound />;

export default memo(SmartFunctions);
