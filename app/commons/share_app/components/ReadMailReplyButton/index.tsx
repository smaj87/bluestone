import useTranslations from 'commons/hooks/useTranslations';
import { isMobile as isMobileSelector } from 'commons/hooks/useUserConfig/selectors';
import {
  MainActionButton,
  MultiActionGroupStyled,
} from 'commons/MultiActionGroup/styles';
import ReadMailReplyDropdown from 'commons/share_app/components/Dropdowns/ReadMailReplyDropdown';
import { getMailField } from 'commons/share_app/containers/ReadMail/selectors';
import { ReadMailParsed } from 'commons/share_app/containers/ReadMail/types';
import { FC, memo, useCallback } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';
import { historyPush } from 'commons/utils/route';

import {
  NEW_MAIL_REPLAY_URL_NAME,
  NEW_MAIL_URL_NAME,
} from 'containers/NewMail/constants';

export const ReadMailReplyButton: FC = () => {
  const t = useTranslations();
  const isMobile = useSelector(isMobileSelector);
  const mid = useSelector(getMailField, 'mid') as ReadMailParsed['mid'];
  const isMobileButtonDisabled = isMobile && mid <= 0;

  const onAnswer = useCallback(() => {
    historyPush(
      `/${NEW_MAIL_URL_NAME}/_type/${NEW_MAIL_REPLAY_URL_NAME}/_mid/${mid}`,
    );
  }, [mid]);

  return (
    <MultiActionGroupStyled>
      <MainActionButton
        color={isMobileButtonDisabled ? 'toolbarSubmenu' : 'primary'}
        cypressId="BUTTON-REPLY"
        icon="answer"
        isDisabled={mid <= 0}
        isMobile
        label={t('ctaReply')}
        onClick={onAnswer}
        size="md"
      />
      <ReadMailReplyDropdown />
    </MultiActionGroupStyled>
  );
};

export default memo(ReadMailReplyButton);
