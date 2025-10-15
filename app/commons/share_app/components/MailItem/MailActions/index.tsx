import { isHoverById } from 'commons/share_app/containers/Mails/selectors';
import { FC, memo, useEffect, useRef } from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';

import Content from './Content';

interface Props {
  id: number;
  prefix?: string;
}

const MailActions: FC<Props> = ({ id, prefix = '' }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isHover = useSelector(isHoverById, id);

  useEffect(() => {
    const stopPropagation = (e: Event) => {
      e.stopPropagation();
    };

    if (isHover) {
      containerRef.current?.addEventListener?.('click', stopPropagation);
    }
  }, [isHover]);

  return isHover ? (
    <Content forRef={containerRef} id={id} prefix={prefix} />
  ) : null;
};

export default memo(MailActions);
