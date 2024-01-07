import { createContext, useState } from 'react';

export type NotificationType = 'success' | 'info' | 'warning' | 'error';

interface Notification {
  message: string;
  type: NotificationType;
}

interface GlobalData {
  accessToken?: string;
  notification: Notification;
}

interface GlobalContextProps {
  globalData: GlobalData;
  setGlobalData: (globalData: GlobalData) => void;
}

export const globalContext: React.Context<GlobalContextProps> = createContext(
  {} as GlobalContextProps,
);

interface GlobalProviderProps {
  children: React.ReactNode;
}

export const GlobalProvider = ({ children }: GlobalProviderProps): JSX.Element => {
  const [globalData, setGlobalData] = useState<GlobalData>({} as GlobalData);

  return (
    <globalContext.Provider value={{ globalData, setGlobalData }}>
      {children}
    </globalContext.Provider>
  );
};
