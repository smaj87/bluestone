import { setState } from 'commons/utils/webStorage';

import { KEY } from './constants';
import {
  ApiNotification,
  ApiNotificationsResponse,
  Notification,
} from './types';

export const normalizeNotifications = (
  notifications: ApiNotificationsResponse,
) => {
  const result: Notification[] = [];

  Object.values(notifications).forEach((group) => {
    const filteredGroup = filterNotifications(group);
    const sortedGroup = sortNotifications(filteredGroup);

    if (sortedGroup.length) {
      result.push({
        ...sortedGroup[0],
        ctimestamp: Number.parseInt(sortedGroup[0].ctime, 10) * 1000,
        count: sortedGroup.length,
        nids_group: sortedGroup.map((g) => g.nid),
      });
    }
  });

  return sortNotifications(result);
};

export const filterNotifications = (
  notifications: Notification[] | ApiNotification[],
) => {
  const daysAgo30 = Date.now() - 20 * 24 * 60 * 60 * 1000;

  return notifications.filter(
    (n) =>
      n.processing_state === 'SENT' &&
      Number.parseInt(n.ctime, 10) * 1000 >= daysAgo30,
  );
};

export const sortNotifications = (
  notifications: Notification[] | ApiNotification[],
) => {
  const sort = (arr: Notification[] | ApiNotification[]) =>
    arr
      .sort((a, b) => {
        const dateA = new Date(Number.parseInt(a.ctime, 10) * 1000);
        const dateB = new Date(Number.parseInt(b.ctime, 10) * 1000);

        return dateA.getTime() - dateB.getTime();
      })
      .reverse();

  const unreads = sort(
    notifications.filter(
      (notification) => notification.processing_state === 'SENT',
    ),
  );

  const reads = sort(
    notifications.filter(
      (notification) => notification.processing_state !== 'SENT',
    ),
  );

  return [...unreads, ...reads];
};

export const saveToState = (notifications: Notification[]) => {
  setState(KEY, notifications, localStorage, 30 * 24 * 60 * 60 * 1000); // 30days expire
};
