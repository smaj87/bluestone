import { closeDropdown } from 'commons/Dropdown/actions';
import {
  GroupButton,
  GroupListItemStyled,
  GroupListSeparator,
  GroupListStyled,
} from 'commons/GroupActions/styles';
import useTranslations from 'commons/hooks/useTranslations';
import { isMobile as isMobileSelector } from 'commons/hooks/useUserConfig/selectors';
import { openModal } from 'commons/Modal/actions';
import {
  NEWSLETTER_DELETE_CONFIRMATION_MODAL_ID,
  NEWSLETTER_REPORT_MODAL_ID,
} from 'commons/share_app/components/Modals/constants';
import { close } from 'commons/ToolbarSubmenu/actions';
import { eventsApiSendAction } from 'commons/utils/ads';
import { FC, memo, useCallback } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';
import { dispatch } from 'commons/utils/store';

import { DELETE_MAILS_NEWSLETTER_DAYS_COUNT } from '../constants';

interface Props {
  email: string;
  name?: string;
  count: number;
  popUpId: string;
}

const Content: FC<Props> = ({ count, email, name, popUpId }) => {
  const t = useTranslations();
  const isMobile = useSelector(isMobileSelector);

  const onClickDelete = useCallback(() => {
    dispatch(
      openModal(NEWSLETTER_DELETE_CONFIRMATION_MODAL_ID, {
        name,
        email,
        count,
      }),
    );
    dispatch(
      eventsApiSendAction({
        event_category: 'newsletters',
        event_action: 'newsletters_click_delete',
      }),
    );
    if (isMobile) {
      dispatch(close());
    } else {
      dispatch(closeDropdown(popUpId));
    }
  }, [isMobile, count, email, name, popUpId]);

  const onClickReport = useCallback(() => {
    dispatch(openModal(NEWSLETTER_REPORT_MODAL_ID, { name, email }));
    dispatch(
      eventsApiSendAction({
        event_category: 'newsletters',
        event_action: 'newsletters_click_report',
      }),
    );

    if (isMobile) {
      dispatch(close());
    } else {
      dispatch(closeDropdown(popUpId));
    }
  }, [isMobile, email, name, popUpId]);

  return (
    <GroupListStyled>
      <GroupListItemStyled>
        <GroupButton
          $align="left"
          color="secondary"
          icon="remove"
          label={t('newsletterDeleteOlderThan', {
            daysCount: DELETE_MAILS_NEWSLETTER_DAYS_COUNT,
          })}
          onClick={onClickDelete}
          size="md"
        />
      </GroupListItemStyled>
      <GroupListItemStyled>
        <GroupListSeparator />
      </GroupListItemStyled>
      <GroupListItemStyled>
        <GroupButton
          $align="left"
          color="secondary"
          icon="error"
          label={t('ctaReportProblem')}
          onClick={onClickReport}
          size="md"
        />
      </GroupListItemStyled>
    </GroupListStyled>
  );
};

export default memo(Content);
