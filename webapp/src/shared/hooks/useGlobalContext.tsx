import { createContext, useContext, useState } from 'react';

interface GlobalData {
  accessToken?: string;
}

interface GlobalContextProps {
  globalData: GlobalData;
  setGlobalData: (globalData: GlobalData) => void;
}

export const globalContext = createContext({} as GlobalContextProps);

interface GlobalProviderProps {
  children: React.ReactNode;
}

export const GlobalProvider = ({ children }: GlobalProviderProps) => {
  const [globalData, setGlobalData] = useState<GlobalData>({});

  return (
    <globalContext.Provider value={{ globalData, setGlobalData }}>
      {children}
    </globalContext.Provider>
  );
};

export const useAccessToken = () => {
  const { globalData, setGlobalData } = useContext(globalContext);

  const setAccessToken = (accessToken: string) => {
    setGlobalData({
      ...globalData,
      accessToken,
    });
  };

  return {
    accessToken: globalData?.accessToken,
    setAccessToken,
  };
};
