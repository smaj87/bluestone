import {
  CLEAN,
  IS_TO_REMOVE,
  SHOW_ERROR,
  SHOW_INFO,
  SHOW_SUCCESS,
  SHOW_WARNING,
  TYPE_ERROR,
  TYPE_INFO,
  TYPE_SUCCESS,
  TYPE_WARNING,
} from './constants';
import {
  NotificationAction,
  NotificationActionType,
  NotificationState,
  NotificationType,
} from './types';

export const initialState: NotificationState = {
  notifications: [],
};

let uniqueId = 1;

const getType = (notificationType: NotificationActionType) => {
  const map: {
    [key: string]: NotificationType;
  } = {
    [SHOW_ERROR]: TYPE_ERROR,
    [SHOW_INFO]: TYPE_INFO,
    [SHOW_SUCCESS]: TYPE_SUCCESS,
    [SHOW_WARNING]: TYPE_WARNING,
  };

  return map[notificationType] || TYPE_INFO;
};

export default (
  state = initialState,
  action: NotificationAction,
): NotificationState => {
  switch (action.type) {
    case SHOW_ERROR:
    case SHOW_INFO:
    case SHOW_SUCCESS:
    case SHOW_WARNING: {
      return {
        ...state,
        notifications: [
          ...state.notifications,
          {
            delay: action.delay || 5000,
            id: `${uniqueId++}`,
            isToRemove: false,
            isPreventTimerPause: action.isPreventTimerPause || false,
            text: action.text || '',
            type: getType(action.type),
            values: action.values || {},
          },
        ],
      };
    }
    case IS_TO_REMOVE: {
      const notifications = [...state.notifications].map((notification) => ({
        ...notification,
        isToRemove:
          notification.id === action.id ? true : notification.isToRemove,
      }));

      return {
        ...state,
        notifications,
      };
    }
    case CLEAN: {
      const notifications = [...state.notifications].filter(
        ({ id }) => id !== action.id,
      );

      return {
        ...state,
        notifications,
      };
    }
    default:
  }

  return state;
};
