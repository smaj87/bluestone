import {
  getAttachmentGroupIdById,
  isVisibleByGroupId,
} from 'commons/share_app/containers/Attachments/selectors';
import { FC, memo } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

interface Props {
  id: string;
  Component: JSX.Element;
}

const IntersectionLoader: FC<Props> = ({ Component, id }) => {
  const groupId = useSelector(getAttachmentGroupIdById, id);
  const isVisible = useSelector(isVisibleByGroupId, groupId);

  return isVisible ? Component : null;
};

export default memo(IntersectionLoader);
