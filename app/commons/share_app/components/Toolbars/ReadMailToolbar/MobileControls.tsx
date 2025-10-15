import useTranslations from 'commons/hooks/useTranslations';
import ReadMailReplyButton from 'commons/share_app/components/ReadMailReplyButton';
import ButtonTrash from 'commons/share_app/components/Toolbars/ReadMailToolbar/ButtonTrash';
import ContentMore from 'commons/share_app/components/Toolbars/ReadMailToolbar/ContentMore';
import { getMailField } from 'commons/share_app/containers/ReadMail/selectors';
import {
  ToolbarGroupItemStyled,
  ToolbarGroupStyled,
} from 'commons/Toolbar/styles';
import ToolbarSubmenu from 'commons/ToolbarSubmenu';
import { FC, memo } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

import { READ_MAIL_MORE_MENU_ID } from 'components/Dropdowns/constants';

import ButtonSpam from './ButtonSpam';

const MobileControls: FC = () => {
  const t = useTranslations();

  return (
    <ToolbarGroupStyled $space="md" role="list">
      <ToolbarGroupItemStyled role="listitem">
        <ReadMailReplyButton />
      </ToolbarGroupItemStyled>
      <ToolbarGroupItemStyled role="listitem">
        <ButtonSpam />
      </ToolbarGroupItemStyled>
      <ToolbarGroupItemStyled role="listitem">
        <ButtonTrash />
      </ToolbarGroupItemStyled>
      <ToolbarGroupItemStyled role="listitem">
        <ToolbarSubmenu
          color="toolbarSubmenu"
          content={ContentMore}
          cypressId="TOOLBAR-MORE"
          icon="menuMoreHorizontal"
          isDisabled={!useSelector(getMailField, 'isFetched')}
          isMobile
          label={t('ctaMore')}
          size="md"
          submenuId={READ_MAIL_MORE_MENU_ID}
        />
      </ToolbarGroupItemStyled>
    </ToolbarGroupStyled>
  );
};

export default memo(MobileControls);
