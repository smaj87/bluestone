import {
  GroupListItemStyled,
  GroupListStyled,
} from 'commons/GroupActions/styles';
import ButtonBlockDomain from 'commons/share_app/components/Toolbars/ReadMailToolbar/ButtonBlockDomain';
import ButtonBlockSender from 'commons/share_app/components/Toolbars/ReadMailToolbar/ButtonBlockSender';
import { FC, memo } from 'commons/utils/react';

import ButtonHeaders from './ButtonHeaders';
import ButtonHistory from './ButtonHistory';
import ButtonMoveTo from './ButtonMoveTo';
import ButtonPrint from './ButtonPrint';
import ButtonStatus from './ButtonStatus';
import ButtonUnsubscribe from './ButtonUnsubscribe';

const Content: FC = () => (
  <GroupListStyled>
    <GroupListItemStyled>
      <ButtonStatus />
    </GroupListItemStyled>
    <GroupListItemStyled>
      <ButtonMoveTo />
    </GroupListItemStyled>
    <GroupListItemStyled>
      <ButtonPrint />
    </GroupListItemStyled>
    <GroupListItemStyled>
      <hr />
    </GroupListItemStyled>
    <GroupListItemStyled>
      <ButtonUnsubscribe />
    </GroupListItemStyled>
    <ButtonBlockSender />
    <ButtonBlockDomain />
    <GroupListItemStyled>
      <ButtonHistory />
    </GroupListItemStyled>
    <GroupListItemStyled>
      <hr />
    </GroupListItemStyled>
    <ButtonHeaders />
  </GroupListStyled>
);

export default memo(Content);
