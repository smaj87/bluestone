import ComponentClientNotFound from 'commons/ClientComponentNotFound';
import { FC, memo } from 'commons/utils/react';

interface Props {
  className?: string;
}

const AdPlug: FC<Props> = () => <ComponentClientNotFound />;

export default memo(AdPlug);
