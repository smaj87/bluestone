import { isMobile as isMobileSelector } from 'commons/hooks/useUserConfig/selectors';
import { ListItemAreaContentStyled } from 'commons/share_app/components/ListElements/List/styles';
import { MAIL_ITEM_VIEWS } from 'commons/share_app/components/MailItem/constants';
import { FC, memo } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

import { getMailListView } from 'containers/App/selectors';

import { SlotFlatSnippetStyled } from './styles';
import { Selector } from './types';

interface Props {
  selector: Selector;
  subtitleKey: string;
}

const SlotFlatSnippet: FC<Props> = ({ selector, subtitleKey }) => {
  const isMobile = useSelector(isMobileSelector);
  const view = useSelector(getMailListView);
  const subtitle = useSelector(selector, subtitleKey);

  return isMobile || view !== MAIL_ITEM_VIEWS.TILE ? (
    <SlotFlatSnippetStyled data-cypress="SLOT-INBOX-SNIPPET">
      <ListItemAreaContentStyled>
        <span>{subtitle}</span>
      </ListItemAreaContentStyled>
    </SlotFlatSnippetStyled>
  ) : null;
};

export default memo(SlotFlatSnippet);
