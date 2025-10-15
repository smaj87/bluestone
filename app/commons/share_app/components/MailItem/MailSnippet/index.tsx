import { isMobile as isMobileSelector } from 'commons/hooks/useUserConfig/selectors';
import { FC, memo } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

import { getMailListView } from 'containers/App/selectors';

import { MAIL_ITEM_VIEWS } from '../constants';
import Content from './Content';
import { MailSnippetStyled } from './styles';

interface Props {
  id: number;
  snippet: string;
}

const MailSnippet: FC<Props> = ({ id, snippet }) => {
  const view = useSelector(getMailListView);
  const isMobile = useSelector(isMobileSelector);

  return isMobile || view !== MAIL_ITEM_VIEWS.TILE ? (
    <MailSnippetStyled>
      <Content id={id} snippet={snippet} />
    </MailSnippetStyled>
  ) : null;
};

export default memo(MailSnippet);
