import ComponentClientNotFound from 'commons/ClientComponentNotFound';
import { FC } from 'commons/utils/react';

interface Props {
  clientId?: string;
  panelId: string;
}

const Content: FC<Props> = () => <ComponentClientNotFound />;

export default Content;
