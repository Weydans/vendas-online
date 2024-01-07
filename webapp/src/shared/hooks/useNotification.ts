import { notification as notificationAntd } from 'antd';
import { useContext, useEffect } from 'react';

import { globalContext, NotificationType } from './useGlobalContext';

export const useNotification = () => {
  const { globalData, setGlobalData } = useContext(globalContext);
  const [api, contextHolder] = notificationAntd.useNotification();
  const notification = globalData?.notification;

  const setNotification = (message: string, type: NotificationType) => {
    setGlobalData({
      ...globalData,
      notification: {
        message,
        type,
      },
    });
  };

  useEffect(() => {
    if (!notification) return;
    api[notification.type]({
      message: notification.message,
      description: null,
      placement: 'bottomRight',
    });
  }, [notification]);

  return {
    contextHolder,
    notification,
    setNotification,
  };
};
