import { FC } from 'commons/utils/react';

import { ColorsContentStyled } from '../styles';
import BackgroundColor from './BackgroundColor';

interface Props {
  editorId: string;
  popUpId: string;
}

const ColorsDropdownContent: FC<Props> = ({ editorId, popUpId }) => (
  <ColorsContentStyled>
    <BackgroundColor editorId={editorId} popUpId={popUpId} />
  </ColorsContentStyled>
);

export default ColorsDropdownContent;
