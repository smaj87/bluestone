import { isShoppingShow as isShoppingShowSelector } from 'commons/hooks/useUserConfig/selectors';
import { SUB_PAGE_NAME_HISTORY } from 'commons/share_app/containers/Mails/constants';
import { ToolbarStyled } from 'commons/Toolbar/styles';
import { FC } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

import { isPage } from 'containers/App/selectors';

import MailsListNavToolbarContent from './MailsListNavToolbarContent';

const props = { subpageName: SUB_PAGE_NAME_HISTORY };

const MailsListNavToolbar: FC = () => {
  const isShoppingShow = useSelector(isShoppingShowSelector);
  const isHistory = useSelector(isPage, props);

  return isShoppingShow && !isHistory ? (
    <ToolbarStyled data-cypress="TOOLBAR-MOBILE-BOTTOM">
      <MailsListNavToolbarContent />
    </ToolbarStyled>
  ) : null;
};

MailsListNavToolbar.displayName = 'MailsListNavToolbar';

export default MailsListNavToolbar;
