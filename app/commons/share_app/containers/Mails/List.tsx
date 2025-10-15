import useIntersectionObserver from 'commons/ListIntersectionObserver/useIntersectionObserver';
import { ListStyled } from 'commons/share_app/components/ListElements/List/styles';
import LoadingItemDesktop from 'commons/share_app/containers/Mails/LoadingItemDesktop';
import { FC, memo } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

import { setGroupVisibility } from './actions';
import PartialList from './PartialList';
import { getGroups } from './selectors';

const List: FC = () => {
  const groups = useSelector(getGroups);
  const { observer } = useIntersectionObserver({ setGroupVisibility });

  return (
    <ListStyled role="group">
      {observer
        ? groups.map((group) => (
            <PartialList key={group.id} group={group} observer={observer} />
          ))
        : null}
      <LoadingItemDesktop />
    </ListStyled>
  );
};

export default memo(List);
