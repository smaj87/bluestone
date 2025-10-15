import { ListItemSizes } from 'commons/share_app/components/ListElements/List/types';

export interface GroupItem {
  id: number | string;
  type: 'item' | 'ad';
  pos?: number;
  slot?: 'top' | 'right' | 'right2'; // gazeta inbox
  size?: ListItemSizes;
}

export interface Group {
  id: number;
  items: GroupItem[];
  height: number;
}

export interface Items {
  [id: string | number]: object;
}

export interface ListState {
  groups: Group[];
  checks: { [id: string | number]: boolean };
  groupVisibility: { [id: string | number]: boolean };
}
