import { useEffectWithoutMount } from 'commons/utils/react';
import {
  getStateValueBySelector,
  useSelector,
} from 'commons/utils/react-redux';
import { dispatch } from 'commons/utils/store';

import { getMailListView } from 'containers/App/selectors';

import { fetchMailsSuccess } from './actions';
import { getGroups, getMails, getTotalCount } from './selectors';
import { Mail } from './types';

const useViewRecalculate = () => {
  const view = useSelector(getMailListView);

  useEffectWithoutMount(() => {
    const mails: Mail[] = [];
    const stateMails = getStateValueBySelector(getMails);
    const stateGroups = getStateValueBySelector(getGroups);
    const totalCount = getStateValueBySelector(getTotalCount);

    const mids = stateGroups.flatMap((group) =>
      group.items.filter((item) => item.type === 'item').map((item) => item.id),
    ) as number[];

    mids.forEach((mid) => {
      mails.push(stateMails[mid]);
    });

    dispatch(fetchMailsSuccess(mails, totalCount));
  }, [view]);

  return null;
};

export default useViewRecalculate;
