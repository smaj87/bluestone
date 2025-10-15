import Dropdown from 'commons/Dropdown';
import ButtonBack from 'commons/share_app/components/Buttons/ButtonBack';
import ReadMailReplyButton from 'commons/share_app/components/ReadMailReplyButton';
import { ToolbarButtonsStyled } from 'commons/Toolbar/styles';
import { FC, memo } from 'commons/utils/react';

import DropdownDetailMore from 'components/Dropdowns/DropdownDetailMore';
import { DROPDOWN_POPUP_ID as DROPDOWN_LIST_MOVE_TO_POPUP_ID } from 'components/Dropdowns/DropdownListMoveTo/constants';
import DropdownListMoveToContent from 'components/Dropdowns/DropdownListMoveTo/ReadMailContent';

import ButtonSpam from './ButtonSpam';
import ButtonTrash from './ButtonTrash';
import { READ_MAIL_DROPDOWN_MOVE_TO_PREFIX as PREFIX } from './constants';
import Pagination from './Pagination';

const Controls: FC = () => (
  <>
    <ToolbarButtonsStyled>
      <ButtonBack color="secondary" cypressId="BUTTON-BACK" />
      <ReadMailReplyButton />
      <ButtonSpam />
      <ButtonTrash />
      <Dropdown
        id={`${PREFIX}_${DROPDOWN_LIST_MOVE_TO_POPUP_ID}`}
        placement="right"
      >
        <DropdownListMoveToContent />
      </Dropdown>
      <DropdownDetailMore />
    </ToolbarButtonsStyled>
    <Pagination />
  </>
);

export default memo(Controls);
