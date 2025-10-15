import { SMART_FUNCTIONS_ID } from 'commons/hooks/useAgreements/constants';
import {
  isAgreement as isAgreementsSelector,
  isFetched as isFetchedAgreementsSelector,
} from 'commons/hooks/useAgreements/selectors';
import { removeInterfaceEffect } from 'commons/hooks/useInterfaceEffects/actions';
import { getInterfaceEffectId } from 'commons/hooks/useInterfaceEffects/selectors';
import { NewslettersRouterIsShowContext } from 'commons/share_app/components/RouterHelpers/constants';
import useHighlightNewsletterItem from 'commons/share_app/containers/Newsletters/useHighlightNewsletterItem';
import { FC, useContext, useEffect } from 'commons/utils/react';
import {
  getStateValueBySelector,
  useSelector,
} from 'commons/utils/react-redux';
import { dispatch } from 'commons/utils/store';

import { getNewsletterUrlProps } from 'containers/App/selectors';
import { SHOW_NEW_LABEL_TYPE } from 'containers/Folders/constants';

import { fetchNewsletters, sortNewsletters } from './actions';
import { isFetched as isFetchedSelector } from './selectors';

const agreementProps = { agreementId: SMART_FUNCTIONS_ID };

export const newslettersShowProps = {
  type: SHOW_NEW_LABEL_TYPE,
  subtype: 'newsletters',
};

const Hooks: FC = () => {
  const isShow = useContext(NewslettersRouterIsShowContext);

  const isFetched = useSelector(isFetchedSelector);
  const isAgreements = useSelector(isAgreementsSelector, agreementProps);
  const isFetchedAgreements = useSelector(isFetchedAgreementsSelector);
  const sort = useSelector(getNewsletterUrlProps, 'sort');

  useHighlightNewsletterItem(isShow);

  useEffect(() => {
    if (!isFetched && isShow && isAgreements && isFetchedAgreements) {
      dispatch(fetchNewsletters());
    }
  }, [isShow, isFetched, isAgreements, isFetchedAgreements]);

  useEffect(() => {
    if (isShow) {
      const id = getStateValueBySelector(
        getInterfaceEffectId,
        newslettersShowProps,
      );

      if (id) {
        dispatch(removeInterfaceEffect(SHOW_NEW_LABEL_TYPE, id));
      }
    }
  }, [isShow]);

  useEffect(() => {
    if (isShow && isFetched && sort) {
      dispatch(sortNewsletters(sort));
    }
  }, [isShow, sort, isFetched]);

  return null;
};

export default Hooks;
