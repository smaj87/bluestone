import {
  getMailGroupIdById,
  isVisibleByGroupId,
} from 'commons/share_app/containers/Mails/selectors';
import { FC, memo } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

interface Props {
  id: number;
  Component: JSX.Element;
}

const IntersectionLoader: FC<Props> = ({ Component, id }) => {
  const groupId = useSelector(getMailGroupIdById, id);
  const isVisible = useSelector(isVisibleByGroupId, groupId);

  return isVisible ? Component : null;
};

export default memo(IntersectionLoader);
