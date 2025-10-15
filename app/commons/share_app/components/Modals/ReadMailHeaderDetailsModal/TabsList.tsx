import useTranslations from 'commons/hooks/useTranslations';
import { updateModalParams } from 'commons/Modal/actions';
import { TabsListStyled, TabStyled } from 'commons/Tabs/styles';
import { FC, memo, useCallback } from 'commons/utils/react';
import { dispatch } from 'commons/utils/store';

import {
  TAB_DETAILS_ID,
  TAB_HEADERS_ID,
  TAB_PANEL_DETAILS_ID,
  TAB_PANEL_HEADERS_ID,
} from './constants';

export const CONTENT_TYPES = {
  details: 'details',
  headers: 'headers',
};

interface Props {
  type: keyof typeof CONTENT_TYPES;
}

const TabsList: FC<Props> = ({ type }) => {
  const t = useTranslations();

  const onTypeChange = useCallback((_, newType) => {
    dispatch(updateModalParams({ type: newType }));
  }, []);

  return (
    <TabsListStyled>
      <TabStyled
        $isActive={type !== CONTENT_TYPES.headers}
        aria-controls={TAB_PANEL_DETAILS_ID}
        aria-selected={type !== CONTENT_TYPES.headers}
        color="secondary"
        cypressId="TAB-DETAILS"
        id={TAB_DETAILS_ID}
        label={t('ctaMailDetails')}
        onClick={onTypeChange}
        params={CONTENT_TYPES.details}
        role="tab"
      />
      <TabStyled
        $isActive={type === CONTENT_TYPES.headers}
        aria-controls={TAB_PANEL_HEADERS_ID}
        aria-selected={type === CONTENT_TYPES.headers}
        color="secondary"
        cypressId="TAB-HEADERS"
        id={TAB_HEADERS_ID}
        label={t('ctaMailHeaders')}
        onClick={onTypeChange}
        params={CONTENT_TYPES.headers}
        role="tab"
      />
    </TabsListStyled>
  );
};

TabsList.displayName = 'TabsList';

export default memo(TabsList);
