import { closeDropdown } from 'commons/Dropdown/actions';
import {
  ButtonAdvancedFilter,
  GroupFiltersStyled,
  GroupLabelTitleStyled,
  GroupValueItemStyled,
  GroupValuesStyled,
} from 'commons/GroupFilters/styles';
import useTranslations from 'commons/hooks/useTranslations';
import { NEWSLETTERS_URL } from 'commons/share_app/containers/Newsletters/constants';
import { close } from 'commons/ToolbarSubmenu/actions';
import { eventsApiSendAction } from 'commons/utils/ads';
import { FC, memo, useCallback } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';
import { historyPush } from 'commons/utils/route';
import { dispatch } from 'commons/utils/store';

import { getNewsletterUrlProps } from 'containers/App/selectors';

import { NewslettersSortType } from '../types';
import {
  DROPDOWN_POPUP_ID,
  SORT_OPTIONS_NEWSLETTERS_ID,
  SORT_TYPES,
} from './constants';
import ResetSort from './ResetSort';

const Content: FC = () => {
  const t = useTranslations();
  const currentlySelectedSort = useSelector(getNewsletterUrlProps, 'sort');

  const isActive = useCallback(
    (sort: NewslettersSortType) => sort === currentlySelectedSort,
    [currentlySelectedSort],
  );

  const onClick = useCallback((_, newSort: NewslettersSortType) => {
    historyPush(`/${NEWSLETTERS_URL}/_sort/${newSort}`);

    dispatch(
      eventsApiSendAction({
        event_category: 'newsletters',
        event_action: `newsletters_sort_by_${newSort}`,
      }),
    );

    dispatch(close());
    dispatch(closeDropdown(DROPDOWN_POPUP_ID));
  }, []);

  return (
    <GroupFiltersStyled>
      <GroupLabelTitleStyled htmlFor={SORT_OPTIONS_NEWSLETTERS_ID}>
        {t('sortBy')}
      </GroupLabelTitleStyled>
      <GroupValuesStyled id={SORT_OPTIONS_NEWSLETTERS_ID} role="list">
        {SORT_TYPES.map((sort) => (
          <GroupValueItemStyled key={sort} role="listitem">
            <ButtonAdvancedFilter
              $isActive={isActive(sort)}
              cypressId="BUTTON-NEWSLETTER-SORT-FROM"
              label={t('getSort', { sort })}
              onClick={onClick}
              params={sort}
              size="md"
            />
          </GroupValueItemStyled>
        ))}
      </GroupValuesStyled>
      <ResetSort onClick={onClick} />
    </GroupFiltersStyled>
  );
};

Content.displayName = 'Content';

export default memo(Content);
