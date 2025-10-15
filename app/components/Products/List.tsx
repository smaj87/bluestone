import useIntersectionObserver from 'components/Products/useIntersectionObserver';
import { getGroups } from 'containers/Products/selectors';
import { FC, memo } from 'utils/react';
import { useSelector } from 'utils/react-redux';

import PartialList from './PartialList';

const List: FC = () => {
  const groups = useSelector(getGroups);
  const { observer } = useIntersectionObserver();

  return (
    <div>
      {observer
        ? groups.map((group) => (
            <PartialList key={group.id} group={group} observer={observer} />
          ))
        : null}
    </div>
  );
};

export default memo(List);
