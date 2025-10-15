import useTranslations from 'commons/hooks/useTranslations';
import {
  createRef,
  FC,
  memo,
  MouseEvent,
  RefObject,
  useCallback,
  useEffect,
  useMemo,
} from 'commons/utils/react';
import { useSelector } from 'commons/utils/react-redux';
import { dispatch } from 'commons/utils/store';

import { clean, setIsToRemove } from './actions';
import { NotificationContext } from './constants';
import { getNotifications } from './selectors';
import {
  ButtonClose,
  IconSign,
  MessageStyled,
  NotificationItemStyled,
  NotificationsContentStyled,
  NotificationsListStyled,
  NotificationsStyled,
  ProgressBarStyled,
  ProgressStyled,
} from './styles';
import Timer from './Timer';

const timers: { [key: string]: Timer } = {};
const progressRefs: { [key: string]: RefObject<HTMLDivElement> } = {};

const Notifications: FC = () => {
  const notifications = useSelector(getNotifications);
  const t = useTranslations();

  useEffect(() => {
    Object.values(notifications).forEach((notification) => {
      if (!timers[notification.id]) {
        const callbacks = {
          onFinish: cleanNotification(notification.id),
          onProgress: (percent: number) => {
            if (progressRefs[notification.id]?.current) {
              progressRefs[notification.id].current!.style.width =
                `${percent}%`;
            }
          },
        };

        timers[notification.id] = new Timer(notification.delay, callbacks);
      }
    });
  }, [timers, notifications]);

  const cleanNotification = useCallback(
    (id: string) => (event?: MouseEvent<HTMLButtonElement>) => {
      event?.stopPropagation();

      dispatch(setIsToRemove(id));

      if (timers[id]) {
        timers[id].clear();
        delete timers[id];
      }

      delete progressRefs[id];

      dispatch(clean(id));
    },
    [],
  );

  const providerValues = useMemo(
    () =>
      notifications.map((notification) => ({
        cleanNotification: () => cleanNotification(notification.id)(),
      })),

    [notifications, cleanNotification],
  );

  const notificationsMap = useMemo(
    () =>
      notifications.map((notification, index) => {
        if (!progressRefs[notification.id]) {
          progressRefs[notification.id] = createRef();
        }

        return (
          <NotificationItemStyled
            key={notification.id}
            aria-live="assertive"
            onMouseEnter={() =>
              notification.isPreventTimerPause
                ? null
                : timers[notification.id].pause()
            }
            onMouseLeave={() =>
              notification.isPreventTimerPause
                ? null
                : timers[notification.id].resume()
            }
            role="alert"
          >
            <ButtonClose
              icon="close"
              onClick={cleanNotification(notification.id)}
              params={{ id: notification.id }}
              title={t('ctaClose')}
            />
            <IconSign $image={notification.type} type={notification.type} />
            <MessageStyled>
              <NotificationContext.Provider value={providerValues[index]}>
                <p>{notification.text}</p>
              </NotificationContext.Provider>
            </MessageStyled>
            <ProgressBarStyled>
              <ProgressStyled ref={progressRefs[notification.id]} />
            </ProgressBarStyled>
          </NotificationItemStyled>
        );
      }),
    [notifications, cleanNotification, timers, t],
  );

  return (
    <NotificationsStyled>
      <NotificationsContentStyled>
        <NotificationsListStyled>{notificationsMap}</NotificationsListStyled>
      </NotificationsContentStyled>
    </NotificationsStyled>
  );
};

export default memo(Notifications);
