import { COUNT_PER_GROUP } from './constants';
import { Group, Items, ListState } from './types';

export const getGroupIdsCount = (groups: Group[]) => {
  let count = 0;

  groups.forEach((group) => {
    count += group.items.filter((item) => item.type === 'item').length;
  });

  return count;
};

export const extendGroups = (
  itemList: object[], // todo? @spiascik
  groups: ListState['groups'],
  checks: ListState['checks'],
  options: {
    getItemHeight: (item: object) => number;
    countPerGroup?: number;
    getId?: (item: object) => string | number;
  },
) => {
  const countsPerGroup = options?.countPerGroup || COUNT_PER_GROUP;

  const newItems: Items = {};
  const newGroups = [...groups];
  const newChecks = { ...checks };

  const groupsLength = newGroups.length;
  const lastGroup = newGroups[groupsLength - 1];
  const indexShift = getGroupIdsCount(newGroups);
  const isNewGroup =
    !groupsLength || lastGroup?.items?.length >= countsPerGroup;

  if (itemList.length) {
    let group: Group = isNewGroup
      ? { id: (lastGroup?.id || 0) + 1, items: [], height: 0 }
      : { ...lastGroup, items: [...lastGroup.items] };

    if (isNewGroup) {
      newGroups.push(group);
    } else {
      newGroups[groupsLength - 1] = group;
    }

    itemList.forEach((item, index) => {
      if (group.items.length >= countsPerGroup) {
        group = { id: group.id + 1, items: [], height: 0 };
        newGroups.push(group);
      }

      // @ts-ignore todo @spiascik
      const id = item.id || options?.getId?.(item) || '';
      newChecks[id] = false;

      newItems[id] = {
        ...item,
        index: indexShift + index,
        id,
        groupId: group.id,
      };

      group.items.push({
        id,
        type: 'item',
      });

      group.height += options.getItemHeight(item) * 10;
    });
  }

  return {
    items: newItems,
    groups: newGroups,
    checks: newChecks,
  };
};
