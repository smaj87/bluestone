import Badge from 'commons/Badge';
import { closeDropdown } from 'commons/Dropdown/actions';
import {
  GroupButton,
  GroupButtonExtended,
  GroupButtonExtendedInfoStyled,
  GroupListItemStyled,
  GroupListStyled,
} from 'commons/GroupActions/styles';
import useTranslations from 'commons/hooks/useTranslations';
import {
  getAliasesEmails,
  getMainAccount,
  isMobile,
} from 'commons/hooks/useUserConfig/selectors';
import { getMailField } from 'commons/share_app/containers/ReadMail/selectors';
import { ReadMailParsed } from 'commons/share_app/containers/ReadMail/types';
import { close } from 'commons/ToolbarSubmenu/actions';
import history from 'commons/utils/history';
import { FC, useCallback, useMemo } from 'commons/utils/react';
import {
  getStateValueBySelector,
  useSelector,
} from 'commons/utils/react-redux';
import { dispatch } from 'commons/utils/store';

import {
  NEW_MAIL_FORWARD_URL_NAME,
  NEW_MAIL_REPLAY_ALL_URL_NAME,
  NEW_MAIL_REPLAY_URL_NAME,
  NEW_MAIL_URL_NAME,
} from 'containers/NewMail/constants';
import { escapeName } from 'utils/mail';

import { DROPDOWN_POPUP_ID } from './constants';

const Content: FC = () => {
  const t = useTranslations();

  const aliases = useSelector(getAliasesEmails);
  const mainAccount = useSelector(getMainAccount);

  const from = useSelector(getMailField, 'from') as ReadMailParsed['from'];
  const to = useSelector(getMailField, 'to') as ReadMailParsed['to'];
  const cc = useSelector(getMailField, 'cc') as ReadMailParsed['cc'];
  const bcc = useSelector(getMailField, 'bcc') as ReadMailParsed['bcc'];

  const blackList = useMemo(() => {
    const result = { [mainAccount]: 1 };

    aliases.forEach((a) => {
      result[a] = 1;
    });

    return result;
  }, [mainAccount, aliases]);

  const replyString = useMemo(() => {
    let result = '';

    if (from?.email && !blackList[from.email]) {
      result = `${t('to')} ${escapeName(from.name) || from.email}`;
    }

    return result;
  }, [blackList, from?.name, from?.email]);

  const replayAllString = useMemo(() => {
    let count = 0;

    [from, ...to, ...cc, ...bcc].forEach((c) => {
      if (c?.email && !blackList[c.email]) {
        count += 1;
      }
    });

    return count > 0 ? (
      <>
        {t('replyAllInfo', {
          content: (
            <Badge
              color="primary"
              label={`${count}`}
              shape="circle"
              size="sm"
            />
          ),
          count,
        })}
      </>
    ) : (
      ''
    );
  }, [blackList, from, to, cc, bcc]);

  const onReply = useCallback((_, type) => {
    if (getStateValueBySelector(isMobile)) {
      dispatch(close());
    } else {
      dispatch(closeDropdown(DROPDOWN_POPUP_ID));
    }

    history.push(
      `/${NEW_MAIL_URL_NAME}/_type/${type}/_mid/${getStateValueBySelector(getMailField, 'mid')}`,
    );
  }, []);

  return (
    <GroupListStyled>
      <GroupListItemStyled>
        <GroupButtonExtended
          $align="left"
          cypressId="DROPDOWN-BUTTON-REPLY"
          icon="answer"
          label={`${t('ctaReply')}`}
          onClick={onReply}
          params={NEW_MAIL_REPLAY_URL_NAME}
          size="md"
        >
          <GroupButtonExtendedInfoStyled>
            {replyString}
          </GroupButtonExtendedInfoStyled>
        </GroupButtonExtended>
      </GroupListItemStyled>
      <GroupListItemStyled>
        <hr />
      </GroupListItemStyled>
      <GroupListItemStyled>
        <GroupButtonExtended
          $align="left"
          cypressId="DROPDOWN-BUTTON-REPLY-ALL"
          icon="answerAll"
          label={t('ctaReplyAll')}
          onClick={onReply}
          params={NEW_MAIL_REPLAY_ALL_URL_NAME}
          size="md"
        >
          <GroupButtonExtendedInfoStyled>
            {replayAllString}
          </GroupButtonExtendedInfoStyled>
        </GroupButtonExtended>
      </GroupListItemStyled>
      <GroupListItemStyled>
        <hr />
      </GroupListItemStyled>
      <GroupListItemStyled>
        <GroupButton
          $align="left"
          cypressId="DROPDOWN-BUTTON-FORWARD"
          icon="forward"
          label={t('ctaForward')}
          onClick={onReply}
          params={NEW_MAIL_FORWARD_URL_NAME}
          size="md"
        />
      </GroupListItemStyled>
    </GroupListStyled>
  );
};

Content.displayName = 'Content';

export default Content;
