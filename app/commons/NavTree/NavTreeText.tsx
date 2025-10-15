import { FC, memo, useCallback, useRef } from 'commons/utils/react';

import NavTreeItem, { NavTreeItemProps } from './NavTreeItem';

interface NavTreeTextProps {
  role?: 'alert' | 'status';
  children: React.ReactNode;
  width?: NavTreeItemProps['width'];
  height?: NavTreeItemProps['height'];
}

const NavTreeText: FC<NavTreeTextProps> = ({
  children,
  height,
  role = 'text',
  width,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const onEnter = useCallback(() => {}, []);

  return (
    <NavTreeItem
      ariaLabel={ref.current?.textContent || ''}
      height={height}
      onEnter={onEnter}
      role={role}
      tabIndex={0}
      width={width}
    >
      <div ref={ref}>{children}</div>
    </NavTreeItem>
  );
};

export default memo(NavTreeText);
