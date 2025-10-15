import { FC } from 'commons/utils/react';

import { ColorsContentStyled } from '../styles';
import TextColor from './TextColor';

interface Props {
  editorId: string;
  popUpId: string;
}

const ColorsDropdownContent: FC<Props> = ({ editorId, popUpId }) => (
  <ColorsContentStyled>
    <TextColor editorId={editorId} popUpId={popUpId} />
  </ColorsContentStyled>
);

export default ColorsDropdownContent;
