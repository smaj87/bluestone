// IMPORTANT To jest taki wrapper template, ktorego uzywamy do przekazywania isShow z contextu do komponentu NavTreeItem
import NavTreeItem, { NavTreeItemProps } from 'commons/NavTree/NavTreeItem';
import { createContext, FC, memo, useContext } from 'commons/utils/react';

// import { PageVisibilityContext } from './constants';

// context tworzymy w constants.ts danego widoku np. Strona Glowna, zgody itp.
const PageVisibilityContext = createContext<boolean>(false);

// IMPORTANT To jest taki wrapper template, ktorego uzywamy do przekazywania isShow z contextu do komponentu NavTreeItem lub tez mozemy zrobic NavTreeGroup z tego

const PageNavTreeItem: FC<NavTreeItemProps> = (props) => {
  const isShow = useContext(PageVisibilityContext);

  return (
    <NavTreeItem {...props} isShow={isShow}>
      {props.children}
    </NavTreeItem>
  );
};

export default memo(PageNavTreeItem);
